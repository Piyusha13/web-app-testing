import React from 'react'
import "./FilterTransactionSection.style.css"
import equalizer from "../../assets/equalizer.svg"
import grid from "../../assets/grid.svg"
import credit from "../../assets/credit.svg"
import debit from "../../assets/debit.svg"
import { useMediaQuery } from "react-responsive";
import cancel from "../../assets/Cancel.svg"
import { useState } from 'react'



const FilterTransactionSection = () => {

    const isMobile = useMediaQuery({
        query: "(max-width: 750px)",
      });
    const[creditChecked,setCreditChecked]=useState(false);
    const[debitChecked,setDebitChecked]=useState(false);
    const[allChecked,setAllChecked]=useState(false);
    const[c1,setC1]=useState(false);
    const[c2,setC2]=useState(false);
    const[c3,setC3]=useState(false);
    const[c4,setC4]=useState(false);
    const[c5,setC5]=useState(false);
    const[d1,setD1]=useState(false);
    const[d2,setD2]=useState(false);
    const[d3,setD3]=useState(false);
    const[endDate,setEndDate]=useState(false);
    
    const[startDate,setStartDate]=useState(false);

    function clearall(){
        setC1(false);
        setC2(false);
        setC3(false);
        setC4(false);
        setC5(false);
        setD1(false);
        setD2(false);
        setD3(false);
    }
  return (
    <>
    {isMobile?(
    <>
        {/* <div className='d-flex justify-content-center'>
        <div className='mob-filter-transaction-box text-white px-3 py-3'>
            <div className='filter-transaction-box-header align-items-center justify-content-between w-100 d-flex flex-row '>
                <div>Filter Transactions</div>
                <div>
                    <a href='/wallet/transactions'>
                    <img src={cancel} alt="cancel img"/>
                    </a>
                </div>
            </div>
            <div className='credit-options' >
                <div className='text-yellow credit-div d-flex flex-row align-items-center justify-content-between w-100 '>
                
                    <label>Credit</label>
                    <label onClick={clearall}>Clear all</label>
                </div>
                <div className='mob-options '>
                    <div className='d-flex flex-row align-items-center'>
                        <input onClick={()=>{setC1(!c1);}} checked={c1} className='checkbox-input '  type="checkbox" required />
                        <label>Wallet topup from bank</label>
                    </div>
                    <div className='d-flex flex-row align-items-center'>
                        <input onClick={()=>{setC2(!c2);}} checked={c2} className='checkbox-input '  type="checkbox" required />
                        <label>Investment Payout</label>
                    </div>
                    <div className='d-flex flex-row align-items-center'>
                        <input onClick={()=>{setC3(!c3);}} checked={c3} className='checkbox-input '  type="checkbox" required />
                        <label>Investment Capital</label>
                    </div>
                    <div className='d-flex flex-row align-items-center'>
                        <input onClick={()=>{setC4(!c4);}} checked={c4} className='checkbox-input '  type="checkbox" required />
                        <label>Coupon Cashback</label>
                    </div>
                    <div className='d-flex flex-row align-items-center'>
                        <input onClick={()=>{setC5(!c5);}} checked={c5} className='checkbox-input '  type="checkbox" required />
                        <label>referral bonus</label>
                    </div>
                </div>
            </div>
            <div className='credit-options' >
                <div className='text-yellow credit-div d-flex flex-row align-items-center'>
                
                    <label>Debit</label>
                </div>
                <div className='mob-options '>
                    <div className='d-flex flex-row align-items-center'>
                        <input onClick={()=>{setD1(!d1);}} checked={d1} className='checkbox-input '  type="checkbox" required />
                        <label>Withdrawal to bank</label>
                    </div>
                    <div className='d-flex flex-row align-items-center'>
                        <input onClick={()=>{setD2(!d2);}} checked={d2} className='checkbox-input '  type="checkbox" required />
                        <label>Investment in plan</label>
                    </div>
                    <div className='d-flex flex-row align-items-center'>
                        <input onClick={()=>{setD3(!d3);}} checked={d3} className='checkbox-input '  type="checkbox" required />
                        <label>Platform charges</label>
                    </div>
                    
                </div>
            </div>
            <div className="dateHeading">
                  Choose Date
                </div>
                <div className="dateContainer">
                  <div className="startDate">
                    <p className="dateLabel">
                      Start Date
                    </p>
                    <input
                      type="date"
                      className="dateInput"
                      onChange={()=>{setStartDate(true);}}
                    />
                  </div>
                  <div className="endDate">
                    <p className="dateLabel">
                      End Date
                    </p>
                    <input
                      type="date"
                      className="dateInput"
                      onChange={()=>{setEndDate(true);}}
                    />
                  </div>
                </div>
            <div className={(c1||c2||c3||c4||c5||d1||d2||d3 )&&(startDate && endDate)?'proceed-filter':'filter-button'}>
                <button>Apply Filter</button>
            </div>
            
        </div>
    </div> */}
    </>
    ):(
        <div className='d-flex justify-content-end'>
        <div className='filter-transaction-box text-white px-4 py-3'>
            <div className='filter-transaction-box-header align-items-center justify-content-between w-100 d-flex flex-row '>
                <div>Filter Transactions</div>
                <div>
                    <img src={equalizer} alt="filter img"/>
                </div>
            </div>
            <div className='All-div d-flex flex-row align-items-center'>
                <img src={grid} alt="grid-img" className='grid-img' />
                
                    <label>All</label>
                    <input onClick={()=>{setCreditChecked(!creditChecked); setDebitChecked(!debitChecked); setAllChecked(!allChecked); }} checked={allChecked} className='checkbox-input '  type="checkbox" required />
            </div>
            <div className='credit-options' >
                <div className='credit-div d-flex flex-row align-items-center'>
                <img src={credit} alt="grid-img" className='grid-img' />
                
                    <label>Credit</label>
                    <input onClick={()=>{setCreditChecked(!creditChecked)}} checked={creditChecked} className='checkbox-input '  type="checkbox" required />
                </div>
                <div className='options '>
                    <div className='d-flex flex-row align-items-center'>
                        <input onClick={()=>{setC1(!c1);}} checked={creditChecked || c1} className='checkbox-input '  type="checkbox" required />
                        <label>Wallet topup from bank</label>
                    </div>
                    <div className='d-flex flex-row align-items-center'>
                        <input onClick={()=>{setC2(!c2);}} checked={creditChecked || c2} className='checkbox-input '  type="checkbox" required />
                        <label>Investment Payout</label>
                    </div>
                    <div className='d-flex flex-row align-items-center'>
                        <input onClick={()=>{setC3(!c3);}} checked={creditChecked || c3} className='checkbox-input '  type="checkbox" required />
                        <label>Investment Capital</label>
                    </div>
                    <div className='d-flex flex-row align-items-center'>
                        <input onClick={()=>{setC4(!c4);}} checked={creditChecked || c4} className='checkbox-input '  type="checkbox" required />
                        <label>Coupon Cashback</label>
                    </div>
                    <div className='d-flex flex-row align-items-center'>
                        <input onClick={()=>{setC5(!c5);}} checked={creditChecked || c5} className='checkbox-input '  type="checkbox" required />
                        <label>referral bonus</label>
                    </div>
                </div>
            </div>
            <div className='credit-options' >
                <div className='credit-div d-flex flex-row align-items-center'>
                <img src={debit} alt="grid-img" className='grid-img' />
                
                    <label>Debit</label>
                    <input onClick={()=>{setDebitChecked(!debitChecked);}} checked={debitChecked} className='checkbox-input '  type="checkbox" required />
                </div>
                <div className='options '>
                    <div className='d-flex flex-row align-items-center'>
                        <input onClick={()=>{setD1(!d1);}} checked={debitChecked || d1} className='checkbox-input '  type="checkbox" required />
                        <label>Withdrawal to bank</label>
                    </div>
                    <div className='d-flex flex-row align-items-center'>
                        <input onClick={()=>{setD2(!d2);}} checked={debitChecked || d2} className='checkbox-input '  type="checkbox" required />
                        <label>Investment in plan</label>
                    </div>
                    <div className='d-flex flex-row align-items-center'>
                        <input onClick={()=>{setD3(!d3);}} checked={debitChecked || d3} className='checkbox-input '  type="checkbox" required />
                        <label>Platform charges</label>
                    </div>
                    
                </div>
            </div>
            <div className={allChecked || debitChecked || creditChecked || c1 || c2 || c3 || c4 ||c5|| d1|| d2|| d3?'proceed-filter' :'filter-button'}>
                <button>Apply Filter</button>
            </div>
            
        </div>
    </div>
    )}
    </>

    
  )
}

export default FilterTransactionSection