import React from 'react'
// import {Container } from "react-bootstrap";
import "./LoginPage.style.css"
import loginImg from "../../assets/login-icon.png"
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { GlobalInfo } from '../../App';
import { authorizeUser } from '../../services/login/signin';
import { COGNITO_STATUS } from '../../services/login/constants';
import { setLocalStorageKey } from '../../utils/local-storage';
import { toast } from 'react-toastify';
import { wait } from '../../utils/delay';

// import { userAccess } from '../pages/meta';


const LoginPage = () => {

  const { getEmail } = useContext(GlobalInfo);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  // const { passUserId, userId } = useVerification();
  const navigate = useNavigate();

  // const numPattern =
  //   /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
  const emailPattern = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      emailPattern.test(email)) {
        const response = await authorizeUser(email, password);
        // setIsLoading(false);
        // console.log('result',response.status);
        if (response.status === COGNITO_STATUS.success) {

          setLocalStorageKey('email', email);
          setLocalStorageKey('token', response.token);
          console.log('token', response.token);
          setLocalStorageKey('expiry', response.expiry);

          // userAccess.checkUserAccess();     for pan and aadhaar verification
          toast.success('Login Success', `Welcome to Growpital ${response.name ? `${response.name[0].toUpperCase()}${response.name.substring(1)}` : ''}!`);
          // trackMixpanelEvent(MIXPANEL_EVENTS.LOGIN);
          await wait(1000);
        navigate("/profile");
        }
        else if (response.status === COGNITO_STATUS.failed){
          // console.log(response);
      toast.error('Incorrect email or password.');
        }
    } else {
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
          <div className=' fw-bold login-heading my-3' >Login/Signup</div>

          {/* sub-heading */}
          <div className=' login-subheading'>Enter mobile number or email to proceed</div>

          {/* input div */}
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

          {/* input div */}
          <div 
          className=' input-div d-flex flex-column py-2 mb-1 px-3  align-items-start '>
            Password
            <input name="password" className=' mob-input' onChange={(e) => { setPassword(e.target.value); }} type="password" required />
            {/* <div className='invalid-text'>
              {password  &&
                !password.length>1 ? "Invalid Input" : ""}</div> */}
          </div>
          
          <div className='px-5 text-white d-flex flex-row justify-content-end w-100  mt-0'><a href="/resetPassword" ><span className='fw-semibold green-text '>Forgot Password?</span></a></div>
          
          {/* checkbox div */}
          {/* <div className=' checkbox-div d-flex flex-row text-white p-1' >

            <input className='checkbox-input mt-1 ' type="checkbox" required />

            <label className='checkbox-text '>
              <div>
                By continuing, I accept Growpital {" "}
                <span className='text-yellow'>Terms and</span>
              </div>
              <div>
                <span className='text-yellow'> Conditions</span>{" "}
                and{" "}
                <span className='text-yellow'>Privacy Policy</span>.
              </div>
            </label>
          </div> */}

          {/* continue button */}

          <div className={
              password &&
              emailPattern.test(email)
              ? 'proceed-button ' : ' submit-button'}>
            {/* <a href='/verification'> */}
            <button onClick={() => { getEmail(email); }} className=' fs-5'>Continue</button>
            {/* </a> */}
          </div>
          <div className='text-white fw-semibold mt-3'>New on our platform? <a href="/signup" ><span className='green-text'>Sign Up</span></a></div>
        </form>
        {/* <div>New on our platform? <span className='text-yellow'>Sign Up</span></div> */}
      </div>
    </div>
    // </div>
    // </Container>
  )
}

export default LoginPage