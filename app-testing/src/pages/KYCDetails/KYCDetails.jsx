import { useMediaQuery } from "react-responsive";
import Navbar from '../../components/Navbar/Navbar'
import NavTab from '../../components/NavTab/NavTab'
import indian from '../../assets/Indian.svg'
import nri from '../../assets/NRI.svg'
import world from '../../assets/orange-world-map.svg'
import "../KYCDetails/KYCDetails.style.css"
import { useState } from "react";
import aadhaar from "../../assets/Aadhar Card.png"
import pan from "../../assets/PAN card.png"
import OtpVerify from "../../components/OTPVerify/OtpVerify";
import PANVerified from "../../components/PanVerified/PANVerified";
import PANnotVerified from "../../components/PanNotVerified/PANnotVerified";
 
const KYCDetails = () => {

    const isMobile = useMediaQuery({
        query: "(max-width: 750px)",
    });

    const [PAN, setPAN] = useState();
    const [kycType, setKycType] = useState();
    const [step, setStep] = useState(1);
    const [verifyNumber, setVerifyNumber] = useState(false);
    const [verifyPAN, setVerifyPAN] = useState("");


    return (

        <div >
            {isMobile ? (
                <div className=' profile-page'>
                    <div className=' text-white profile-container'>
                        <div className='header' >
                            <i class="fa-solid fa-chevron-left"></i>
                            My Profile
                        </div>
                    </div>
                    <NavTab />
                </div>
            ) : (
                <div className='container-xxl '>
                    <Navbar />
                    {verifyNumber && (
                        <>
                            <OtpVerify />
                        </>
                    )}
                    {verifyPAN === "yes" && (
                        <div onClick={() => { setStep(2); setVerifyPAN(false); }}>
                            <PANVerified />
                        </div>
                    )}

                    {verifyPAN === "no" && (
                        <div >
                            <PANnotVerified />
                        </div>
                    )}
                    <div className='d-flex flex-row  justify-content-start  mt-5'>
                        <div className='navtab' ><NavTab /></div>
                        <div className=' text-white desk-profile-container m-0 py-0 px-4 col'>
                            <a href="/kycDetails">
                                <div className='header' >
                                    <i class="fa-solid fa-chevron-left"></i>
                                    Upload KYC
                                </div>
                            </a>
                            {kycType === "indian" ?
                                (
                                    <>
                                        <div className="text-white  upload-kyc-steps align-items-center  d-flex flex-row justify-content-between">
                                            <div onClick={() => { setStep(1); }} className="cursor-pointer w-25 px-2">
                                                <div>Upload Documents</div>
                                                <div class="progress">
                                                    <div className={step === 1 ? "progress-bar ongoing w-100 " : "progress-bar ongoing w-0"} role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                            <div onClick={() => { setStep(2); }} className="cursor-pointer w-25  px-2">
                                                <div>Verify Details</div>
                                                <div class="progress">
                                                    <div class={step === 2 ? "progress-bar ongoing w-100" : "progress-bar ongoing w-0 "} role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                            <div onClick={() => { setStep(3); }} className="cursor-pointer w-25  px-2">
                                                <div>Bank Details</div>
                                                <div class="progress">
                                                    <div class={step === 3 ? "progress-bar ongoing w-100" : "progress-bar ongoing w-0 "} role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                            <div onClick={() => { setStep(4); }} className=" cursor-pointer w-25  px-2">
                                                <div>Nominee Details</div>
                                                <div class="progress">
                                                    <div class={step === 4 ? "progress-bar ongoing w-100" : "progress-bar ongoing w-0 "} role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>

                                        </div>
                                        {step === 1 && (
                                            <div className=" mt-5 d-flex flex-row justify-content-between align-items-center UD">
                                                <div className="d-flex flex-column align-items-center aadhaar-pan-div">
                                                    <img src={aadhaar} alt="aadhaar" />
                                                    <div className=" aadhaar-input-div d-flex flex-column align-items-start w-100">
                                                        Enter Aadhaar number
                                                        <input type="number" />
                                                    </div>
                                                    <button onClick={() => { setVerifyNumber(!verifyNumber); }} className="verify-button w-100" >Verify</button>
                                                </div>
                                                <div className="d-flex flex-column align-items-center aadhaar-pan-div">
                                                    <img src={pan} alt="pan" />
                                                    <div className=" aadhaar-input-div d-flex flex-column align-items-start w-100">
                                                        Enter PAN number
                                                        <input type="number" onChange={(e) => { setPAN(e.target.value); }} />
                                                    </div>
                                                    <button className="verify-button w-100" onClick={() => { if (PAN) { setVerifyPAN("yes"); } else { setVerifyPAN("no"); } }} >Verify</button>
                                                </div>
                                            </div>
                                        )}
                                        {step === 2 && (
                                            <div className=" m-3  w-75  ">
                                                <div className="fs-5 text-left fw-bold">Enter Your Personal Details</div>
                                                <div className=" my-3 d-flex flex-wrap justify-content-between ">
                                                    <div className='mx-0  personal-input-div d-flex flex-column py-2 px-3  align-items-start '>
                                                        Name
                                                        <input className=' mob-input' type="text" required />
                                                    </div>
                                                    <div className='mx-0  personal-input-div d-flex flex-column py-2 px-3  align-items-start '>
                                                        Aadhaar Number
                                                        <input className=' mob-input' type="text" required />
                                                    </div>
                                                    <div className='mx-0 personal-input-div d-flex flex-column py-2 px-3  align-items-start '>
                                                        PAN Number
                                                        <input className=' mob-input' type="text" required />
                                                    </div>
                                                    <div className='mx-0 personal-input-div d-flex flex-column py-2 px-3  align-items-start '>
                                                        DOB
                                                        <input className=' mob-input' type="text" required />
                                                    </div>
                                                    <div className='mx-0 personal-input-div d-flex flex-column py-2 px-3  align-items-start '>
                                                        Gender
                                                        <input className=' mob-input' type="text" required />
                                                    </div>
                                                    <div className='mx-0 personal-input-div d-flex flex-column py-2 px-3  align-items-start '>
                                                        Pincode
                                                        <input className=' mob-input' type="text" required />
                                                    </div>
                                                    <div className='mx-0 personal-input-div d-flex flex-column py-2 px-3  align-items-start '>
                                                        Address
                                                        <input className=' mob-input' type="text" required />
                                                    </div>
                                                    <div className='mx-0 personal-input-div d-flex flex-column py-2 px-3  align-items-start '>
                                                        Mobile Number
                                                        <input className=' mob-input' type="text" required />
                                                    </div>
                                                    <div className='mx-0 personal-input-div d-flex flex-column py-2 px-3  align-items-start '>
                                                        Email id
                                                        <input className=' mob-input' type="text" required />
                                                    </div>
                                                </div>
                                                <button className="submit-personal-details">Submit</button>
                                            </div>
                                        )}
                                        {step === 3 && (
                                            <div className=" m-3  w-75 d-flex flex-column align-items-start ">
                                                <div className="fs-5 text-left fw-bold">Enter Bank Details</div>
                                                <div className=" my-3 w-100 d-flex flex-column justify-content-between ">
                                                    <div className='mx-0  personal-input-div d-flex flex-column py-2 px-3  align-items-start '>
                                                        Enter Name
                                                        <input className=' mob-input' type="text" required />
                                                    </div>
                                                    <div className='mx-0  personal-input-div d-flex flex-column py-2 px-3  align-items-start '>
                                                        Account Number
                                                        <input className=' mob-input' type="text" required />
                                                    </div>
                                                    <div className='mx-0 personal-input-div d-flex flex-column py-2 px-3  align-items-start '>
                                                        IFSC Code
                                                        <input className=' mob-input' type="text" required />
                                                    </div>
                                                    
                                                </div>
                                                <button className="mx-0  submit-personal-details">Submit</button>
                                            </div>
                                        )}
                                        {step === 4 && (
                                            <div className=" m-3  w-75 d-flex flex-column align-items-start ">
                                                <div className="fs-5 text-left fw-bold">Enter Bank Details</div>
                                                <div className=" my-3 w-100 d-flex flex-column justify-content-between ">
                                                    <div className='mx-0  personal-input-div d-flex flex-column py-2 px-3  align-items-start '>
                                                        Enter Name
                                                        <input className=' mob-input' type="text" required />
                                                    </div>
                                                    <div className='mx-0  personal-input-div d-flex flex-column py-2 px-3  align-items-start '>
                                                        Relation
                                                        <input className=' mob-input' type="text" required />
                                                    </div>
                                                    <div className='mx-0 personal-input-div d-flex flex-column py-2 px-3  align-items-start '>
                                                        Mobile Number
                                                        <input className=' mob-input' type="text" required />
                                                    </div>
                                                    <div className='mx-0 personal-input-div d-flex flex-column py-2 px-3  align-items-start '>
                                                        Email id
                                                        <input className=' mob-input' type="text" required />
                                                    </div>
                                                    
                                                </div>
                                                <button className="mx-0  submit-personal-details">Submit</button>
                                            </div>
                                        )}

                                    </>
                                ) :
                                (
                                    <div className="kyc-type p-4 d-flex flex-column  " >
                                        <div className="text-left fw-semibold">Choose what describes you the best</div>
                                        <button onClick={() => { setKycType("indian"); }} ><img src={indian} alt="indian" /> I am an Indian resident</button>
                                        <button onClick={() => { setKycType("nri"); }}><img src={nri} alt="nri" /> I am an NRI</button>
                                        <button onClick={() => { setKycType("non-indian"); }}><img src={world} alt="world" />I am not an Indian resident</button>
                                    </div>)}

                        </div>
                    </div>

                </div>
            )}

        </div>
    )
}
export default KYCDetails;