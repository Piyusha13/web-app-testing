import { useMediaQuery } from "react-responsive";
import "./NewInvestmentPage.style.css";
import Navbar from "../../components/Navbar/Navbar"
import NavTab from "../../components/NavTab/NavTab"
import { useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
import coupon from "../../assets/coupon.svg";
import diamond from "../../assets/diamond.svg"
import tree from "../../assets/banyan_tree.svg"
import upTriangle from "../../assets/up-triangle.svg"
import cancel from "../../assets/Cancel.svg"
import circle_right from "../../assets/circle_right.svg";
import wallet from "../../assets/Wallet.svg"
import red_exclaimation from "../../assets/red-exclaimation.svg"
// import AddMoneyPage from "../components/AddMoneyPage";
import bank from "../../assets/bank.svg"


const NewInvestmentPage = () => {


    const isMobile = useMediaQuery({
        query: "(max-width: 750px)",
    });
    const [choosePlan, setChoosePlan] = useState(true);
    const [step2, setStep2] = useState(false);
    const [step3, setStep3] = useState(false);
    const [step4, setStep4] = useState(false);

    const [addMoney, setAddMoney] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const [relation, setRelation] = useState("");
    const [selected, setSelected] = useState(false);
    const [customUnit, setCustomUnit] = useState(false);
    const [nonSufficientBalance, ] = useState(true);

    const [addAmount, setAddAmount] = useState();
    const [secletedAmount, setSelectedAmount] = useState();

    return (
        <>
            {isMobile ? (
                <>
                    <div className="text-white p-3">
                        <div className='header' >
                            <i class="fa-solid fa-chevron-left"></i>
                            Investment
                        </div>
                        <div>
                            <div className="text-white align-items-center invetment-steps d-flex flex-row justify-content-between">
                                <div onClick={() => { setChoosePlan(true); setStep2(false); setStep3(false); setStep4(false); }} className="cursor-pointer w-25 px-2">
                                    <div>Choose Plan</div>
                                    <div class="progress">
                                        <div className={choosePlan ? "progress-bar ongoing w-100 " : "progress-bar ongoing w-0"} role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <div onClick={() => { setChoosePlan(false); setStep2(true); setStep3(false); setStep4(false); }} className="cursor-pointer w-25  px-2">
                                    <div>Investment Amount</div>
                                    <div class="progress">
                                        <div class={step2 ? "progress-bar ongoing w-100" : "progress-bar ongoing w-0 "} role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <div onClick={() => { setChoosePlan(false); setStep2(false); setStep3(true); setStep4(false); }} className="cursor-pointer w-25  px-2">
                                    <div>Make Payment</div>
                                    <div class="progress">
                                        <div class={step3 ? "progress-bar ongoing w-100" : "progress-bar ongoing w-0 "} role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <div onClick={() => { setChoosePlan(false); setStep2(false); setStep3(false); setStep4(true); }} className=" cursor-pointer w-25  px-2">
                                    <div>Sign agreement</div>
                                    <div class="progress">
                                        <div class={step4 ? "progress-bar ongoing w-100" : "progress-bar ongoing w-0 "} role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>

                            </div>
                            {choosePlan &&
                                    (<div className="py-3">
                                        <div className="text-white ">
                                            <div className="fw-bold fs-5">Choose Plan</div>
                                            <div>Which plan would you like to invest in?</div>
                                        </div>
                                        <div>
                                            <ServiceCard />
                                        </div>
                                    </div>)
                                }
                                {step2 && (
                                    <div className="py-3 w-100 text-white ">
                                        <div className="card-header d-flex flex-row judtify-content-start align-items-center p-2 px-0">
                                            <div className="plan-header ">
                                                <img src={tree} alt="tree-img" />
                                            </div>
                                            <div className="plan-title d-flex flex-column justify-content-start align-items-start ">
                                                <div className="title-text">Banyan Tree</div>
                                                {/* <div className="investment-status">• {" "} Ongoing</div> */}
                                            </div>
                                        </div>
                                        <div className="available-unit">987 unit available</div>
                                        <div className="text-left">select the number of units to invets</div>
                                        <form className="pt-4 step2-form">
                                            <div className=' units-input-container'>
                                                <div className='input-title'>Please Enter Unit</div>
                                                <div className='userImgDiv'>
                                                    <img src={diamond} className="icons" alt="userImg" />
                                                </div>
                                                <div className='text-white pl-3 profile-input-div d-flex flex-row justify-content-between w-100 align-items-center'>
                                                    <div className="px-1">5 units</div>
                                                    <div className="px-4">:</div>
                                                    <input placeholder='select units' onChange={(e) => { setRelation(e.target.value) }} value={relation} type="string" />
                                                    <i onClick={() => { setDropdown(!dropdown); }} class={dropdown ? "cursor-pointer px-2 fa-solid fa-chevron-up" : "cursor-pointer px-2 fa-solid fa-chevron-down"} ></i>

                                                </div>
                                            </div>
                                            <div className=' units-input-container'>
                                                <div className='input-title'>Enter Coupon</div>
                                                <div className='userImgDiv'>
                                                    <img className="icons" src={coupon} alt="userImg" />
                                                </div>
                                                <div className='profile-input-div'>
                                                    <input placeholder='Enter coupon' type="name" />
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row justify-content-center align-items-center">
                                                <button className="back-button" onClick={() => { setChoosePlan(true); setStep2(false); }} >Back</button>
                                                <button className="netx-button" >Next</button>
                                            </div>
                                        </form>
                                    </div>
                                )}
                                {step3 && (<div className="text-white d-flex flex-column align-items-center py-3 " >
                                    <div className="fw-semibold" >Investment amount</div>
                                    <div className="fs-4 fw-bold">1,00,000</div>
                                    <div className=" wallet-balance w-75 d-flex flex-row justify-content-between align-items-center">
                                        <div className="d-flex flex-row justify-content-between align-items-center">
                                            <img className="icons" src={wallet} alt="wallet" />
                                            <div className="px-2">Wallet Balance</div>
                                        </div>
                                        <div>1,20,000</div>
                                    </div>
                                    {nonSufficientBalance ? (
                                        <div className="d-flex flex-column align-items-center">
                                            <div className="py-3 px-3 insufficient-balance-div d-flex flex-row justify-content-center align-items-center">
                                                <img src={red_exclaimation} alt="red_exclaimation" />
                                                <div className="px-2">
                                                    You have <span className="text-yellow" > insufficient balance </span>
                                                    to continue this transaction.
                                                </div>
                                            </div>
                                            <div className="additional-amount-div d-flex flex-column align-items-center py-3 px-5 ">
                                                <div>Additional Amount required</div>
                                                <div className="fs-5 fw-bold">48,000</div>
                                                <button onClick={() => { setAddMoney(true); }}  >Add Money</button>
                                            </div>

                                        </div>
                                    ) : (<div className="py-3 px-3 sufficient-balance-div d-flex flex-row justify-content-center align-items-center">
                                        <img src={circle_right} alt="circle-Right" />
                                        <div className="px-2">
                                            You have <span className="text-yellow" > Sufficient balance </span>
                                            to continue this transaction.
                                        </div>
                                    </div>)}
                                    <div className="pt-5 px-4 step-3 w-75 d-flex flex-row justify-content-center align-items-center">
                                        <button className="back-button " onClick={() => { setStep3(false); setStep2(true); }} >Back</button>
                                        <button className="netx-button" >Next</button>
                                    </div>

                                </div>)}
                                {step4 && (<div className="text-white mt-3">
                                    <div>Document to protect
                                        <span className="text-color-green"> your investments and payout.</span>
                                    </div>
                                    <div className="fs-8">You can E-sign using Aadhaar Number</div>
                                    <button className="consent-button my-5">Consent Letter</button>
                                    <div className="d-flex flex-column align-items-center ">
                                        <div>Please be adviced we shall be liable for the terms of only if information</div>
                                        <div>provided by you such as name, gender, date of birth and Aadhaar</div>
                                        <div>number are correct. Please make sure that you are not furnished any</div>
                                        <div>wrong information. 2022 Growpital. All Rights Reserved.</div>
                                    </div>
                                    <div className="d-flex flex-row justify-content-center mt-5">
                                        <button onClick={() => { setStep3(true); setStep4(false); }} className="m-2 py-2 step-4-back-button">Back</button>
                                        <button className="m-2 py-2 step-4-back-button" >Finish</button>
                                    </div>
                                </div>)}
                        </div>
                        
                    </div>
                </>
            ) : (
                <div className="container-xxl">
                    <Navbar />
                    {addMoney && (
                        < div className="blurry-bg d-flex  justify-content-center align-items-center" >
                            <div className="popup">
                                <div className=' '>
                                    <div className=' m-0 not-in-mob box p-4  flex-column align-items-center text-white'>
                                        <div className="d-flex flex-row justify-content-between align-items-center w-100">
                                            <div className='fw-bold text-left w-100'>Add Money</div>
                                            <img className="cursor-pointer" onClick={() => { setAddMoney(!addMoney); }} src={cancel} alt="cancel" />
                                        </div>
                                        <div className='input-amount p-2 d-flex flex-column align-items-start' >
                                            <div className='input-amount-heading text-muted' >Enter amount to add</div>
                                            <input type="number" onChange={(e) => { setAddAmount(e.target.value); }} placeholder={addAmount} />
                                        </div>
                                        <div className='selected-amount-div d-flex flex-row justify-content-between align-items-center'>
                                            <div className={secletedAmount === 1 ? 'selected-amount' : 'non-selected-amount'} onClick={() => { setAddAmount(5000); setSelectedAmount(1); }} >5,000</div>
                                            <div className={secletedAmount === 2 ? 'selected-amount' : 'non-selected-amount'} onClick={() => { setAddAmount(10000); setSelectedAmount(2); }}>10,000</div>
                                            <div className={secletedAmount === 3 ? 'selected-amount' : 'non-selected-amount'} onClick={() => { setAddAmount(50000); setSelectedAmount(3); }}>50,000
                                                <div className='popular-text' >Popular</div>
                                            </div>

                                            <div className={secletedAmount === 4 ? 'selected-amount' : 'non-selected-amount'} onClick={() => { setAddAmount(100000); setSelectedAmount(4); }}>100,000</div>
                                        </div>
                                        <div className='SMTB d-flex flex-row justify-content-start'>
                                            <div>
                                                <img src={bank} alt="bank-img" />
                                            </div>
                                            <div className='MTB justify-content-center d-flex flex-column align-items-start' >
                                                <div className='fw-bold'>
                                                    Send Monye to Bank
                                                </div>
                                                <div className='payment-type' >
                                                    RTGS/NEFT/IMPS?
                                                </div>
                                            </div>
                                        </div>
                                        <div className={addAmount ? 'continue-button' : 'continue-disable'}>
                                            <button>Continue</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    {customUnit && (<div className="blurry-bg d-flex justify-content-center align-items-center">
                        <div className=" p-3 customUnit-overlay">
                            <div className="d-flex flex-row justify-content-between">
                                Enter the number of units to invest
                                <img className="cursor-pointer" onClick={() => { setCustomUnit(false); }} src={cancel} alt="cancel logo" />
                            </div>
                            <div className='my-4 units-input-container'>
                                <div className='input-title'>Please Enter Unit</div>
                                <div className='userImgDiv'>
                                    <img className="icons" src={diamond} alt="userImg" />
                                </div>
                                <div className='profile-input-div'>
                                    <input placeholder='Enter units' type="name" />
                                </div>
                            </div>
                            <div className="unit-continue-button">
                                <button>Continue</button>
                            </div>
                        </div>
                    </div>)}
                    {dropdown && (
                        <div className="blurry-bg d-flex justify-content-center align-items-center">
                            <div className="unit-overlay" >
                                <div className="overlay-header px-4 py-3 d-flex flex-row justify-content-between">
                                    <div className="d-flex flex-column text-left">
                                        <div className="fw-semibold">Select the number of units to invest</div>
                                        <div className="fs-8">Select the number of units to invest</div>
                                    </div>
                                    <div>
                                        <img className="cursor-pointer" onClick={() => { setDropdown(false); }} src={cancel} alt="cancel-img" />
                                    </div>
                                </div>
                                <div onClick={() => { setCustomUnit(!customUnit); setDropdown(false); }} className="overlay-subheader text-left px-4 py-2">Select Custom units</div>
                                <div onClick={() => { setSelected(!selected); }} className="  py-2 overlay-options  d-flex flex-row justify-content-between align-items-center">
                                    <div>5 Units</div>
                                    <div>:</div>
                                    <div><span className="text-color-green">₹</span> 50,000</div>
                                    {selected && (<div className="selected-img">
                                        <img src={cancel} alt="selected" />
                                    </div>)

                                    }
                                </div>
                                <div onClick={() => { setSelected(!selected); }} className="  py-2 overlay-options  d-flex flex-row justify-content-between align-items-center">
                                    <div>10 Units</div>
                                    <div>:</div>
                                    <div><span className="text-color-green">₹</span> 50,000</div>
                                    {selected && (<div className="selected-img">
                                        <img src={cancel} alt="selected" />
                                    </div>)

                                    }
                                </div>
                                <div onClick={() => { setSelected(!selected); }} className="  py-2 overlay-options  d-flex flex-row justify-content-between align-items-center">
                                    <div>20 Units</div>
                                    <div>:</div>
                                    <div><span className="text-color-green">₹</span> 50,000</div>
                                    {selected && (<div className="selected-img">
                                        <img src={cancel} alt="selected" />
                                    </div>)

                                    }
                                </div>

                            </div>
                        </div>
                    )}
                    <div className='row mt-5'>
                        <div className='col-2'>
                            <NavTab />
                        </div>
                        <div className='   investment-container col-5'>
                            <a href="/profile" >
                                <div className='header' >
                                    <i class="fa-solid fa-chevron-left"></i>
                                    <span className='px-2'>Investment</span>
                                </div>
                            </a>
                            <div className="px-2 py-4" >
                                <div className="text-white align-items-center invetment-steps d-flex flex-row justify-content-between">
                                    <div onClick={() => { setChoosePlan(true); setStep2(false); setStep3(false); setStep4(false); }} className="cursor-pointer w-25 px-2">
                                        <div>Choose Plan</div>
                                        <div class="progress">
                                            <div className={choosePlan ? "progress-bar ongoing w-100 " : "progress-bar ongoing w-0"} role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div onClick={() => { setChoosePlan(false); setStep2(true); setStep3(false); setStep4(false); }} className="cursor-pointer w-25  px-2">
                                        <div>Investment Amount</div>
                                        <div class="progress">
                                            <div class={step2 ? "progress-bar ongoing w-100" : "progress-bar ongoing w-0 "} role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div onClick={() => { setChoosePlan(false); setStep2(false); setStep3(true); setStep4(false); }} className="cursor-pointer w-25  px-2">
                                        <div>Make Payment</div>
                                        <div class="progress">
                                            <div class={step3 ? "progress-bar ongoing w-100" : "progress-bar ongoing w-0 "} role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div onClick={() => { setChoosePlan(false); setStep2(false); setStep3(false); setStep4(true); }} className=" cursor-pointer w-25  px-2">
                                        <div>Sign agreement</div>
                                        <div class="progress">
                                            <div class={step4 ? "progress-bar ongoing w-100" : "progress-bar ongoing w-0 "} role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>

                                </div>
                                {choosePlan &&
                                    (<div className="py-3">
                                        <div className="text-white ">
                                            <div className="fw-bold fs-5">Choose Plan</div>
                                            <div>Which plan would you like to invest in?</div>
                                        </div>
                                        <div>
                                            <ServiceCard />
                                        </div>
                                    </div>)
                                }
                                {step2 && (
                                    <div className="py-3 w-75 text-white ">
                                        <div className="card-header d-flex flex-row judtify-content-start align-items-center p-2 px-0">
                                            <div className="plan-header ">
                                                <img src={tree} alt="tree-img" />
                                            </div>
                                            <div className="plan-title d-flex flex-column justify-content-start align-items-start ">
                                                <div className="title-text">Banyan Tree</div>
                                                {/* <div className="investment-status">• {" "} Ongoing</div> */}
                                            </div>
                                        </div>
                                        <div className="available-unit">987 unit available</div>
                                        <div className="text-left">select the number of units to invets</div>
                                        <form className="pt-4 step2-form">
                                            <div className=' units-input-container'>
                                                <div className='input-title'>Please Enter Unit</div>
                                                <div className='userImgDiv'>
                                                    <img src={diamond} className="icons" alt="userImg" />
                                                </div>
                                                <div className='text-white pl-3 profile-input-div d-flex flex-row justify-content-between w-100 align-items-center'>
                                                    <div className="px-1">5 units</div>
                                                    <div className="px-4">:</div>
                                                    <input placeholder='select units' onChange={(e) => { setRelation(e.target.value) }} value={relation} type="string" />
                                                    <i onClick={() => { setDropdown(!dropdown); }} class={dropdown ? "cursor-pointer px-2 fa-solid fa-chevron-up" : "cursor-pointer px-2 fa-solid fa-chevron-down"} ></i>

                                                </div>
                                            </div>
                                            <div className=' units-input-container'>
                                                <div className='input-title'>Enter Coupon</div>
                                                <div className='userImgDiv'>
                                                    <img className="icons" src={coupon} alt="userImg" />
                                                </div>
                                                <div className='profile-input-div'>
                                                    <input placeholder='Enter coupon' type="name" />
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row justify-content-center align-items-center">
                                                <button className="back-button" onClick={() => { setChoosePlan(true); setStep2(false); }} >Back</button>
                                                <button className="netx-button" >Next</button>
                                            </div>
                                        </form>
                                    </div>
                                )}
                                {step3 && (<div className="text-white d-flex flex-column align-items-center py-3 " >
                                    <div className="fw-semibold" >Investment amount</div>
                                    <div className="fs-4 fw-bold">1,00,000</div>
                                    <div className=" wallet-balance w-75 d-flex flex-row justify-content-between align-items-center">
                                        <div className="d-flex flex-row justify-content-between align-items-center">
                                            <img className="icons" src={wallet} alt="wallet" />
                                            <div className="px-2">Wallet Balance</div>
                                        </div>
                                        <div>1,20,000</div>
                                    </div>
                                    {nonSufficientBalance ? (
                                        <div className="d-flex flex-column align-items-center">
                                            <div className="py-3 px-3 insufficient-balance-div d-flex flex-row justify-content-center align-items-center">
                                                <img src={red_exclaimation} alt="red_exclaimation" />
                                                <div className="px-2">
                                                    You have <span className="text-yellow" > insufficient balance </span>
                                                    to continue this transaction.
                                                </div>
                                            </div>
                                            <div className="additional-amount-div d-flex flex-column align-items-center py-3 px-5 ">
                                                <div>Additional Amount required</div>
                                                <div className="fs-5 fw-bold">48,000</div>
                                                <button onClick={() => { setAddMoney(true); }}  >Add Money</button>
                                            </div>

                                        </div>
                                    ) : (<div className="py-3 px-3 sufficient-balance-div d-flex flex-row justify-content-center align-items-center">
                                        <img src={circle_right} alt="circle-Right" />
                                        <div className="px-2">
                                            You have <span className="text-yellow" > Sufficient balance </span>
                                            to continue this transaction.
                                        </div>
                                    </div>)}
                                    <div className="pt-5 px-4 step-3 w-75 d-flex flex-row justify-content-center align-items-center">
                                        <button className="back-button " onClick={() => { setStep3(false); setStep2(true); }} >Back</button>
                                        <button className="netx-button" >Next</button>
                                    </div>

                                </div>)}
                                {step4 && (<div className="text-white mt-3">
                                    <div>Document to protect
                                        <span className="text-color-green"> your investments and payout.</span>
                                    </div>
                                    <div className="fs-8">You can E-sign using Aadhaar Number</div>
                                    <button className="consent-button my-5">Consent Letter</button>
                                    <div className="d-flex flex-column align-items-center ">
                                        <div>Please be adviced we shall be liable for the terms of only if information</div>
                                        <div>provided by you such as name, gender, date of birth and Aadhaar</div>
                                        <div>number are correct. Please make sure that you are not furnished any</div>
                                        <div>wrong information. 2022 Growpital. All Rights Reserved.</div>
                                    </div>
                                    <div className="d-flex flex-row justify-content-center mt-5">
                                        <button onClick={() => { setStep3(true); setStep4(false); }} className="m-2 py-2 step-4-back-button">Back</button>
                                        <button className="m-2 py-2 step-4-back-button" >Finish</button>
                                    </div>
                                </div>)}
                            </div>
                        </div>
                        <div className="col">
                            {step2 && (
                                <div className="text-white d-flex justify-content-center">
                                    <div className="step2-returns">
                                        <div className="return-amount">
                                            <div>ROI</div>
                                            <div>:</div>
                                            <div>12%</div>
                                        </div>
                                        <div className="return-amount">
                                            <div>Duration</div>
                                            <div>:</div>
                                            <div>36 months</div>
                                        </div>
                                        <div className="d-flex flex-column my-3 mx-3">
                                            <div className="fw-bold fs-5">Returns</div>
                                            <div className=" d-flex flex-row justify-content-between align-items-center">
                                                <div className="d-flex flex-column align-items-center ">
                                                    <div className="d-flex flex-row align-items-center text-color-green fs-4 fw-bold">
                                                        <img src={upTriangle} alt="up-triangle" />
                                                        ₹ 9,000
                                                    </div>
                                                    <div>Payout Earn</div>
                                                </div>
                                                <div className="d-flex flex-column align-items-center ">
                                                    <div className="d-flex flex-row align-items-center text-color-green fs-4 fw-bold">
                                                        <img src={upTriangle} alt="up-triangle" />
                                                        36 months
                                                    </div>
                                                    <div>Payout Earn</div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                </div>
            )}
        </>
    )
}
export default NewInvestmentPage;