import React from "react";
import "../PaymentMethod/PaymentMethod.style.css";
import "../VerifiedPopup/VerifiedPopup.style.css"
// import cancel from "../assets/Cancel.svg";
import verifiedTick from "../../assets/mdi_verified.svg"


const UploadedPopup = () => {


    return (
        <div className="popup-bg d-flex justify-content-center align-items-center">
            <div className="Payment-method1-popup popup-width align-items-center text-white  p-4 position-relative">
                
                <div className="fw-semibold w-75  mx-0 my-3">Documents uploaded Successfully</div>
                {/* <a href="/kycDetails">
                    <img src={cancel} alt="cancel" />
                </a> */}
                <img className="verifiedTick my-0 mx-0 py-2" src={verifiedTick} alt="verified" />
            </div>
        </div>
    )
}
export default UploadedPopup;