import React from "react";
import "../PaymentMethod/PaymentMethod.style.css";
import "./VerifiedPopup.style.css"
// import cancel from "../assets/Cancel.svg";
import verifiedTick from "../../assets/mdi_verified.svg"


const VerifiedPopup = () => {


    return (
        <div className="popup-bg d-flex justify-content-center align-items-center">
            <div className="Payment-method1-popup popup-width align-items-center text-white  p-4 position-relative">
                
                <div className="fw-semibold  mx-0 my-3">OTP Verified Successfully</div>
                {/* <a href="/kycDetails">
                    <img src={cancel} alt="cancel" />
                </a> */}
                <img className="verifiedTick my-1 mx-0 py-3" src={verifiedTick} alt="verified" />
            </div>
        </div>
    )
}
export default VerifiedPopup;