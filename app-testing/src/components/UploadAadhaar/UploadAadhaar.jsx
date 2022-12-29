import React from "react";
import "./UploadAadhaar.style.css"
import cancel from "../../assets/Cancel.svg"
import upload from "../../assets/ic_round-photo-camera.svg"
import { useState } from "react";
import UploadedPopup from "../UploadedPopup/UploadedPopup";


const UploadAadhaar = () => {

    const[uploaded,setUploaded]=useState(0);
    const[uploadedSuccessfully,setUploadedSuccessfully]=useState(false);

    return (
        <div className="popup-bg d-flex justify-content-center align-items-center">
            {uploadedSuccessfully?
            (<>
                <UploadedPopup/>
            </>)
            :
            (
                <div className="Payment-method1-popup text-white align-items-center px-3 py-4">
                <div className="w-100 d-flex flex-row justify-content-between">
                    <div >Upload your Aadhaar</div>
                    <a href="/kycDetails">

                        <img src={cancel} alt="cancel" />
                    </a>
                </div>
                <div className="fs-8 text-left w-100">
                    <div >Please upload your Aadhaar card for manual verification</div>
                    <div >The verification make up to 24hr</div>
                </div>
                <div className="d-flex flex-row justify-content-between upload-div">
                    <div className="upload-pic position-relative ">
                        <label for="frontSide"><img src={upload} alt="upload-front-side" /></label>
                        <input type="file" id="frontSide" onChange={()=>{setUploaded(uploaded+1);}}/>
                        <div className="label position-absolute top-100">Front</div>
                    </div>
                    <div className="upload-pic position-relative ">
                        <label for="frontSide"><img src={upload} alt="upload-front-side" /></label>
                        <input type="file" id="frontSide" onChange={()=>{setUploaded(uploaded+1);}}/>
                        <div className="label position-absolute top-100">Back</div>
                    </div>
                </div>
                <button onClick={()=>{if(uploaded===2){setUploadedSuccessfully(true);}}} className={uploaded===2?"aadhaar-submited fw-semibold w-75":"aadhaar-submit fw-semibold w-75 "}>Submit</button>
            </div>
            )}
            
        </div>
    )
}
export default UploadAadhaar;