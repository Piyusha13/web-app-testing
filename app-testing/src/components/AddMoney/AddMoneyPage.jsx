import React from 'react'
import "./AddMoneyPage.style.css"
// import bank from "../../assets/bank.svg"
import { useState } from 'react'
import PaymentMethod1 from '../PaymentMethod/PaymentMethod1'
import PaymentMethod2 from '../PaymentMethod/PaymentMethod2'
import cancel from '../../assets/Cancel.svg'


const AddMoneyPage = () => { 

  const[addAmount,setAddAmount]=useState();
  const[secletedAmount,setSelectedAmount]=useState();
  const[amount,setAmount]=useState();
  const[paymentPopup,setPaymentPopup]=useState(false);

  return (
    <>
    {paymentPopup &&
    <div className='text-success'>
      {addAmount===1 &&(
        <><PaymentMethod1/></>
      )}
      {addAmount===2 &&(
        <><PaymentMethod2/></>
      )}
      {addAmount===3 &&(
        <>3</>
      )}
    </div>
    }
    <div className='  addMoney-page d-flex '>
      <div className='  box p-4  flex-column align-items-center text-white'>
        <div className='fw-bold text-left w-100'>
          <div>Add Money</div>
          
          <div className='cancel-img ' >
            <a href="/wallet">
            <img src={cancel} alt="cancel" />
            </a>
          </div>
          </div>
        <div className='input-amount p-2 d-flex flex-column align-items-start' >
          <div className='input-amount-heading text-muted' >Enter amount to add</div>
          <input type="number" value={amount} onChange={(e)=>{setAmount(e.target.value);}} placeholder="enter amount" />
        </div>
        <div className='selected-amount-div d-flex flex-row justify-content-between align-items-center'>
            <div className={secletedAmount===1?'selected-amount':'non-selected-amount'} onClick={()=>{setAmount(5000); setSelectedAmount(1);}} >5,000</div>
            <div className={secletedAmount===2?'selected-amount':'non-selected-amount'} onClick={()=>{setAmount(10000); setSelectedAmount(2);}}>10,000</div>
            <div className={secletedAmount===3?'selected-amount':'non-selected-amount'} onClick={()=>{setAmount(50000); setSelectedAmount(3);}}>50,000
            <div className='popular-text' >Popular</div>
            </div>

            <div className={secletedAmount===4?'selected-amount':'non-selected-amount'} onClick={()=>{setAddAmount(100000); setSelectedAmount(4);}}>100,000</div>
        </div>
        <div className='w-100'>
        <div onClick={()=>{setAddAmount(1);}} className='cursor-pointer SMTB d-flex flex-row justify-content-start'>
          <div>
            <input onClick={()=>{setAddAmount(1);}} type="radio" />
          </div>
          <div className='MTB justify-content-center d-flex flex-column align-items-start' >
            <div className='fw-bold'>
              NEFT,RTGS,Bank transfer
            </div>
            <div className='payment-type' >
              Convinience fee <span className='text-color-green' >free</span>
            </div>
          </div>
        </div>
        <div onClick={()=>{setAddAmount(2);}} className='cursor-pointer SMTB d-flex flex-row justify-content-start'>
          <div>
            <input type="radio" checked={addAmount===2?true:false} />
          </div>
          <div className='MTB justify-content-center d-flex flex-column align-items-start' >
            <div className='fw-bold'>
              Pay through BHIM/UPI
            </div>
            <div className='payment-type' >
              Convinience fee <span className='text-color-green'>free</span>
            </div>
          </div>
        </div>
        <div onClick={()=>{setAddAmount(3);}} className='cursor-pointer SMTB d-flex flex-row justify-content-start'>
          <div>
            <input type="radio" checked={addAmount===3?true:false}/>
          </div>
          <div className='MTB justify-content-center d-flex flex-column align-items-start' >
            <div className='fw-bold text-left'>
              Pay through Debit & Credit Card/Net Banking/other
            </div>
            <div className='payment-type' >
              Convinience fee :<span className='text-color-green'> 500/- +GST </span>
            </div>
          </div>
        </div>
        </div>
        <div className={addAmount?'continue-button':'continue-disable'}>
              
            <button onClick={()=>{setPaymentPopup(!paymentPopup);}} >Continue</button>
          
        </div>
      </div>
    </div>
    </>
  )
}

export default AddMoneyPage