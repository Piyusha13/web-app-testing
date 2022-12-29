import React from 'react'
import sbi from "../../assets/sbi.svg"
import "./WithdrawMidSection.style.css"
import { useMediaQuery } from "react-responsive";
import AlertSection from '../AlertSection/AlertSection';
import { useState } from 'react';


const WithdrawMidSection = () => {

    const isMobile = useMediaQuery({
        query: "(max-width: 750px)",
      });

    const[withdrawAmount,setWithdrawAmount]=useState("");
    
  return (
    <>
    {isMobile?(
    <>
    <div className='mob-mid-section d-flex flex-column text-white '>
        <div className='mob-max-withdraw-div d-flex flex-column'>
            <div className='fw-bold mob-limit'>₹11,786</div>
            <div className='mob-text-2'>Max Withdrawal Limit</div>
            <div className='mob-text-2 mob-unsetteled-div'>Unsetteled amount:{" "} ₹2,386.65</div>
            <div className='mob-text-2'>The amount will be cleared based on your transaction within working days</div>
        </div>
        <div className='mob-withdraw-amount-div d-flex flex-column'>
            <div className='mob-text-2'>Amount to Withdraw</div>
            <input type="number" onChange={(e)=>{setWithdrawAmount(e.target.value);}} className='mob-withdraw-amount' />
            <div className='fund-transfer'>
                <div className='mob-text-2'>Fund will be transferred to this account</div>
                <div className='mob-bank-info d-flex flex-row align-items-center'>
                    <div><img src={sbi} alt="sbi-img"/></div>
                    <div>
                        <div  >State Bank Of India</div>
                        <div className='mob-account-no'>A/C:32XXXXXX1570</div>
                    </div>
                </div>
            </div>
            
        </div>
        <AlertSection/>
        <div className='text-4'>
            By continuing I agree with the <span className='text-yellow' > Disclaimers </span>
            and T&C of <span className='text-yellow'> Growpital </span> Money.
        </div>
            
    </div>
    <div className={withdrawAmount ?'mob-proceed-Button':'mob-submit-Button'} >
                <button>Submit</button>
            </div>
    </>
    ):(
        <div className='mid-section d-flex flex-column text-white '>
        <div className='max-withdraw-div d-flex flex-column'>
            <div className='fw-bold limit'>₹11,786</div>
            <div className='text-2'>Max Withdrawal Limit</div>
            <div className='text-2 unsetteled-div'>Unsetteled amount:{" "} ₹2,386.65</div>
            <div className='text-2'>The amount will be cleared based on your transaction within working days</div>
        </div>
        <div className='withdraw-amount-div d-flex flex-column'>
            <div className='text-2'>Amount to Withdraw</div>
            <input onChange={(e)=>{setWithdrawAmount(e.target.value);}} type="number" className='withdraw-amount' />
            <div className='fund-transfer'>
                <div className='text-2'>Fund will be transferred to this account</div>
                <div className='bank-info d-flex flex-row align-items-center'>
                    <div><img src={sbi} alt="sbi-img"/></div>
                    <div>
                        <div>State Bank Of India</div>
                        <div className='account-no'>A/C:32XXXXXX1570</div>
                    </div>
                </div>
            </div>
            <div className={withdrawAmount?' submitButton':'submit-disable'}>
                <button>Submit</button>
            </div>
        </div>
    </div>
    )}
    </>
    
  )
}

export default WithdrawMidSection