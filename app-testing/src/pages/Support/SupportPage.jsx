import React from 'react'
import userImg from "../../assets/userImg.jpg"
import whatsappIcon from "../../assets/wp.svg"
import "./SupportPage.style.css"
import calender from "../../assets/healthicons_i-schedule-school-date-time-outline.svg"
import clock from "../../assets/email-alt-svgrepo-com.svg"
import attherate from "../../assets/attherate.svg"
// import NavTabs from './NavTabs'
import { useMediaQuery } from "react-responsive";
import Navbar from '../../components/Navbar/Navbar'
import NavTab from '../../components/NavTab/NavTab'


const SupportPage = () => {
    const isMobile = useMediaQuery({
        query: "(max-width: 800px)",
      });
  return (
    <>
    { isMobile?(
        <div className='mob-support-page'>
    <div className='supportContainer p-3 pb-2'>
        <a href="/profile" >
        <div className='header' > 
            <i class="fa-solid fa-chevron-left"></i>  
            Support
        </div>
        </a>
        <div>
            <img className='mob-user-img pb-0 mb-2' src={userImg} alt="userImg" />
            <h6 className='text-white mb-0'  >Hemant Kant Malviya</h6>
            <h6 className='text-white fw-normal mb-4 mob-font-size-small '  >Account manager</h6>
            <h6 className='text-white fw-normal mb-0 mob-font-size-small '  >You spoke with</h6>
            <h6 className='text-white fw-normal  mob-font-size-small mb-3 '  >the genuine Growpital advisor</h6>            
        </div>
        <div className='rounded p-1  m-1  boxborder text-white'>
                <div className='bg-gray rounded d-flex flex-wrap p-1 gap-3 py-4'>
                    <div className='d-flex  flex-row justify-content-flex-start align-items-center w-50'>
                        <div className='p-1'>
                            <img src={whatsappIcon} alt="whatsappIcon" />
                        </div>
                        <div className='d-flex flex-column align-items-start '>
                            <div className='mob-support-info-heading'>
                                Whatsapp Number
                            </div>
                            <div className='mob-support-info-subheading'>
                                +91-9876543297
                            </div>
                        </div>
                    </div>
                    <div className='d-flex  flex-row justify-content-flex-start align-items-center  '>
                    <div className='p-1'>
                            <img className='calenderImg' src={calender} alt="whatsappIcon" />
                        </div>
                        <div className='d-flex flex-column align-items-start'>
                            <div className='mob-support-info-heading'>
                                Day
                            </div>
                            <div className='mob-support-info-subheading'>
                                Monday-Saturday
                            </div>
                        </div>
                    </div>
                    <div className='d-flex  flex-row justify-content-flex-start align-items-center w-50 '>
                    <div className='p-1'>
                            <img src={attherate} alt="whatsappIcon" />
                        </div>
                        <div className='d-flex flex-column align-items-start'>
                            <div className='mob-support-info-heading'>
                                Emial ID
                            </div>
                            <div className='mob-support-info-subheading'>
                                hemantkantmalviya@gmail.com
                            </div>
                        </div>
                    </div>
                    <div className='d-flex  flex-row justify-content-flex-start align-items-center '>
                    <div className='p-1'>
                            <img src={clock} alt="whatsappIcon" />
                        </div>
                        <div className='d-flex flex-column align-items-start'>
                            <div className='mob-support-info-heading'>
                                Time
                            </div>
                            <div className='mob-support-info-subheading'>
                                9 AM-8 PM
                            </div>
                        </div>
                    </div>
                    <div className='d-flex flex-row px-2 w-100 justify-content-between mob-buttons'>
                        <button className='text-black  py-2  bg-warning button-1' >Request Callback</button>
                        <button className='text-muted  py-2  mob-button-2'>Email</button>
                    </div>
                </div>
        </div>
        
        <div className='d-flex flex-column text-white boxborder p-0 m-1 mt-3 mb-1'>
                    <div className='fw-bold  fw-2 text-start p-2'>Useful link</div>
                    <a href='https://www.growpital.com/faqs'>
                    <div className='d-flex flex-row p-2 justify-content-between useful-link-options'>
                        <div>FAQs</div>
                        <div>  
                          <i class="fa-solid fa-chevron-right color-yellow px-3"></i>
                        </div>
                    </div>
                    </a>
                    <a href='https://www.growpital.com/contact'>
                    <div className='d-flex flex-row p-2 justify-content-between useful-link-options'>
                        <div>Contact Us</div>
                        <div>  
                          <i class="fa-solid fa-chevron-right color-yellow px-3"></i>
                        </div>
                    </div>
                    </a>
                    <a href='https://www.growpital.com/terms'>
                    <div className='d-flex flex-row p-2 justify-content-between useful-link-options'>
                        <div>Terms and Conditions</div>
                        <div>  
                          <i class="fa-solid fa-chevron-right color-yellow px-3"></i>
                        </div>
                    </div>
                    </a>
                    <a href='https://www.growpital.com/privacy-policy'>
                    <div className='d-flex flex-row p-2 justify-content-between border-0 useful-link-options'>
                        <div>Privacy Policy</div>
                        <div>  
                          <i class="fa-solid fa-chevron-right color-yellow px-3"></i>
                        </div>
                    </div>
                    </a>
                    

        </div>
        

    </div>
    <div className='support-navtab'>
    <NavTab/>
    </div>
    </div>
    ):(
        <div className='container-xxl'>
            <Navbar/>
            <div className='pt-5'>
            <div className='row justify-content-between desktop-main-div'>
                <div className='col-2'>
                    <NavTab/>
            </div>
        <div className='col desktop-mid-div'>
                <a href="/profile" >
        <div className='header px-0' > 
            <i class="fa-solid fa-chevron-left "></i>  
            <span className='px-3'>Support</span>
        </div>
        </a>
        <div className='row my-4 justify-content-between mx-0 align-items-center'>
            <div className='col  p-0 m-0 text-white details-div '>
            <h6 className=' mb-0 '  >Hemant Kant Malviya</h6>
            <h6 className='  mb-4 mt-1 font-size-small '  >Account manager</h6>
            <h6 className='  mb-1 font-size-small '  >You spoke with</h6>
            <h6 className='  font-size-small mb-0 '  >the genuine Growpital advisor</h6>            
            </div>
            <div className='col d-flex align-items-end justify-content-end'>
            <img className='support-user-img pb-0' src={userImg} alt="userImg" />
            </div>
        </div>
        <div className=' p-1  m-1  boxborder text-white'>
                <div className='bg-gray boxborder d-flex flex-wrap p-2 gap-3 py-4'>
                    <div className='d-flex  flex-row justify-content-flex-start align-items-center w-50'>
                        <div className='p-1'>
                            <img className='icons' src={whatsappIcon} alt="whatsappIcon" />
                        </div>
                        <div className='d-flex flex-column align-items-start '>
                            <div className='support-info-heading'>
                                Whatsapp Number
                            </div>
                            <div className='support-info-subheading'>
                                +91-9876543297
                            </div>
                        </div>
                    </div>
                    <div className='d-flex  flex-row justify-content-flex-start align-items-center  '>
                    <div className='p-1'>
                            <img className='icons' src={calender} alt="whatsappIcon" />
                        </div>
                        <div className='d-flex flex-column align-items-start'>
                            <div className='support-info-heading'>
                                Day
                            </div>
                            <div className='support-info-subheading'>
                                Monday-Saturday
                            </div>
                        </div>
                    </div>
                    <div className='d-flex  flex-row justify-content-flex-start align-items-center w-50 '>
                    <div className='p-1'>
                            <img className='icons' src={attherate} alt="whatsappIcon" />
                        </div>
                        <div className='d-flex flex-column align-items-start'>
                            <div className='support-info-heading'>
                                Emial ID
                            </div>
                            <div className='support-info-subheading'>
                                hemantkantmalviya@gmail.com
                            </div>
                        </div>
                    </div>
                    <div className='d-flex  flex-row justify-content-flex-start align-items-center '>
                    <div className='p-1'>
                            <img className='icons' src={clock} alt="whatsappIcon" />
                        </div>
                        <div className='d-flex flex-column align-items-start'>
                            <div className='support-info-heading'>
                                Time
                            </div>
                            <div className='support-info-subheading'>
                                9 AM-8 PM
                            </div>
                        </div>
                    </div>
                    <div className='d-flex flex-row px-2 w-100 mt-4 mb-3 justify-content-between'>
                        <button className='text-black  py-2  bg-warning button-1' >Request Callback</button>
                        <button className='text-muted  py-2  button-2'>
                        <a  href="mailto:info@growpital.com">Email</a>
                        </button>
                    </div>
                </div>
        </div>
                </div>
                <div className='col-3 p-0 m-0'>
                <div className='d-flex flex-column text-white boxborder p-0 m-1 mt-3 mb-5'>
                    <div className='fw-bold  fw-2 text-start p-2'>Useful link</div>
                    <a href='https://www.growpital.com/faqs'>
                    <div className='d-flex flex-row p-2 justify-content-between useful-link-options'>
                        <div>FAQs</div>
                        <div>  
                          <i class="fa-solid fa-chevron-right color-yellow px-3"></i>
                        </div>
                    </div>
                    </a>
                    <a href='https://www.growpital.com/contact'>
                    <div className='d-flex flex-row p-2 justify-content-between useful-link-options'>
                        <div>Contact Us</div>
                        <div>  
                          <i class="fa-solid fa-chevron-right color-yellow px-3"></i>
                        </div>
                    </div>
                    </a>
                    
                    <a href='https://www.growpital.com/terms'>
                    <div className='d-flex flex-row p-2 justify-content-between useful-link-options'>
                        <div>Terms and Conditions</div>
                        <div>  
                          <i class="fa-solid fa-chevron-right color-yellow px-3"></i>
                        </div>
                    </div>
                    </a>
                    <a href='https://www.growpital.com/privacy-policy'>
                    <div className='d-flex flex-row p-2 justify-content-between border-0 useful-link-options'>
                        <div>Privacy Policy</div>
                        <div>  
                          <i class="fa-solid fa-chevron-right color-yellow px-3"></i>
                        </div>
                    </div>
                    </a>
                    

        </div>
                </div>
            </div>
            </div>
        </div>
    )
    }
    </>
  )
}

export default SupportPage