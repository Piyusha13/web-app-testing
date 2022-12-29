import React from 'react'
import "./WalletTransactionFilterPage.style.css"
// import wallet from "../assets/Wallet.svg"
import credit from "../../assets/credit.svg"
import { useMediaQuery } from "react-responsive";
import equalizer from "../../assets/equalizer.svg"
import grid from "../../assets/grid.svg"
import debit from "../../assets/debit.svg"
import { useState } from 'react';
import FilterTransactionSection from '../FilterTransaction/FilterTransactionSection';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { getLocalStorageKey } from '../../utils/local-storage';
import exclamation from "../../assets/exclamation.svg"
import failed from "../../assets/Failed.svg"

const WalletTransactionsFilterPage = () => {

    const isMobile = useMediaQuery({
        query: "(max-width: 750px)",
      });
    const[openFilter,setOpenFilter]=useState(false);
     
    const[walletData,setWalletData]=useState([]);
    
    const token = getLocalStorageKey('token');

     
    const syncWalletData = async () => {
        
        const response = await axios.get("https://lu6che2dg9.execute-api.ap-south-1.amazonaws.com/dev/api/v1/get-user-transections", {
            headers: {
              Authorization: ` Bearer ${token} `,
            },
          });
        setWalletData(response.data.response);  
      };

      useEffect(()=>{
        syncWalletData();
      })

  return (
    <>
    {isMobile?(
        <>
        <div className='mob-transaction-section-filter-page'>
        <div className='col mob-wallet-page-header text-white'>
            <div className='my-2 mb-3 px-4 d-flex justify-content-start align-items-center '>
            <NavLink to="/wallet">
            <i class="fa-solid fa-angle-left "></i> 
            <span className='px-3 fw-bold' >Wallet Transaction</span>
            </NavLink>
            </div>
            <div className='px-4 py-1 d-flex flex-row justify-content-between align-items-center sub-header'>
                <div className='d-flex flex-row align-items-center'>
                    <img src={grid}  alt="grid-img"/>
                    All
                </div>
                <div className='d-flex flex-row align-items-center'>
                    <img src={debit} alt="debit-img"/>
                    <span className='text-yellow'>Debit</span>
                </div>
                <div className='d-flex flex-row align-items-center'>
                    <img src={credit} alt="credit-img" />
                    Credit
                </div>
            </div>
        </div>
        <div className=' container-xxl px-3 text-white'>
            <div className='fw-bold text-white transaction-header d-flex flex-row justify-content-between align-items-center'>
                <div className='transaction-heading-1'>Transactions </div>
                <div className='text-yellow transaction-heading-2 ' >
                    <img onClick={()=>{setOpenFilter(!openFilter);}}  src={equalizer} alt="equalizer" />
                </div>
            </div>
            <div className='transaction-list  d-flex flex-column '>
                <div >
                                {walletData?.map((res, i) => (
                                    <div className=' mb-3 transaction-1 d-flex flex-row justify-content-between align-items-center'>
                                        <div className='transaction-details d-flex flex-row align-items-center'>
                                            <div>
                                                <img className='credit-img' src={res.payment_type === "credit" ? credit : (res.payment_type === "DEBIT" ? debit : failed)} alt='credit img' />
                                            </div>
                                            <div className='d-flex flex-column text-left'>
                                                <div className='mob-transfered-to fw-bold' >{res.message}</div>
                                                <div className='date-time' >{res.event_at}</div>
                                            </div>
                                        </div>
                                        <div className='d-flex flex-col justify-content-center'>
                                            <div className={res.payment_type === "credit" ? "mob-transcation-amount fw-bold money-credited" : (res.payment_type === "DEBIT" ? "mob-transcation-amount fw-bold" : 'mob-transcation-amount fw-bold text-danger')} >
                                                {res.payment_type === "credit" ? <span>+</span> : <span>-</span>}₹{res.amount}
                                            </div>
                                            {res.payment_type !== 'credit' && res.payment_type !== 'DEBIT' &&
                                                <div className='justify-content-center d-flex flex-row align-items-center fw-normal text-failed'>
                                                    <img src={exclamation} alt="alert" />
                                                    Failed
                                                </div>
                                            }
                                        </div>
                                    </div>
                                ))}
                            </div>
            </div>
            
        </div>
        <div className='mob-download-button'>
                    <button>Download statement</button>
            </div>
    </div>
    {openFilter?
    (
    <>
        <FilterTransactionSection/>
    </>
    ):(<></>)}
        </>
    ):(
        <div className='transaction-section-filter-page'>
       
        <div className='transaction-div text-white'>
            <div className='fw-bold text-white transaction-header d-flex flex-row justify-content-between align-items-center'>
                <div className='transaction-heading-1'>Wallet Transaction</div>
                <div className='text-yellow transaction-heading-2 ' >
                    {/* View All */}
                </div>
            </div>
            
            <div className='transaction-list d-flex flex-column '>
                <div>
                    
                    
                {walletData?.map((res)=>(
                    <div className='transaction-1 d-flex flex-row justify-content-between align-items-center'>
                    <div className='transaction-details d-flex flex-row align-items-center'>
                        <div>
                            <img className='credit-img' src={res.payment_type==="credit"? credit:(res.payment_type==="DEBIT"?debit:failed)} alt='credit img'/>
                        </div>
                        <div className='d-flex flex-column text-left'>
                            <div className='transfered-to fw-bold'>{res.message}</div>
                            <div className='date-time'>{res.event_at}</div>
                        </div>
                    </div>
                    <div className='d-flex flex-col justify-content-center'>
                    <div className={res.payment_type==="credit"?"transcation-amount fw-bold money-credited":(res.payment_type==="DEBIT"?"transcation-amount fw-bold":'transcation-amount fw-bold text-danger')} >
                        {res.payment_type==="credit"?<span>+</span>:<span>-</span>}₹{res.amount}
                        </div>
                        {res.payment_type!=='credit' && res.payment_type!=='DEBIT' &&
                        <div className='justify-content-center d-flex flex-row align-items-center fw-normal text-failed'>
                            <img src={exclamation} alt="alert"/>
                             Failed
                        </div>
                        }
                        </div>
                </div>
                ))}
                </div>
                
            </div>
            <div className='download-button mt-5'>
                    <button>Download statement</button>
            </div>
        </div>
    </div>
    )}
    </>
    
  )
}

export default WalletTransactionsFilterPage