import React from 'react'
import "./AlertSection.style.css"
import alertImg from "../../assets/alert.svg"
import exclamation from "../../assets/exclamation.svg"
import { useMediaQuery } from "react-responsive";

const AlertSection = () => {

  const isMobile = useMediaQuery({
    query: "(max-width: 750px)",
  });

  return (
    <>
    {isMobile?(<>
      <div className='d-flex justify-content-center'>
        <div className='mob-alert-box text-white'>
            <div className='mob-alert-heading d-flex flex-row'>
                <div>
                    <img src={alertImg} alt="alertImg"/>
                </div>
                <div>Important Information</div>
            </div>
            <div className='mob-text-3'>• Withdraw request placed before 12:30 AM on business day will be processed within 24 hours.</div>
            <div className='fw-bold mob-balance-text'>
                <img src={exclamation} alt="" />
                Balance might be left unsettly due to following reasons:</div>
                <div className='mob-text-3'>• You have sold stock recently from your portfolio. Amount willbe available in two business day.</div>
                <div className='mob-text-3'>• Funds added the same day.Amount will be available on the next business day.</div>

        </div>
    </div>
    </>):(
      <div className='d-flex justify-content-end'>
      <div className='alert-box text-white'>
          <div className='alert-heading d-flex flex-row'>
              <div>
                  <img src={alertImg} alt="alertImg"/>
              </div>
              <div>Important Information</div>
          </div>
          <div className='text-3'>• Withdraw request placed before 12:30 AM on business day will be processed within 24 hours.</div>
          <div className='fw-bold balance-text'>
              <img src={exclamation} alt="" />
              Balance might be left unsettly due to following reasons:</div>
              <div className='text-3'>• You have sold stock recently from your portfolio. Amount willbe available in two business day.</div>
              <div className='text-3'>• Funds added the same day.Amount will be available on the next business day.</div>

      </div>
  </div>
    )}
    </>
    
  )
}

export default AlertSection