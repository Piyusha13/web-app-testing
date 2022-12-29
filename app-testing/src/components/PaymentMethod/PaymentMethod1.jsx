import React from "react";
import "./PaymentMethod.style.css";
import cancel from "../../assets/Cancel.svg"
import bank from "../../assets/bank.svg"
import copy from "../../assets/Copy.svg"
import { toast } from 'react-toastify';


const PaymentMethod1=()=>{
    return(
        <div className="popup-bg d-flex justify-content-center align-items-center">
        <div className="Payment-method1-popup text-white">
            <div className="d-flex flex-row justify-content-between align-items-center">
                <div>NEFT, RTGS, Bank transfer</div>
                <a href="/wallet">
                    <img src={cancel} alt="cancel" />
                </a>
            </div>
            <div className="d-flex flex-row justify-content-start align-items-center">
                <img className="icons" src={bank} alt="bank" />
                <div className="fs-8 fw-semibold" >Transfer the money to the account below</div>
            </div>
            <div className="bank-details d-flex flex-column">
                <div className="d-flex flex-row justify-content-between align-items-center">
                    <div className="w-50 text-left">Bank</div>
                    <div className="w-50 d-flex flex-row justify-content-start align-items-center">
                       <div> Yes Bank</div>
                        <img className="px-3" onClick={() => {navigator.clipboard.writeText("Yes Bank"); toast.success("copied!"); }} src={copy} alt="copy" />
                    </div>
                </div>
                <div className="d-flex flex-row justify-content-between align-items-center">
                    <div className="w-50 text-left">Branch</div>
                    <div className="w-50 d-flex flex-row justify-content-start align-items-center">
                       <div className="text-left">Tower ifc, Mumbai</div>
                        <img className="px-3" src={copy} alt="copy" />
                    </div>
                </div>
                <div className="d-flex flex-row justify-content-between align-items-center">
                    <div className="w-50 text-left">Account Holder's Name</div>
                    <div className="w-50 d-flex flex-row justify-content-start align-items-center">
                       <div>Saurabh Sharma</div>
                        <img src={copy} className="px-3" alt="copy" />
                    </div>
                </div>
                <div className="d-flex flex-row justify-content-between align-items-center">
                    <div className="w-50 text-left">Account Number</div>
                    <div className="w-50 d-flex flex-row justify-content-start align-items-center">
                       <div>509388000346843</div>
                        <img src={copy} className="px-3" alt="copy" />
                    </div>
                </div>
                <div className="d-flex flex-row justify-content-between align-items-center">
                    <div className="w-50 text-left">IFSC Code</div>
                    <div className="w-50 d-flex flex-row justify-content-start align-items-center">
                       <div> YESB0CMSNOC</div>
                        <img src={copy} className="px-3" alt="copy" />
                    </div>
                </div>
                </div>
                <div className="note d-flex flex-row justify-content-center aligni-items-start">
                    <div>Note:</div>
                    <div>
                        <ol type="1">
                            <li className="text-left">You need to transfer the amount from your registered bank account only.</li>
                            <li className="text-left" >The transaction may take 24-28 hours to reflex in your wallet.</li>
                        </ol>
                        
                    </div>
                </div>
                <div className="button-wrapper" >
                    <button>Confirm & Download</button>
                </div>
            </div>
        </div>
        // </div>
    )
}
export default PaymentMethod1;