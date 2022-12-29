import React, { useEffect, useState } from "react";
import "../PaymentMethod/PaymentMethod.style.css";
import "./OtpVerify.style.css"
import VerificationInput from "react-verification-input";
import VerifiedPopup from "../VerifiedPopup/VerifiedPopup";
import UploadAadhaar from "../UploadAadhaar/UploadAadhaar";


const OtpVerify = () => {


    const [otp, setOtp] = useState("");
    const [counter, setCounter] = useState(30);
    const [verified, setVerified] = useState(false);
    const [uploadAadhaar, setUploadAadhaar] = useState(false);

    useEffect(() => {

        if (counter) {
            setTimeout(() => {
                setCounter(counter - 1);
            }, 1000);
        }
    }, [counter]);


    return (
        <div className="popup-bg d-flex justify-content-center align-items-center">
            {verified ?
                (<><VerifiedPopup /></>)
                :
                (<>
                {uploadAadhaar?(<><UploadAadhaar /></>):(
                    <div className="Payment-method1-popup text-white px-0 py-4">
                        <div className="fw-semibold d-flex flex-row justify-content-center align-items-center">
                            <div>Submit Your OTP</div>
                        </div>
                        <div className='otp-input-div'>
                            <VerificationInput
                                onChange={(e) => { setOtp(e); }}
                                placeholder=" "
                                classNames={otp.length === 6 ? {
                                    container: "otp-container",
                                    character: "otp-character",
                                    characterInactive: "otp-character--inactive",
                                    characterSelected: "otp-character--selected",
                                } : {
                                    container: "otp-container",
                                    character: "otp-invalid-character",
                                    characterInactive: "otp-invalid-character--inactive",
                                    characterSelected: "otp-invalid-character--selected",



                                }}
                            />
                        </div>
                        <div className='text-yellow fs-6 fw-semibold' >Resend OTP  {counter ? `(${counter}s)` : ""}</div>
                        <div className={otp.length === 6 ? ' proceed-verification' : ' pt-0 mt-0 verify-button-div'}>
                            {/* <a href="/profile"> */}
                            <button onClick={() => { if (otp.length === 6) { setVerified(true); } else { setVerified(false); } }} className='mt-3 fs-8 fw-bold p-2  mb-0'>
                                Verify OTP</button>
                            {/* </a> */}
                        </div>
                        <div className="fw-semibold">Or</div>
                        <div className="fs-8">Unable to receive OTP?{" "}<span onClick={() => { setUploadAadhaar(true); }} className="text-yellow fw-semibold underline">Click here</span></div>
                    </div>
                    )}
                </>)
            }

        </div>
    )
}
export default OtpVerify;