import React from "react";
import "../PaymentMethod/PaymentMethod.style.css";
import "../VerifiedPopup/VerifiedPopup.style.css"
// import cancel from "../assets/Cancel.svg";
// import verifiedTick from "../assets/mdi_verified.svg"
import { useState } from "react";
import UploadPAN from "../UploadPan/UploadPAN";


const PANnotVerified = () => {

    const[clicked,setClicked]=useState(false);
    return (
        <div className="popup-bg d-flex justify-content-center align-items-center">
            {clicked?(<>
            <UploadPAN/>
            </>):
            (
                <div className=" px-5 Payment-method1-popup popup-width align-items-center text-white  p-4 position-relative">
                
                <div className=" fw-semibold fs-8 mx-0 my-2"> 
                We unable to verify your PAN details<br></br>
                Click here to upload your PAN Card
                </div>
                <div onClick={()=>{setClicked(true);}} className="fs-8 fw-semibold text-yellow underline">Click here</div>
                
            </div>
            )}
            
        </div>
    )
}
export default PANnotVerified;