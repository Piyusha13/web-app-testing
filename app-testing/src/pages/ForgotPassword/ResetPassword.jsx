import React from 'react'
// import {Container } from "react-bootstrap";
import "../Login/LoginPage.style.css"
import loginImg from "../../assets/login-icon.png"
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { GlobalInfo } from '../../App';
// import { authorizeUser } from '../../services/login/signin';
import { COGNITO_STATUS } from '../../services/login/constants';
// import { setLocalStorageKey } from '../../utils/local-storage';
import { toast } from 'react-toastify';
import { wait } from '../../utils/delay';
import{forgotPassword, resetPassword} from "../../services/login/forgot-password";

const ResetPassword = () => {
  

    const { getEmail } = useContext(GlobalInfo);
    const [email, setEmail] = useState();
    const [enablePassword,setEnablePassword]=useState(false);
    const [otp,setOtp]=useState(0);
    const [newPassword,setnewPassword]=useState();
    // const { passUserId, userId } = useVerification();
    const navigate = useNavigate();
  
    const emailPattern = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      if(enablePassword===false){
        if (emailPattern.test(email)) {
            const data = await forgotPassword(email);
            if (data.status === COGNITO_STATUS.success) {
              toast.success('OTP Sent, Successfully sent OTP to your registered email.');
              await wait();

            //   trackMixpanelEvent(MIXPANEL_EVENTS.FORGOT_PASSWORD_STARTED);
                setEnablePassword(true);
            } else {
              toast.error('Error', data.message);
            }
      } 
      }
      
      else if(enablePassword===true){
      if( otp && newPassword){
        const data = await resetPassword(email, otp, newPassword);
      if (data.status === COGNITO_STATUS.success) {
        toast.success('Password Reset');
        // sendSuccessNotification('Password Reset', data.message);
        // trackMixpanelEvent(MIXPANEL_EVENTS.FORGOT_PASSWORD_COMPLETED);
        await wait();
        navigate('/login', { replace: true });
      } else {
        toast.error(`${data.message}`);
        // sendFailureNotification('Error', data.message);
      }
      }
    }
    };
    return (
      // <Container>
      // <div className='container-xxl'>
      <div className=' d-flex  login-container container-xxl ' >
        {/* login image part */}
        <div className='login-img-div col d-flex justify-content-center align-items-center'>
          <img src={loginImg} className="" alt="" />
        </div>
  
        {/* login form part */}
        <div className=' login-form-div col  d-flex justify-content-center align-items-center'>
  
          <form onSubmit={handleSubmit} className='d-flex login-form align-items-center flex-column  p-2 '>
  
            {/* heading */}
            <div className=' fw-bold login-heading my-3' >Reset Password</div>
  
            {/* sub-heading */}
            <div className=' login-subheading'>If you forgot your password, well, then we’ll email you instructions to reset your password.</div>
  
           {!enablePassword?(
            <>
            <div className={email &&
                !emailPattern.test(email)
                ? 'error-div d-flex flex-column py-2 px-3  align-items-start'
                : ' input-div d-flex flex-column py-2 px-3  align-items-start '}>
                Email
                <input name="mob_no" className=' mob-input' onChange={(e) => { setEmail(e.target.value); }} type="email" required />
                <div className='invalid-text'>
                  {email &&
                    !emailPattern.test(email) ? "Invalid Input" : ""}</div>
              </div>
            {/* continue button */}
            <div className={
                emailPattern.test(email)
                ? 'proceed-button ' : ' submit-button'}>
              {/* <a href='/verification'> */}
              <button onClick={() => { handleSubmit(otp); getEmail(email); }} className=' fs-5'>
                Send OTP
                
                </button>
              {/* </a> */}
            </div>     
              </>
           ):(
            <>
            <div className=' input-div d-flex flex-column py-2 px-3  align-items-start '>
                OTP
                <input name="otp" className=' mob-input' onChange={(e) => { setOtp(e.target.value); }} type="number" required />
            </div>    
            <div className=' input-div d-flex flex-column py-2 px-3  align-items-start '>
                Password
                <input name="password" className=' mob-input' onChange={(e) => { setnewPassword(e.target.value); }} type="password" required />
            </div> 
            {/* continue button */}
            <div className={
                newPassword && otp
                ? 'proceed-button ' : ' submit-button'}>
              {/* <a href='/verification'> */}
              <button onClick={() => { handleSubmit(otp); getEmail(email); }} className=' fs-5'>
                Submit
                </button>
              {/* </a> */}
            </div>     
              </>
           )}
            
            
  
            
  
  
            
            <div className='text-white mt-3'><a href="/login" ><span className='fw-bold green-text'>Return to Login</span></a></div>
          </form>
          {/* <div>New on our platform? <span className='text-yellow'>Sign Up</span></div> */}
        </div>
      </div>
      // </div>
      // </Container>
    )
  
}

export default ResetPassword