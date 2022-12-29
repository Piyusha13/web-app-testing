import React, { useEffect } from 'react'
import Verification from "../../assets/otp-icon.svg";
import "./VerificationPage.style.css"
import VerificationInput from "react-verification-input";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { useContext } from 'react';
import { GlobalInfo } from '../../App';
import { verifyEmail } from '../../services/login/signup';
import { COGNITO_STATUS } from '../../services/login/constants';
import { resendVerificationCode } from '../../services/login/signup';



const VerificationPage = () => {

    const [otp, setOtp] = useState("");
    const [counter, setCounter] = useState(30);
    const navigate = useNavigate();
    const { email } = useContext(GlobalInfo);



    const handleSubmit =async () => {

        console.log(otp);
        const response = await verifyEmail(email, otp);


        // console.log('response', response);
        
        console.log('response promise', response.PromiseResult);
        if (response.status === COGNITO_STATUS.failed) {
            toast.error(`${response.message}`)
            // toast.error("Invalid OTP");

        }
        else if (response.status === COGNITO_STATUS.success) {
        // createUserInstance(email);
        toast.success("Account Created, Successfully created account");
        navigate('/login');
        }

    };

    const resendOTP = async () => {
        const response = await resendVerificationCode(email);
        if (response.status === COGNITO_STATUS.failed) {
            toast.error("Form Error");
        }
    };

    useEffect(() => {

        if (counter) {
            setTimeout(() => {
                setCounter(counter - 1);
            }, 1000);
        }
    }, [counter]);

    return (
        <div className="d-flex  verification-container container-xxl">
            <div className='verification-img-div col d-flex justify-content-center align-items-center'>
                <img src={Verification} className="" alt="" />
            </div>
            <div className='col verification-div d-flex justify-content-center align-items-center flex-column'>
                <div className='verification-form-div d-flex justify-content-center align-items-center flex-column'>
                    <div className='verification-heading'>
                        Verify email
                    </div>
                    <div className='verify-subheading'>
                        Please check the OTP sent to your email
                    </div>
                    <div className='email-change-div text-white'>
                        {email}{" "}
                        <a href='/'>
                            <span className='text-yellow'>Change</span>
                        </a>
                    </div>
                    <div className='otp-input-div'>
                        <VerificationInput
                            onChange={(e) => { setOtp(e); }}
                            placeholder=" "
                            classNames={otp.length === 6 ? {
                                container: "container",
                                character: "character",
                                characterInactive: "character--inactive",
                                characterSelected: "character--selected",
                            } : {
                                container: "container",
                                character: "invalid-character",
                                characterInactive: "invalid-character--inactive",
                                characterSelected: "invalid-character--selected",



                            }}
                        />
                    </div>
                    <div onClick={() => { if (counter === 0) { resendOTP(); } }} className='text-yellow resend-div'>Resend OTP  {counter ? `(${counter}s)` : ""}</div>
                    <div className={otp.length === 6 ? 'proceed-verification' : 'verify-button-div'}>
                        <button onClick={() => { if (otp.length === 6) { handleSubmit(); } else {toast.error("Enter OTP")} }}>
                            Verify & Continue
                        </button>
                    </div>
                </div>
                {/* form  */}
            </div>
        </div>
    )
}

export default VerificationPage