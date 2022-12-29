import "./RegistrationPage.style.css"
import CreateIcon from "../../assets/create-icon.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import VerificationInput from "react-verification-input";
import { signup } from '../../services/login/signup';
import { COGNITO_STATUS } from '../../services/login/constants';
import { toast } from "react-toastify";
import { useContext } from 'react';
import { GlobalInfo } from '../../App';




const ResgistrationPage = () => {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [referralDiv, setReferralDiv] = useState(false);
    const navigate = useNavigate();
    const { getEmail } = useContext(GlobalInfo);


    // const numPattern =
    //     /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
    const emailPattern = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;

    const handleSubmit = async (e) => {
        e.preventDefault();
        // type conversion of userId
        if (name.length &&
            emailPattern.test(email)) {
            const response = await signup(email, password, name, referralDiv);
            if (response.status === COGNITO_STATUS.success) {
                console.log(response);
                
                // toast.success(`${response.message}`);
                toast.success("OTP sent successfully");
                navigate("/verification");
            }
            else if (response.status === COGNITO_STATUS.failed) {
                // console.log(response.status);
                toast.error(`${response.message}`);
               
            }
        } else {
            //   passUserId(mob_no);
            // navigate("/verification");
        }
    };

    return (
        <div className="d-flex  signup-container container-xxl">
            {/* signup image part */}
            <div className='signup-img-div col d-flex justify-content-center align-items-center'>
                <img src={CreateIcon} className="" alt="" />
            </div>
            {/* signup form part */}
            <div className="col d-flex justify-content-center align-items-center">
                <form onSubmit={handleSubmit} className="signup-form flex-column d-flex align-items-center p-2">
                    {/* heading */}
                    <div className=' fw-bold signup-heading mt-2' >Create account</div>

                    {/* input div */}
                    <div className="input-divs ">
                        <div className=' signup-input-div d-flex flex-column py-2 px-3  align-items-start '>
                            Name
                            <input onChange={(e) => { setName(e.target.value) }} className=' mob-input' type="text" required />
                        </div>

                        <div className=' signup-input-div d-flex flex-column py-2 px-3  align-items-start '>
                            Email Id
                            <input onChange={(e) => { setEmail(e.target.value) }} className=' mob-input' type="email" required />
                        </div>

                        <div className=' signup-input-div d-flex flex-column py-2 px-3  align-items-start '>
                            Password
                            <input onChange={(e) => { setPassword(e.target.value) }} className=' mob-input' type="password" required />
                        </div>
                    </div>
                    {/* sub-heading */}
                    {referralDiv ? (
                        <div className=" referral-input text-white fw-bold mb-3">
                            <div>Referral code : </div>
                            <span className="abc">
                                <VerificationInput
                                    length={8}
                                    placeholder=" "
                                    classNames={{
                                        container: "referral-container",
                                        character: "referral-character",
                                        characterInactive: "referral-character--inactive",
                                        characterSelected: "referral-character--selected",
                                    }}
                                />
                            </span>


                        </div>
                    ) : (
                        <div className=' signup-subheading text-white fw-bold mb-3'>Have a referral code?
                            <span className="green-text " onClick={() => { setReferralDiv(!referralDiv); }} >
                                {" "}Click here
                            </span>
                        </div>

                    )}



                    {/* checkbox div */}
                    <div className=' signup-checkbox-div d-flex flex-row text-white' >

                        <input className='signup-checkbox-input ' type="checkbox" required />
                        <div className='signup-checkbox-text '>
                            <div>
                                Receive important updates on  {" "}
                                <span className='green-text'>Whatsapp</span>
                            </div>
                        </div>
                    </div>
                    <div className=' signup-checkbox-div d-flex flex-row text-white' >

                        <input className='signup-checkbox-input ' type="checkbox" required />
                        <div className='signup-checkbox-text '>
                            <div>
                                By continuing, I accept Growpital {" "}
                                <span className='green-text'>Terms and</span>
                            </div>
                            <div>
                                <span className='green-text'> Conditions</span>{" "}
                                and{" "}
                                <span className='green-text'>Privacy Policy</span>.
                            </div>
                        </div>
                    </div>
                    {/* continue button */}
                    <div className={name.length && emailPattern.test(email) ? 'proceed-signup mb-3 mt-4' : 'signup-submit-button mb-3 mt-4'}>
                        {/* <a href="/verification"> */}
                        <button onClick={() => { getEmail(email); }} className=' fs-5'>Continue</button>
                        {/* </a> */}
                    </div>
                    <div className="text-white fw-semibold">Already have an account?<a href="/login"> <span className="green-text">Sign in instead</span></a></div>
                </form>
            </div>
        </div>
    )
}
export default ResgistrationPage