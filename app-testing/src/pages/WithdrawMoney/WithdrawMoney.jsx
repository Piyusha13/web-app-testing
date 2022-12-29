import React from 'react'
import AlertSection from '../../components/AlertSection/AlertSection'
// import AddMoneyPage from '../components/AddMoneyPage'
import Navbar from '../../components/Navbar/Navbar'
import NavTab from '../../components/NavTab/NavTab'
import WithdrawMidSection from '../../components/WithdrawMidSection/WithdrawMidSection'
import { useMediaQuery } from "react-responsive";
import { NavLink } from 'react-router-dom'



const WithdrawMoney = () => {

    const isMobile = useMediaQuery({
        query: "(max-width: 750px)",
      });

  return (
    <>
    {isMobile?(
        <>
        <div className='container-xxl '>
        <div className='header text-white mt-3 ' > 
        <NavLink to="/wallet">
                <i class="fa-solid fa-chevron-left"></i>  
                Withdraw Funds
                </NavLink>
            </div>
        <div className='col mt-5'>
            <div className=''>
                <WithdrawMidSection/>
            </div>
            
        </div>
    </div>
        </>
    ):(
        <div className='container-xxl'>
        <Navbar/>
        <div className='row mt-5'>
            <div className='col-2 not-in-mob'>
                <NavTab/>
            </div>
            <div className='col'>
                <WithdrawMidSection/>
            </div>
            <div className='col not-in-mob'>
                <AlertSection/>
            </div>
        </div>
    </div>
    )}
    </>
    
  )
}

export default WithdrawMoney