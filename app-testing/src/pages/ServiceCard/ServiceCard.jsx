import React from 'react'
import { Button, Card, Col, Row, } from 'react-bootstrap'
import { Autoplay, Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import locking from "../../assets/lock.svg"
import payoutIcon from "../../assets/payout.svg"
import timerglass from "../../assets/investment-duration.svg"
import tick from "../../assets/selected-card-tick.svg"

// import { locking, payoutIcon, timerglass } from '../assets/img/contactimg'
import { service } from '../../data/ServicePlanData'
import { useState } from 'react';
import { useMediaQuery } from "react-responsive";
import axios from 'axios'
// import { useEffect } from 'react';
import {fetchNewInvestmentData} from "../../services/new-investment/fetch-active-investment"
import { getLocalStorageKey } from "../../utils/local-storage";




const ServiceCard = () => {

    // const token = "eyJraWQiOiJcLzN1Mk01OEtjNVBsNStwMjB1TEpMcDRVY1BBUFF5RGxjRDFNUXpaTGJuST0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIxNzViZWVlMy1jMmU1LTQwNDQtOTA1NS0wNzliNmYwOTY3N2UiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbVwvYXAtc291dGgtMV9CTEtQMGhkUjciLCJjb2duaXRvOnVzZXJuYW1lIjoicGl5dXNoYW1lc2hyYW1AZ21haWwuY29tIiwib3JpZ2luX2p0aSI6ImJhYzE5YTU5LWE5ZjgtNGY0NC05YWNjLTVmOGNlZjdlODAzNiIsImF1ZCI6IjFrYnA4b2hzbmRpNW9wcnVpdHRoN3EyZDJ2IiwiZXZlbnRfaWQiOiJkZmQ0OTk2ZS1kZGYxLTQ4Y2ItYTNlMy1hZTMzOThiYWFmOTYiLCJ0b2tlbl91c2UiOiJpZCIsImF1dGhfdGltZSI6MTY3MjA1NTkxMCwibmFtZSI6ImR1bW15IGludmVzdG1lbnQiLCJleHAiOjE2NzIwNTk1MTAsImlhdCI6MTY3MjA1NTkxMCwianRpIjoiZmQzMmU2YzgtN2JmYS00NWI4LTgxYWItZjU2MTBmMjk1MDhjIiwiZW1haWwiOiJwaXl1c2hhbWVzaHJhbUBnbWFpbC5jb20ifQ.Rshx6GcRb2WAb90n51GZrxFkqwave-WL-ECHgtXVydX0l6kmJM_04tvFZzhWg0UEbTjEtqBHv9nDJ_6SHTO_92gp7F_IFRlqj79QYcEPpCP-f-jmI2o7i5HsmlHEB_KkWSBgpfQ1H-hKg_NO3pmITGG7VPsBNqrIFbbHj-gD87vvsHxXOoDLhNvWFQzQXCJM_fxRT0ihDuu-eX0hILl-KJEKNUJ_09DYD1rag1jdL41h7S2G1UBWde3lsj3X0M3jRMkHmntSsXXCsHho6d0ExXxRukNmisM2K_sYLu5n4kyncN9Nwq6RoI8S9kYWIHCU7NfJw6z2l97YgcbeflB9VQ";
    // console.log(token);

    const isMobile = useMediaQuery({
        query: "(max-width: 750px)",
    });
    const[selectedCard,setSelectedCard]=useState(false);

    // const  = async () => {
        
    //     const response = await axios.get("https://api-dev.growpital.com/api/v1/generate-virtual-account", {
    //         headers: {
    //           Authorization: ` Bearer ${token} `,
    //         },
    //       });
    //     console.log("Response",response);  
    //   };
      

    //   useEffect

    return (
        <>
        {isMobile ?(<>
            <Col md={12} className='Service-Card d-none d-xl-block '>
                <Row className="d-flex justify-content-center  align-items-center   ">
                    {service.map((item) => (

                        <Col lg={6} className="d-flex justify-content-center  align-items-center  mb-5 " key={item.id} data-aos="fade-up">
                            <Card
                                onClick={()=>{setSelectedCard(!selectedCard);}}

                                style={{ width: '25rem', backgroundColor: "#2a2d3c" }}
                                className="mb-2 bg-dark-gradient text-white px-0"
                            >
                                <Card.Header className='d-inline-flex align-items-center py-3 fw-bold fs-6 '>
                                    <p className=" plan-header colan-icon text-center d-inline-block mb-0 d-flex justify-content-center align-items-center me-4 ">
                                        <img src={item.img} alt="" className="img-fluid" style={{ width: "1rem" }} />
                                    </p>
                                    {item.title}
                                    {selectedCard && 
                                (<div>
                                    <img className='position-absolute top-0' src={tick} alt="selected" />
                                </div>)}
                                </Card.Header>
                                
                                <Card.Header className='d-flex align-items-center justify-content-between py-2'>
                                    <div>
                                        <Card.Title > <span className='text-color-green'>₹ {item.amout}</span><span className='fs-6'>/unit</span>  </Card.Title>
                                        <Card.Text className='fs-8 fw-semibold' >
                                            987 unit available
                                            {/* <OverlayTrigger
                                                    placement="right"
                                                    delay={{ show: 250, hide: 400 }}
                                                    overlay={<Tooltip id="tooltip-disabled">Tooltip!</Tooltip>} >
                                                    <img src={item.i_img} alt="" className='ms-1' style={{ width: "1rem" }} />
                                                </OverlayTrigger> */}
                                        </Card.Text>
                                    </div>
                                    <div>
                                        <Card.Title className='text-color-green'>{item.RoiValue}% </Card.Title>
                                        <Card.Text className='fs-8 fw-semibold'>
                                            ROI
                                        </Card.Text>
                                    </div>
                                </Card.Header>
                                <Card.Body className='text-center' >
                                    <div className='d-flex flex-row justify-content-between align-items-center'>
                                        <div>
                                        <Card.Text className='fs-12 '>
                                                <img src={timerglass} alt="" style={{ width: "1rem" }} className="mb-1" />{" "} Investment Duration
                                                
                                            </Card.Text>

                                        </div>
                                        <div  className='d-flex flex-row align-items-center justify-content-between'>
                                        <div className='px-3'>:</div>

                                        <Card.Text className='fs-12 '>
                                                36 Months
                                            </Card.Text>
                                        </div>
                                    </div>
                                    <div className='d-flex flex-row justify-content-between align-items-center'>
                                        <div >
                                        <Card.Text className='fs-12 '>
                                                <img src={locking} alt="locking" className="img-fluid mb-1" style={{ width: "1rem" }} />{" "}  Lockin period
                                                
                                            </Card.Text>

                                        </div>
                                        <div className='d-flex flex-row align-items-center justify-content-between'>
                                        <div className='px-3'>:</div>

                                        <Card.Text className='fs-12 '>
                                            12 Months
                                            </Card.Text>
                                        </div>
                                    </div>
                                    <div className='d-flex flex-row justify-content-between align-items-center'>
                                        <div>
                                        <Card.Text className='fs-12 '>
                                                <img src={payoutIcon} alt="locking" className="img-fluid mb-1" style={{ width: "1.2rem" }} />{" "}  Payout
                                                
                                            </Card.Text>
                                        </div>
                                        <div  className='d-flex flex-row align-items-center justify-content-between'>
                                        <div className='px-4'>:</div>

                                        <Card.Text className='fs-12 '>
                                        {item.payout}
                                            </Card.Text>
                                        </div>
                                    </div>
                                    
                                    <div className='py-1'>
                                        <a href="/">   <Button className=" main-btn-service maincolor bg-transparent w-100">Select Plan</Button> </a>
                                    </div>
                                    {/* <div className='py-2'>
                                        <a href="https://drive.google.com/file/d/1bUF3cdfk5gGHGSK7Jh35kQD9ZwrQMLTK/view" className="fs-16 fw-700 text-white text-center py-2">Know more</a>
                                    </div> */}
                                </Card.Body>
                            </Card>
                        </Col>


                    ))}
                </Row>

            </Col>
        </>) :(
            <>


            {/* check changes on both mode */}
            {/* desktop mode view */}
            <Col md={12} className='Service-Card d-none d-xl-block '>
                <Row className="d-flex justify-content-center  align-items-center   ">
                    {service.map((item) => (

                        <Col lg={6} className="d-flex justify-content-center  align-items-center  mb-5 " key={item.id} data-aos="fade-up">
                            <Card
                                onClick={()=>{setSelectedCard(!selectedCard);}}

                                style={{ width: '25rem', backgroundColor: "#2a2d3c" }}
                                className="mb-2 bg-dark-gradient text-white px-0"
                            >
                                <Card.Header className='d-inline-flex align-items-center py-3 fw-bold fs-6 '>
                                    <p onClick={()=>{fetchNewInvestmentData();}} className=" plan-header colan-icon text-center d-inline-block mb-0 d-flex justify-content-center align-items-center me-4 ">
                                        <img src={item.img} alt="" className="img-fluid" style={{ width: "1rem" }} />
                                    </p>
                                    {item.title}
                                    {selectedCard && 
                                (<div>
                                    <img className='position-absolute top-0' src={tick} alt="selected" />
                                </div>)}
                                </Card.Header>
                                
                                <Card.Header className='d-flex align-items-center justify-content-between py-2'>
                                    <div>
                                        <Card.Title > <span className='text-color-green'>₹ {item.amout}</span><span className='fs-6'>/unit</span>  </Card.Title>
                                        <Card.Text className='fs-8 fw-semibold' >
                                            987 unit available
                                            {/* <OverlayTrigger
                                                    placement="right"
                                                    delay={{ show: 250, hide: 400 }}
                                                    overlay={<Tooltip id="tooltip-disabled">Tooltip!</Tooltip>} >
                                                    <img src={item.i_img} alt="" className='ms-1' style={{ width: "1rem" }} />
                                                </OverlayTrigger> */}
                                        </Card.Text>
                                    </div>
                                    <div>
                                        <Card.Title className='text-color-green'>{item.RoiValue}% </Card.Title>
                                        <Card.Text className='fs-8 fw-semibold'>
                                            ROI
                                        </Card.Text>
                                    </div>
                                </Card.Header>
                                <Card.Body className='text-center' >
                                    <div className='d-flex flex-row justify-content-between align-items-center'>
                                        <div>
                                        <Card.Text className='fs-12 '>
                                                <img src={timerglass} alt="" style={{ width: "1rem" }} className="mb-1" />{" "} Investment Duration
                                                
                                            </Card.Text>

                                        </div>
                                        <div  className='d-flex flex-row align-items-center justify-content-between'>
                                        <div className='px-3'>:</div>

                                        <Card.Text className='fs-12 '>
                                                36 Months
                                            </Card.Text>
                                        </div>
                                    </div>
                                    <div className='d-flex flex-row justify-content-between align-items-center'>
                                        <div >
                                        <Card.Text className='fs-12 '>
                                                <img src={locking} alt="locking" className="img-fluid mb-1" style={{ width: "1rem" }} />{" "}  Lockin period
                                                
                                            </Card.Text>

                                        </div>
                                        <div className='d-flex flex-row align-items-center justify-content-between'>
                                        <div className='px-3'>:</div>

                                        <Card.Text className='fs-12 '>
                                            12 Months
                                            </Card.Text>
                                        </div>
                                    </div>
                                    <div className='d-flex flex-row justify-content-between align-items-center'>
                                        <div>
                                        <Card.Text className='fs-12 '>
                                                <img src={payoutIcon} alt="locking" className="img-fluid mb-1" style={{ width: "1.2rem" }} />{" "}  Payout
                                                
                                            </Card.Text>
                                        </div>
                                        <div  className='d-flex flex-row align-items-center justify-content-between'>
                                        <div className='px-4'>:</div>

                                        <Card.Text className='fs-12 '>
                                        {item.payout}
                                            </Card.Text>
                                        </div>
                                    </div>
                                    
                                    <div className='py-1'>
                                        <a href="/">   <Button className=" main-btn-service maincolor bg-transparent w-100">Select Plan</Button> </a>
                                    </div>
                                    {/* <div className='py-2'>
                                        <a href="https://drive.google.com/file/d/1bUF3cdfk5gGHGSK7Jh35kQD9ZwrQMLTK/view" className="fs-16 fw-700 text-white text-center py-2">Know more</a>
                                    </div> */}
                                </Card.Body>
                            </Card>
                        </Col>


                    ))}
                </Row>

            </Col>

            {/* check changes on both mode */}
            {/* mobile view swiper */}
            <Swiper
                slidesPerView={4}
                spaceBetween={10}
                grabCursor={true}
                loop={true}
                effect={"fade"}
                pagination={true}
                autoplay={
                    {
                        delay: 1000,
                        disableOnInteraction: true,
                    }
                }
                navigation={
                    true
                }


                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 50,

                    },
                    500: {
                        slidesPerView: 1,
                        spaceBetween: 20,

                    },
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 20,

                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 10,

                    },
                    1200: {
                        slidesPerView: 3,
                        spaceBetween: 10,

                    },
                }}
                modules={[Navigation, Pagination, Autoplay]}
                className="d-xl-none Service-Card"

            >
                <Col md={12} className=''>
                    <Row className="d-flex justify-content-center  align-items-center   ">
                        {service.map((item) => (
                            <SwiperSlide key={item.id} className="mb-5">
                                <Col md={12} className="d-flex justify-content-center  align-items-center   "  >
                                    <Card


                                        style={{ width: '20rem' }}
                                        className="mb-2 bg-dark-gradient text-white px-3"
                                    >
                                        <Card.Header className='d-inline-flex align-items-center py-3 fw-bold fs-5'>
                                            <p className="colan-icon text-center d-inline-block mb-0 d-flex justify-content-center align-items-center me-4 p-2">
                                                <img src={item.img} alt="" className="img-fluid" />
                                            </p>
                                            {item.title}
                                        </Card.Header>
                                        <Card.Header className='d-flex align-items-center justify-content-between py-3'>
                                            <div>
                                                <Card.Title className='text-main-green'>₹ {item.amout}/unit </Card.Title>
                                                <Card.Text>
                                                    Investment
                                                    {/* <img src={item.i_img} alt="" style={{ width: "1rem" }} className='ms-1' /> */}
                                                </Card.Text>
                                            </div>
                                            <div>
                                                <Card.Title className='text-main-green'>{item.RoiValue}% </Card.Title>
                                                <Card.Text>
                                                    ROI
                                                </Card.Text>
                                            </div>
                                        </Card.Header>
                                        <Card.Body className='text-center' >
                                            <div className='d-flex align-items-center justify-content-between mb-3 text-start'>
                                                <div>
                                                    <Card.Text className=''>
                                                        <img src={timerglass} alt="" style={{ width: "1rem" }} />{" "}   Tenure
                                                        {/* <img src={item.i_img} alt="" className='ms-1' style={{ width: "1rem" }} /> */}
                                                    </Card.Text>
                                                    <Card.Text className=''>
                                                        <img src={locking} alt="locking" className="img-fluid " style={{ width: "1rem" }} />{" "}  Lockingit period
                                                        {/* <img src={item.i_img} alt="" className='img-fluid ' style={{ width: "1rem" }} /> */}
                                                    </Card.Text>
                                                    <Card.Text>
                                                        <img src={payoutIcon} alt="locking" className="img-fluid " style={{ width: "1.2rem" }} />{" "}  Payout
                                                        {/* <img src={item.i_img} alt="" style={{ width: "1rem" }} className='ms-1' /> */}
                                                    </Card.Text>
                                                </div>
                                                <div>
                                                    <Card.Text>
                                                        :
                                                    </Card.Text>
                                                    <Card.Text>
                                                        :
                                                    </Card.Text>
                                                    <Card.Text>
                                                        :
                                                    </Card.Text>
                                                </div>
                                                <div>
                                                    <Card.Text>
                                                        36 Months
                                                    </Card.Text>
                                                    <Card.Text>
                                                        12 Months
                                                    </Card.Text>
                                                    <Card.Text>
                                                        {item.payout}
                                                    </Card.Text>
                                                </div>
                                            </div>
                                            <div className='py-1'>
                                                <Button className=" main-btn-service maincolor bg-transparent w-100 ">Select Plan</Button>
                                            </div>
                                            {/* <div className='py-2'>
                                                <a href="https://drive.google.com/file/d/1bUF3cdfk5gGHGSK7Jh35kQD9ZwrQMLTK/view" className="fs-16 fw-700 text-white text-center py-2">Know more</a>
                                            </div> */}
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </SwiperSlide>

                        ))}
                    </Row>

                </Col>
            </Swiper>
        </>
        )}

        
        </>
    )
}

export default ServiceCard;