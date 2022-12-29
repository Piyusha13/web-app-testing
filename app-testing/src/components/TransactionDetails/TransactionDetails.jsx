import React from 'react'
import "./TransactionDetails.style.css"
import Cancel from "../../assets/Cancel.svg";
import circler_right from '../../assets/circle_right.svg'
import transationwallet from '../../assets/transationwallet.svg'
import sm from '../../assets/sm.svg'
import rupeewallet from '../../assets/ruppeewallet.svg'
import pages from '../../assets/copy-files-svgrepo-com 1.svg'
// import arrow from '../assets/arrow.svg'
import { Link, NavLink } from 'react-router-dom';
import { useMediaQuery } from "react-responsive";





const TransationDetails = () => {

    // const[menu,setMenu]=useState(false);
      const isMobile = useMediaQuery({
    query: "(max-width: 750px)",
  });

    return (
        <>
        {isMobile?(
            <>
            <section className=''>
            {/* <div className="container"> */}
            {/* <div className=" transactionComplet"> */}
                {/* <div className="col d-flex justify-content-center align-items-center"> */}
                    {/* <div className="card text-white  mb-0 transation-content "> */}
                        <div className="text-white card-body pt-0 px-4 ">
                            <div>
                                <div className="row">
                                <NavLink to="/wallet">
                                    <div className="align-items-center mt-2 d-flex mob-transation-heading ">
                                        
                                        {/* <img src={arrow} id="downloadCloseButton" alt="cancel-button" className='d-sm-none me-5 mb-2' /> */}
                                        <i class="fa-solid fa-chevron-left"></i>  

                                        <h3 className="mob-transaction-details-heading fw-semibold text-center px-3">Transation Details</h3>
                                        
                                        {/* <img src={Cancel} id="downloadCloseButton" alt="cancel-button" className='close d-none d-sm-block' /> */}
                                    </div>
                                    </NavLink>
                                </div>
                            </div>

                            <div className='transation-compilet noinmobile py-3  px-3 mb-3 my-3 mx-auto' >
                                <p className='text-center my-auto'><img src={circler_right} alt="" className='img-fluid mx-1 my-0' />Transaction Complete!</p>
                            </div>

                            <div className='pt-3 pb-1'>
                                <div className="row ">
                                    <div className='d-md-none text-start add-money mb-1'>Money added to wallet <br></br> from bank account  </div>
                                    <div className="col-md-6 col-12 transation-cash-details py-0 justify-content-md-around">
                                        <h2 className='text-start'>₹15,000</h2>
                                        <img src={transationwallet} alt="" className='img-fluid' />
                                    </div>
                                    <div className="d-md-none text-start add-money">12 Aug 2022, 03:55pm</div>
                                    <div className='text-center d-none d-md-block add-money-text '>Money added to wallet from bank account </div>
                                </div>
                            </div>
                            <div className='transation-compilet notindesktop  py-3  px-3 mb-3 my-3 mx-0 ' >
                                <p className='text-center my-auto transcation-complete-div '>
                                    <img src={circler_right} alt="" className='img-fluid mx-1 my-0' />
                                    <div>
                                        <div>Transaction Complete!</div>
                                        <div className='transcation-complete-div-text-2 text-muted'> Tap to view this transaction </div>
                                    </div>
                                    
                                 </p>
                            </div>

                            <div>

                                <div className='transation-address-content row px-1 py-3 mb-3 mb-4 pb-0 mx-1'>
                                    <div className="col-md-6 col- text-start mb-3 pe-md-5">
                                        <div className='from-to'>
                                            <p className='p-text-1'>From <img src={sm} alt="" /></p>
                                        </div>
                                        <p className='m-0 p-text-1 fw-bold'>Saurabh Sharma</p>
                                        <p className='m-0  p-text-2 fst-italic'>SBI, IFSC SBIN016095 </p>
                                        <p className='m-0  p-text-2 fst-italic'>A/c No. XXXXXXXXXX5736</p>

                                        <p className='m-0 p-text-2'>12 Aug 2022, 03:55pm </p>
                                    </div>
                                    <div className="col-md-6 col-12 text-start mb-4  ps-md-5">
                                        <div className='from-to'>
                                            <p className='p-text-1'>To <img src={rupeewallet} alt="" className='img-fluid text-end' /></p>
                                        </div>
                                        <p className='m-0 p-text-1 fw-bold'>Saurabh Sharma</p>
                                        <p className='m-0 p-text-2 fst-italic'>SBI, IFSC SBIN016095 </p>
                                        <p className='m-0 p-text-2 fst-italic'>A/c No. XXXXXXXXXX5736</p>
                                        <p className='m-0 p-text-2 '>12 Aug 2022, 03:55pm </p>
                                    </div>
                                    <div className='d-inline-flex w-100 mb-4 d-md-none'>

                                        <div className='text-start me-2'>
                                            <p className='m-0 ' >Payment Method:<span className='p-text-3 '> UPI</span> </p>
                                            <p className='m-0'>Transaction ID: <span className='p-text-3 '>DBTR/222201998174</span></p>

                                        </div>
                                        <img src={pages} alt="" className='mt-2 img-fluid' />
                                    </div>


                                </div>
                            </div>
                            <div className=' d-none d-md-block '>
                                <div className='d-inline-flex  w-100 mb-4'>

                                    <div className='text-start me-2'>
                                        <p className='m-0 ' >Payment Method:<span className='upi-text'> UPI </span> </p>
                                        <p className='m-0'>Transaction ID: <span className='upi-text'> DBTR/222201998174</span></p>

                                    </div>
                                    <img src={pages} alt="" className='mt-2 img-fluid' />
                                </div>
                            </div>

                            <div>
                                <div className="row">
                                    <div className="col-md-6 col-6 mb-3 ">
                                        <div className="transation-help-btn px-3  py-2 rounded">
                                            <Link to="/help" type="button " className='link  text-dark'>Help</Link>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-6 mb-3 ">
                                        <div className='px-2 transation-share-btn py-2  rounded'>

                                            <Link to="/share" type="button" className='link text-muted'>Share</Link>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    {/* </div> */}
                {/* </div> */}
            {/* </div> */}
            {/* </div> */}
            {/* </div> */}
        </section >
            </>
        ):(
            <section className=''>
            {/* <div className="container-xxl"> */}
            <div className="row   transactionComplet">
                <div className="col d-flex justify-content-center align-items-center">
                    <div className="card text-white  mb-3 transation-content ">
                        <div className="card-body ">
                            <div>
                                <div className="row">
                                    <div className="col-md-12 col-12 d-flex justify-content-between transation-heading ">
                                        {/* <img src={arrow} id="downloadCloseButton" alt="cancel-button" className='d-sm-none me-5 mb-2' /> */}

                                        <h3 className="fs-5 fw-semibold text-md-start text-center">Transation Details</h3>
                                        <img src={Cancel} id="downloadCloseButton" alt="cancel-button" className='close d-none d-sm-block' />
                                    </div>
                                </div>
                            </div>

                            <div className='transation-compilet noinmobile py-3  px-3  my-4  mx-auto' >
                                <p className='text-center my-auto'><img src={circler_right} alt="" className='img-fluid mx-1 my-0' />Transaction Complete!</p>
                            </div>

                            <div className='top-div-padding pt-0'>
                                <div className="row ">
                                    <div className='d-md-none text-start add-money mb-3'>Money added to wallet from bank account </div>
                                    <div className="col-md-12 col-12 transation-cash-details py-0 justify-content-md-around">
                                        <h2 className='text-start '>₹15,000</h2>
                                        <img src={transationwallet} alt="" className='img-fluid' />
                                    </div>
                                    <div className="d-md-none text-start add-money">12 Aug 2022, 03:55pm</div>
                                    <div className='text-center d-none d-md-block add-money-text '>Money added to wallet from bank account </div>
                                </div>
                            </div>
                            <div className='transation-compilet notindesktop  py-3  px-3 mb-3 my-3 mx-0 ' >
                                <p className='text-center my-auto transcation-complete-div '>
                                    <img src={circler_right} alt="" className='img-fluid mx-1 my-0' />
                                    <div>
                                        <div>Transaction Complete!</div>
                                        <div className='transcation-complete-div-text-2 text-muted'> Tap to view this transaction </div>
                                    </div>
                                    
                                 </p>
                            </div>

                            <div>

                                <div className='transation-address-content row px-1 py-3 mb-3 mb-4 pb-0'>
                                    <div className="col-md-6 col- text-start mb-3 pe-md-5">
                                        <div className='from-to'>
                                            <p className='p-text-1'>From <img src={sm} alt="" /></p>
                                        </div>
                                        <p className='m-0 p-text-1 fw-bold'>Saurabh Sharma</p>
                                        <p className='m-0  p-text-2 fst-italic'>SBI, IFSC SBIN016095 </p>
                                        <p className='m-0  p-text-2 fst-italic'>A/c No. XXXXXXXXXX5736</p>

                                        <p className='m-0 p-text-2'>12 Aug 2022, 03:55pm </p>
                                    </div>
                                    <div className="col-md-6 col-12 text-start mb-4  ps-md-5">
                                        <div className='from-to'>
                                            <p className='p-text-1'>To <img src={rupeewallet} alt="" className='img-fluid text-end' /></p>
                                        </div>
                                        <p className='m-0 p-text-1 fw-bold'>Saurabh Sharma</p>
                                        <p className='m-0 p-text-2 fst-italic'>SBI, IFSC SBIN016095 </p>
                                        <p className='m-0 p-text-2 fst-italic'>A/c No. XXXXXXXXXX5736</p>
                                        <p className='m-0 p-text-2 '>12 Aug 2022, 03:55pm </p>
                                    </div>
                                    <div className='d-inline-flex w-100 mb-4 d-md-none'>

                                        <div className='text-start me-2'>
                                            <p className='m-0 ' >Payment Method:<span className='p-text-3 '> UPI</span> </p>
                                            <p className='m-0'>Transaction ID: <span className='p-text-3 '>DBTR/222201998174</span></p>

                                        </div>
                                        <img src={pages} alt="" className='mt-2 img-fluid' />
                                    </div>


                                </div>
                            </div>
                            <div className=' d-none d-md-block '>
                                <div className='d-inline-flex  w-100 mb-4'>

                                    <div className='text-start me-2'>
                                        <p className='m-0 ' >Payment Method:<span className='upi-text'> UPI </span> </p>
                                        <p className='m-0'>Transaction ID: <span className='upi-text'> DBTR/222201998174</span></p>

                                    </div>
                                    <img src={pages} alt="" className='mt-2 img-fluid' />
                                </div>
                            </div>

                            <div>
                                <div className="row">
                                    <div className="col-md-6 col-6 mb-3 ">
                                        <div className="transation-help-btn px-3  py-2 rounded">
                                            <Link to="/help" type="button " className='link  text-dark'>Help</Link>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-6 mb-3 ">
                                        <div className='px-2 transation-share-btn py-2  rounded'>

                                            <Link to="/share" type="button" className='link text-muted'>Share</Link>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* </div> */}
            {/* </div> */}
        </section >
        )}
        </>


        
    )
}

export default TransationDetails