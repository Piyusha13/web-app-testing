//formula to find the duration in month between two dates?
import { useMediaQuery } from "react-responsive";
import Navbar from "../../components/Navbar/Navbar";
import NavTab from "../../components/NavTab/NavTab";
import "./PortfolioPage.style.css";
import tree from "../../assets/banyan_tree.svg";
import grid from "../../assets/grid.svg";
import upTriangle from "../../assets/up-triangle.svg"
import equalizer from "../../assets/equalizer.svg"
import { useState } from "react";
import cancel from "../../assets/Cancel.svg"
import canclledImg from "../../assets/cross-in-circle.svg"
import ongoingImg from "../../assets/ongoing.svg"
import completeImg from "../../assets/plant.svg"
import axios from "axios";
import { getLocalStorageKey } from "../../utils/local-storage";
import { useEffect } from "react";

const PortfolioPage = () => {
    const isMobile = useMediaQuery({
        query: "(max-width: 750px)",
    });
    const [openPortfolioFilter, setOpenPortfolioFilter] = useState(false);
    // const [all, setAll] = useState(false);
    // const [completed, setcompleted] = useState(false);
    // const [ongoing, setongoing] = useState(false);
    // const [cancelled, setcancelled] = useState(false);
    const [filter,setFilter]=useState();

    const [investmentData, setInvestmentData] = useState([]);

    const token = getLocalStorageKey('token');


    const syncInvestmentData = async () => {
        const response = await axios.get("https://lu6che2dg9.execute-api.ap-south-1.amazonaws.com/dev/api/v1/get-user-investments", {
            headers: {
                Authorization: ` Bearer ${token} `,
            },
        });
        setInvestmentData(response.data.response);
    };

    useEffect(() => {
        syncInvestmentData();
    })

    return (
        <>
            {isMobile ?
                (
                    <>
                        {/* <div className="pt-3">
                            <div className='portfolio-container'>

                                <div className='header mb-5 d-flex flex-row justify-content-between px-3' >
                                    <a href="/profile" >
                                        <div>
                                            <i className="fa-solid fa-chevron-left"></i>
                                            <span className='px-2'>Portfolio</span>
                                        </div>
                                    </a>
                                    <div>
                                        <img onClick={() => { setOpenPortfolioFilter(!openPortfolioFilter); }} src={equalizer} alt="filter icon" />
                                    </div>
                                </div>

                                <div className="mob-investment-card-div">
                                    

                                    {investmentData?.map((res) => (
                                        <div className="mob-investment-card text-white">
                                            <div className="card-header d-flex flex-row judtify-content-start align-items-center p-2">
                                                <div className="tree-div p-2">
                                                    <img src={tree} alt="tree-img" />
                                                </div>
                                                <div className="plan-title d-flex flex-column justify-content-start align-items-start ">
                                                    <div className="title-text">{res.plan_name.slice(0, 13)}</div>
                                                    <div className={res.status === "active" ? "investment-status" : (res.status === "cancelled" ? "investment-status-cancelled" : "investment-status-complete")}>• {" "} {res.status}</div>
                                                </div>
                                            </div>
                                            <div className="slide-bar">
                                                <div className="d-flex flex-row justify-content-between align-items-end">
                                                    <div className="start-value  " >0</div>
                                                    <div className="I-E d-flex flex-column">
                                                        <div className="investment-title ">Interest Earned</div>
                                                        <div className=" d-flex flex-row align-items-end justify-content-center">
                                                            <div className="invested-amount fs-6">₹{res.net_profit}</div>
                                                        </div>
                                                    </div>
                                                    <div className="end-value">₹532,042</div>
                                                </div>
                                                <div className="progress">
                                                    <div className={res.status === "active" ? "progress-bar ongoing w-25 " : (res.status === "cancelled" ? "progress-bar cancelled w-25 " : "progress-bar ongoing w-100 ")} role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                            <div className="3-value d-flex flex-row justify-content-between align-items-center px-3">
                                                <div className="Investment d-flex flex-column justify-content-center">
                                                    <div className="investment-title">Investment</div>
                                                    <div className="invested-amount">₹{res.amount}</div>
                                                </div>
                                                <div className="Investment d-flex flex-column justify-content-center">
                                                    <div className="investment-title">ROI</div>
                                                    <div className="invested-amount d-flex flex-row justify-content-center align-items-end ">
                                                        <img src={upTriangle} alt="up-triangle" />
                                                        {res.percent}
                                                    </div>
                                                </div>
                                                <div className="Investment d-flex flex-column justify-content-center">
                                                    <div className="investment-title">Current Value</div>
                                                    <div className="invested-amount">₹{res.total_payout}</div>
                                                </div>
                                            </div>
                                            <div className="2-value  d-flex flex-row justify-content-around align-items-center p-3">
                                                <div className="Investment d-flex flex-column justify-content-center">
                                                    <div className="investment-title">Next Return</div>
                                                    <div className="invested-amount">05 Oct 2022</div>
                                                </div>
                                                <div className="Investment d-flex flex-column justify-content-center">
                                                    <div className="investment-title">Tenure</div>
                                                    <div className="invested-amount">12/36 months</div>
                                                </div>
                                            </div>
                                            <div className="card-footer-div d-flex justify-content-center py-2">
                                                <div className="card-footer-text">More details</div>
                                            </div>
                                        </div>
                                    ))}

                                </div>
                            </div>
                        </div>
                        {openPortfolioFilter && (
                            <>
                                <div className="mob-investment-filter-container text-white" >
                                    <div className="investment-filter-div p-3">
                                        <div className="i-f-heading d-flex flex-row justify-content-between align-items-center w-100 " >
                                            <div>Investment Filter</div>
                                            <div>
                                                <img src={cancel} onClick={() => { setOpenPortfolioFilter(!openPortfolioFilter); }} alt="cancle button" />
                                            </div>
                                        </div>
                                        <div className="filter-options-div d-flex flex-row">
                                            <div className=' mob-all-div d-flex flex-row align-items-center'>
                                                <div>
                                                    <img src={grid} alt="grid-img" className='grid-img' />
                                                    <label>All</label>
                                                </div>
                                                <input onClick={() => { setAll(!all); }} checked={all} className='checkbox-input' type="checkbox" required />
                                            </div>
                                            <div className='mob-all-div d-flex flex-row align-items-center'>
                                                <div>
                                                    <img src={completeImg} alt="grid-img" className='grid-img' />
                                                    <label>Completed</label>
                                                </div>
                                                <input onClick={() => { setcompleted(!completed); }} checked={completed} className='checkbox-input ' type="checkbox" required />
                                            </div>
                                            <div className='mob-all-div d-flex flex-row align-items-center'>
                                                <div>
                                                    <img src={ongoingImg} alt="grid-img" className='grid-img' />
                                                    <label>Ongoing</label>
                                                </div>
                                                <input onClick={() => { setongoing(!ongoing); }} checked={ongoing} className='checkbox-input ' type="checkbox" required />
                                            </div>
                                            <div className='mob-all-div d-flex flex-row align-items-center'>
                                                <div>
                                                    <img src={canclledImg} alt="grid-img" className='grid-img' />
                                                    <label>Cancelled</label>
                                                </div>
                                                <input onClick={() => { setcancelled(!cancelled); }} checked={cancelled} className='checkbox-input ' type="checkbox" required />
                                            </div>
                                        </div>
                                        <div className={all || completed || ongoing || cancelled ? 'proceed-filter w-100' : 'filter-button w-100'}>            <button>Apply Filter</button>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                        <div className="portfolio-navtab">
                            <NavTab />
                        </div> */}
                    </>
                )
                :
                (
                    <>
                        <div className="container-xxl">
                            <Navbar />
                            <div className='row mt-5'>
                                <div className='col-2'>
                                    <NavTab />
                                </div>
                                <div className='portfolio-container col'>
                                    <a href="/profile" >
                                        <div className='header' >
                                            <i className="fa-solid fa-chevron-left"></i>
                                            <span className='px-2'>Portfolio</span>
                                        </div>
                                    </a>
                                    <div className="investment-card-div">
                                        {/* card */}

                                        {investmentData?.map((res) => (
                                            <div className="investment-card text-white">
                                                <div className="card-header d-flex flex-row judtify-content-start align-items-center p-2">
                                                    <div className="tree-div p-2">
                                                        <img src={tree} alt="tree-img" />
                                                    </div>
                                                    <div className="plan-title d-flex flex-column justify-content-start align-items-start ">
                                                        <div className="title-text">{res.plan_name.slice(0, 13)}</div>
                                                        <div className={res.status === "active" ? "investment-status" : (res.status === "cancelled" ? "investment-status-cancelled" : "investment-status-complete")}>• {" "} {res.status}</div>
                                                    </div>
                                                </div>
                                                <div className="slide-bar">
                                                    <div className="d-flex flex-row justify-content-between align-items-end">
                                                        <div className="start-value" >0</div>
                                                        <div className="I-E d-flex flex-column">
                                                            <div className="investment-title">Interest Earned</div>
                                                            <div className=" d-flex flex-row align-items-center justify-content-center">
                                                                <img src={upTriangle} alt="up-triangle" />
                                                                <div className="invested-amount">₹{res.net_profit}</div>
                                                            </div>
                                                        </div>
                                                        <div className="end-value">₹532,042</div>
                                                    </div>
                                                    <div class="progress">
                                                        <div className={res.status === "active" ? "progress-bar ongoing w-25 " : (res.status === "cancelled" ? "progress-bar cancelled w-25 " : "progress-bar ongoing w-100 ")} role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                                <div className="3-value d-flex flex-row justify-content-between align-items-center px-3">
                                                    <div className="Investment d-flex flex-column justify-content-center">
                                                        <div className="investment-title">Investment</div>
                                                        <div className="invested-amount">₹{res.amount}</div>
                                                    </div>
                                                    <div className="Investment d-flex flex-column justify-content-center">
                                                        <div className="investment-title">ROI</div>
                                                        <div className="invested-amount">{res.percent}</div>
                                                    </div>
                                                    <div className="Investment d-flex flex-column justify-content-center">
                                                        <div className="investment-title">Current Value</div>
                                                        <div className="invested-amount">₹{res.total_payout}</div>
                                                    </div>
                                                </div>
                                                <div className="2-value  d-flex flex-row justify-content-around align-items-center p-3">
                                                    <div className="Investment d-flex flex-column justify-content-center">
                                                        <div className="investment-title">Next Return</div>
                                                        <div className="invested-amount">05 Oct 2022</div>
                                                    </div>
                                                    <div className="Investment d-flex flex-column justify-content-center">
                                                        <div className="investment-title">Tenure</div>
                                                        <div className="invested-amount">12/36 months</div>
                                                    </div>
                                                </div>
                                                <div className="card-footer-div d-flex justify-content-center py-2">
                                                    <div className="card-footer-text">More details</div>
                                                </div>
                                            </div>
                                        ))}

                                    </div>

                                </div>
                                {/* filter section */}
                                <div className="investment-filter-container col-4 text-white" >
                                    <div className="investment-filter-div">
                                        <div className="i-f-heading" >Investment Filter</div>

                                        <div className='all-div d-flex flex-row align-items-center'>
                                            <img src={grid} alt="grid-img" className='grid-img' />
                                            <label>All</label>
                                            <input onChange={() => { setFilter("all"); }} className='checkbox-input ' type="checkbox" required />
                                        </div>
                                        <div className='all-div d-flex flex-row align-items-center'>
                                            <img src={ongoingImg} alt="grid-img" className='grid-img' />
                                            <label>Ongoing</label>
                                            <input onChange={() => { setFilter("ongoing"); }}  className='checkbox-input ' type="checkbox" required />
                                        </div>
                                        <div className='all-div d-flex flex-row align-items-center'>
                                            <img src={completeImg} alt="grid-img" className='grid-img' />
                                            <label>Completed</label>
                                            <input onChange={() => { setFilter("completed"); }}  className='checkbox-input ' type="checkbox" required />
                                        </div>
                                        <div className='all-div d-flex flex-row align-items-center'>
                                            <img src={canclledImg} alt="grid-img" className='grid-img' />
                                            <label>Cancelled</label>
                                            <input onChange={() => { setFilter("cancelled"); }}  className='checkbox-input ' type="checkbox" required />
                                        </div>
                                        <div className={filter ? 'proceed-filter w-100' : 'filter-button w-100'}>
                                            <button>Apply Filter</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </>
                )
            }
        </>
    )
}
export default PortfolioPage;