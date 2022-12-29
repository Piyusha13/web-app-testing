import React from 'react'
import "./WalletTransactionsPage.style.css"
import wallet from "../../assets/Wallet.svg"
import credit from "../../assets/credit.svg"
import debit from "../../assets/debit.svg"
import failed from "../../assets/Failed.svg"
import exclamation from "../../assets/exclamation.svg"
import { useMediaQuery } from "react-responsive";
import { useState } from 'react'
import AddMoneyPage from '../AddMoney/AddMoneyPage'
import { getUserTransactions } from "../../services/wallet/transactions"
import { mapWalletData } from '../../data/wallet';
import { useEffect } from 'react'
import axios from 'axios'
import { getLocalStorageKey } from '../../utils/local-storage'


const WalletTransactionsPage = () => {

    const isMobile = useMediaQuery({
        query: "(max-width: 750px)",
    });
    const [addMoney, setAddMoney] = useState(false);
    const [walletData, setWalletData] = useState([]);

    const token = getLocalStorageKey('token');

    // const [userData, setUserData] = useState({});


    // const syncWalletData = async () => {
    //     setIsLoading(true);
    //     const [transactions] = await Promise.all([getUserTransactions()]);
    //     setUserData(userData.response);
    //     setWalletData(transactions);
    //     setArray(transactions.response);
    //     console.log(transactions);
    //     setIsLoading(fa0lse);
    //     console.log(walletData);

    //     console.log(array);
    //   };

    const syncWalletData = async () => {

        // console.log(token);
        const response = await axios.get("https://lu6che2dg9.execute-api.ap-south-1.amazonaws.com/dev/api/v1/get-user-transections", {
            // const response = await axios.get("https://api.growpital.com/api/v1/get-user-transections", {
            headers: {

                Authorization: ` Bearer ${token} `,
            },
        });
        // console.log("Response",response);
        setWalletData(response.data.response);
    };

    useEffect(() => {
        syncWalletData();
    })

    return (
        <>
            {isMobile ? (

                <div className='mob-wallettransaction'>
                    {addMoney && (
                        <div className=''>
                            <AddMoneyPage />
                        </div>
                    )}
                    {/* card div */}
                    <div className='mob-card-div p-3 d-flex flex-column justify-content-center' >
                        <div className='div-1 mb-5 d-flex flex-row justify-content-between align-items-center'>
                            <div className=' text-white align-items-start balance-div d-flex flex-column justify-content-between'>
                                <div className='balance-text'>Your Balance</div>
                                <div className='balance-amount'>₹4210.00</div>
                            </div>
                            <div className='' >
                                <img className='wallet-img' src={wallet} alt="wallet img" />
                            </div>
                        </div>
                        <div className='card-buttons d-flex flex-row justify-content-between'>
                            <button onClick={() => { setAddMoney(true); }} className='add-money-button'>Add money</button>
                            <button className='withdraw-button'><a href='/withdraw'>Withdraw</a></button>
                        </div>
                    </div>
                    <div className='transaction-div text-white'>
                        <div className='fw-bold text-white transaction-header d-flex flex-row justify-content-between align-items-center'>
                            <div className='transaction-heading-1'>Transactions</div>
                            <div className='text-yellow transaction-heading-2 ' >
                                <a href='/wallet/transactions'>View All</a>
                                </div>
                        </div>
                        <div className='transaction-list d-flex flex-column  '>
                            <div >
                                {walletData?.map((res, i) => (
                                    <div className=' mb-3 transaction-1 d-flex flex-row justify-content-between align-items-center'>
                                        <div className='transaction-details d-flex flex-row align-items-center'>
                                            <div>
                                                <img className='credit-img' src={res.payment_type === "credit" ? credit : (res.payment_type === "DEBIT" ? debit : failed)} alt='credit img' />
                                            </div>
                                            <div className='d-flex flex-column text-left'>
                                                <div className='mob-transfered-to fw-bold' >{res.message}</div>
                                                <div className='date-time' >{res.event_at}</div>
                                            </div>
                                        </div>
                                        <div className='d-flex flex-col justify-content-center'>
                                            <div className={res.payment_type === "credit" ? "mob-transcation-amount fw-bold money-credited" : (res.payment_type === "DEBIT" ? "mob-transcation-amount fw-bold" : 'mob-transcation-amount fw-bold text-danger')} >
                                                {res.payment_type === "credit" ? <span>+</span> : <span>-</span>}₹{res.amount}
                                            </div>
                                            {res.payment_type !== 'credit' && res.payment_type !== 'DEBIT' &&
                                                <div className='justify-content-center d-flex flex-row align-items-center fw-normal text-failed'>
                                                    <img src={exclamation} alt="alert" />
                                                    Failed
                                                </div>
                                            }
                                        </div>
                                    </div>
                                ))}
                            </div>
                            
                            <div>
                                <span className="text-yellow underline" >View All Transactions</span>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className='transaction-section'>
                    {/* card div */}
                    <div className='card-div p-3 d-flex flex-column justify-content-center' >
                        <div className='div-1 mb-5 d-flex flex-row justify-content-between align-items-center'>
                            <div className=' text-white align-items-start balance-div d-flex flex-column justify-content-between'>
                                <div className='balance-text'>Your Balance</div>
                                <div className='balance-amount'>₹4210.00</div>
                            </div>
                            <div className=''>
                                <img className='wallet-img' src={wallet} alt="wallet img" />
                            </div>
                        </div>
                        <div className='card-buttons d-flex flex-row justify-content-between'>
                            <button className='add-money-button'>Add money</button>
                            <button className='withdraw-button'><a href='/withdraw'>Withdraw</a></button>
                        </div>
                    </div>
                    <div className='transaction-div text-white'>
                        <div className='fw-bold text-white transaction-header d-flex flex-row justify-content-between align-items-center'>
                            <div className='transaction-heading-1'>Transactions</div>
                            <div className='text-yellow transaction-heading-2 ' ><a href='/wallet/transactions'>View All</a></div>
                        </div>
                        <div className='transaction-list d-flex flex-column '>
                            <div >


                                {walletData?.map((res, i) => (
                                    <div className=' mb-2 transaction-1 d-flex flex-row justify-content-between align-items-center'>
                                        <div className='transaction-details d-flex flex-row align-items-center'>
                                            <div>
                                                <img className='credit-img' src={res.payment_type === "credit" ? credit : (res.payment_type === "DEBIT" ? debit : failed)} alt='credit img' />
                                            </div>
                                            <div className='d-flex flex-column text-left'>
                                                <div className='transfered-to fw-bold' >{res.message}</div>
                                                <div className='date-time' >{res.event_at}</div>
                                            </div>
                                        </div>
                                        <div className='d-flex flex-col justify-content-center'>
                                            <div className={res.payment_type === "credit" ? "transcation-amount fw-bold money-credited" : (res.payment_type === "DEBIT" ? "transcation-amount fw-bold" : 'transcation-amount fw-bold text-danger')} >
                                                {res.payment_type === "credit" ? <span>+</span> : <span>-</span>}₹{res.amount}
                                            </div>
                                            {res.payment_type !== 'credit' && res.payment_type !== 'DEBIT' &&
                                                <div className='justify-content-center d-flex flex-row align-items-center fw-normal text-failed'>
                                                    <img src={exclamation} alt="alert" />
                                                    Failed
                                                </div>
                                            }
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* <div className='transaction-1 d-flex flex-row justify-content-between align-items-center'>
                    <div className='transaction-details d-flex flex-row align-items-center'>
                        <div>
                            <img className='credit-img' src={credit} alt='credit img'/>
                        </div>
                        <div className='d-flex flex-column text-left'>
                            <div className='transfered-to fw-bold'>Youtube Premium</div>
                            <div className='date-time'>9 Aug 2022 8:30 PM</div>
                        </div>
                    </div>
                    <div className='transcation-amount fw-bold money-credited' >+₹3,000</div>
                </div>
                <div className='transaction-1 d-flex flex-row justify-content-between align-items-center'>
                    <div className='align-items-center transaction-details d-flex flex-row'>
                        <div>
                            <img className='credit-img' src={debit} alt='credit img'/>
                        </div>
                        <div className='d-flex flex-column text-left'>
                            <div className='transfered-to fw-bold'>Youtube Premium</div>
                            <div className='date-time'>9 Aug 2022 8:30 PM</div>
                        </div>
                    </div>
                    <div className='transcation-amount fw-bold' >-₹3,000</div>
                </div>
                <div className='transaction-1 d-flex flex-row justify-content-between align-items-center'>
                    <div className='align-items-center transaction-details d-flex flex-row'>
                        <div>
                            <img className='credit-img' src={failed} alt='credit img'/>
                        </div>
                        <div className='d-flex flex-column text-left'>
                            <div className='transfered-to fw-bold'>Youtube Premium</div>
                            <div className='date-time'>9 Aug 2022 8:30 PM</div>
                        </div>
                    </div>
                    <div className='transcation-amount fw-bold text-danger  ' >
                        <div>₹3,000</div>
                        <div className='justify-content-center d-flex flex-row align-items-center fw-normal text-failed'><img src={exclamation} alt="alert"/> Failed</div>
                        </div>
                </div> */}
                        </div>
                    </div>
                </div>
            )}
        </>

    )
}

export default WalletTransactionsPage