import React from 'react'
import AlertSection from '../../components/AlertSection/AlertSection'
// import AddMoneyPage from '../components/AddMoneyPage'
import Navbar from '../../components/Navbar'
import NavTab from '../../components/NavTab'
import WithdrawMidSection from '../../components/WithdrawMidSection'

const MyInvestmentPage = () => {
  return (
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
  )
}

export default MyInvestmentPage