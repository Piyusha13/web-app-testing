import React from 'react'
import AddMoneyPage from '../../components/AddMoney/AddMoneyPage'
import Navbar from '../../components/Navbar/Navbar'
import NavTab from '../../components/NavTab/NavTab'
import WalletTransactionsPage from '../../components/WalletTransaction/WalletTransactionsPage'
import { useMediaQuery } from "react-responsive";
import "./WalletPage.style.css";


const WalletPage = () => {

    const isMobile = useMediaQuery({
        query: "(max-width: 750px)",
      });

  return (
    <>
    {isMobile?(
        <>
    <div className='mob-wallet-view'>
        <Navbar/>
        <div className='container-xxl'>
            
            <WalletTransactionsPage/>
        
        </div>
    
    </div>
    <div className='wallet-navtab'>
        <NavTab/>
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
                <WalletTransactionsPage/>
            </div>
            <div className='col '>
                <AddMoneyPage/>
            </div>
        </div>
    </div>
    )}
    </>
    
  )
}

export default WalletPage