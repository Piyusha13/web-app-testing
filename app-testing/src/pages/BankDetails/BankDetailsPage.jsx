import React from 'react'
import { useMediaQuery } from "react-responsive";
import Navbar from '../../components/Navbar/Navbar';
import NavTabs from '../../components/NavTab/NavTab';
import "../BankDetails/BankDetails.style.css"
import sibIcon from "../../assets/sbi.svg"
import copyIcon from "../../assets/Copy.svg"
import walletIcon from "../../assets/Wallet.svg"
// import { COGNITO_STATUS } from "./contants";



const BankDetailsPage = () => {
    const isMobile = useMediaQuery({
        query: "(max-width: 800px)",
      });
  return (
    <>
            { isMobile?(
                
            <div className=''>
                
                <div className=' mx-0 p-3 bank-details-container'>
                <a href="/profile" >
                    <div className='header px-2' > 
                        <i class="fa-solid fa-chevron-left "></i>  
                        <span className='px-0'>Bank Details</span>
                    </div>
                </a>
                    <div className='boxborder text-white my-4'>
                        <div className='bg-gray boxborder m-1'>
                            <div className='border-bottom d-flex flex-row align-items-center justify-content-between p-1 m-0'>
                                <div className=''>
                                    <div className='d-flex flex-row align-items-center justify-content-between'>
                                        <div className='p-1 mob-img'><img src={sibIcon} alt="sbiImg" /></div>
                                        <div className='text-left '>
                                            <div className='fw-bold fs-6 pb-0 mb-0'>******7267</div>
                                            <div className='mob-bankName-text'>State Bank Of India</div>
                                        </div>

                                    </div>
                                </div>
                                <div><img src={copyIcon} alt="copyImg" /></div>
                            </div>
                            <div className='d-flex flex-row px-1 border-bottom  align-items-center'>
                                <div className='py-1 mob-name'>Name</div>
                                <div className='px-4 p-1'>:</div>
                                <div className='p-1 px-0 mob-userName'>Hemant Kant Malviya</div>
                            </div>
                            <div className='d-flex flex-row px-1 border-bottom align-items-center'>
                                <div className='py-1 mob-name'>Branch</div>
                                <div className='px-4 p-1'>:</div>
                                <div className='p-1 px-0 mob-userName'>Mankapur</div>
                            </div>
                            <div className='d-flex flex-row px-1  align-items-center'>
                                <div className='py-1 mob-name'>IFSC</div>
                                <div className='px-4 p-1'>:</div>
                                <div className='p-1 px-0 mob-userName'>SBIN0006676</div>
                            </div>
                        </div>
                    </div>
                    <div className='text-white'>
                        <div className='text-left mob-account-heading mb-3'>Growpital Account Status</div>
                        <div className='d-flex flex-row justify-content-between align-items-center'>
                            <div className='d-flex flex-row align-items-center'>
                                <div><img src={walletIcon} className="mob-wallet-icon mx-2" alt="wallet img"/></div>
                                <div className='d-flex flex-column text-left '>
                                    <div className='mob-inline-block mx-1'>Growpital Wallet <button className='mob-Active-button mx-2 fw-100'>Active</button></div>
                                    <div className='wallet-amount mx-1'>₹5,000</div>
                                </div>
                            </div>
                            <div><button className='mob-view-button'>View</button></div>
                        </div>
                        <div className='d-flex justify-content-center'>
                        <div className='m-5 mob-text-green'>Chnage Bank Account</div>
                        </div>
                    </div>
                    
                </div>
                <div className='bank-details-navtab'>
                    <NavTabs/>
                </div>
            </div>
                
            ):(
                <div className='container-xxl'>
                    <Navbar/>
            <div className='d-flex my-5'>
                <div className=''>
                    <NavTabs/>
                </div>
                <div className=' mx-5'>
                <a href="/profile" >
                    <div className='header px-0' > 
                        <i class="fa-solid fa-chevron-left "></i>  
                        <span className='px-3'>Bank Details</span>
                    </div>
                </a>
                    <div className='boxborder text-white my-4'>
                        <div className='bg-gray boxborder m-1'>
                            <div className='border-bottom d-flex flex-row align-items-center justify-content-between p-3 m-0'>
                                <div className=''>
                                    <div className='d-flex flex-row align-items-center justify-content-between'>
                                        <div className='p-2'><img src={sibIcon} alt="sbiImg" /></div>
                                        <div className='text-left '>
                                            <div className='fw-bold fs-3 pb-0 mb-0'>******7267</div>
                                            <div className='bankName-text'>State Bank Of India</div>
                                        </div>

                                    </div>
                                </div>
                                <div><img src={copyIcon} className='copyIcon' alt="copyImg" /></div>
                            </div>
                            <div className='d-flex flex-row px-1 border-bottom'>
                                <div className='py-3 name'>Name</div>
                                <div className='px-5 p-3'>:</div>
                                <div className='p-3 px-0 userName'>Hemant Kant Malviya</div>
                            </div>
                            <div className='d-flex flex-row px-1 border-bottom'>
                                <div className='py-3 name'>Branch</div>
                                <div className='px-5 p-3'>:</div>
                                <div className='p-3 px-0 userName'>Mankapur</div>
                            </div>
                            <div className='d-flex flex-row px-1 '>
                                <div className='py-3 name'>IFSC</div>
                                <div className='px-5 p-3'>:</div>
                                <div className='p-3 px-0 userName'>SBIN0006676</div>
                            </div>
                        </div>
                    </div>
                    <div className='text-white'>
                        <div className='text-left fw-bold mb-3'>Growpital Account Status</div>
                        <div className='d-flex flex-row justify-content-between align-items-center'>
                            <div className='d-flex flex-row align-items-center'>
                                <div><img src={walletIcon} className="wallet-icon mx-2" alt="wallet img"/></div>
                                <div className='d-flex flex-column text-left '>
                                    <div className='inline-block mx-1'>Growpital Wallet <button className='Active-button mx-2 fw-100'>Active</button></div>
                                    <div className='wallet-amount mx-1'>₹5,000</div>
                                </div>
                            </div>
                            <div><button className='view-button'>View</button></div>
                        </div>
                        <div className='d-flex justify-content-center'>
                        <div className='m-5 text-green'>Chnage Bank Account</div>
                        </div>
                    </div>
                    
                </div>
            </div>
                </div>
            )}

            
    </>
  )
}

export default BankDetailsPage