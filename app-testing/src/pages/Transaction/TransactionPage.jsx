import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import NavTab from '../../components/NavTab/NavTab'
import "./TransactionPage.style.css"
// import WalletTransactionsPage from '../components/WalletTransactionsPage'
import WalletTransactionsFilterPage from '../../components/WalletTransactionFilter/WalletTransactionFilterPage'
import FilterTransactionSection from '../../components/FilterTransaction/FilterTransactionSection'
import { useMediaQuery } from "react-responsive";


const TransactionPage = () => {

  const isMobile = useMediaQuery({
    query: "(max-width: 750px)",
  });

  return (
    <>
    {isMobile?(<>
      

      <div className=''>
     
            {/* <div className='row'> */}
            {/* <div className='col'> */}
                <WalletTransactionsFilterPage/>
                
            </div>
            <div className='col not-in-mob'>
                <FilterTransactionSection/>
            {/* </div> */}
        {/* </div> */}
      

    </div>
    </>):(
      <div className='container-xxl'>
     
      <Navbar/>
      <div className='row mt-5'>
      <div className='col-2 not-in-mob'>
          <NavTab/>
      </div>
      <div className='col'>
          <WalletTransactionsFilterPage/>
          
      </div>
      <div className='col not-in-mob'>
          <FilterTransactionSection/>
      </div>
  </div>


</div>
    )}
    </>

    
  )
}

export default TransactionPage