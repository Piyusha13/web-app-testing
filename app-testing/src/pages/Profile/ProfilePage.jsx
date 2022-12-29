import React from 'react'
import NavTabs from '../../components/NavTab/NavTab'
import "./ProfilePageStyle.style.css"
import userImg from "../../assets/userImg.jpg"
import shareIcon from "../../assets/ri_logout-box-r-fill3.svg"
import logoutIcon from "../../assets/ri_logout-box-r-fill.svg"
import userIcon from "../../assets/bx_bxs-user.svg"
import supportIcon from "../../assets/bx_bx-support.svg"
import icardIcon from "../../assets/bx_bx-id-card.svg"
import bankIcon from "../../assets/ant-design_bank-filled.svg"
import { useMediaQuery } from "react-responsive";
import Navbar from '../../components/Navbar/Navbar'
import NavTab from '../../components/NavTab/NavTab'
import { signout } from '../../services/login/signout'



const ProfilePage = () => {
    const isMobile = useMediaQuery({
        query: "(max-width: 750px)",
      });
      
  return (
    <div >
    {isMobile? (
    <div className=' profile-page'>
        <div className=' text-white profile-container'>
            <div className='header' > 
                <i class="fa-solid fa-chevron-left"></i>  
                My Profile
            </div>  
            <div className='user-name-img'>
                <p className='user-name' > Hemant Kant Malviya</p>
                <img className='user-profile-img' src={userImg} alt="userImg"/>
            </div>
            <div className='profile-pages-options'>
            <a href="/personalDetails">   
            <div className='personal-details-div'>
            <div className='logo-option'>        
                <img src={userIcon} alt="userIocn" />
                <p className='option-title'>Personal Details</p>
            </div>
            <i class="fa-solid fa-chevron-right color-yellow"></i>
            </div>
            </a>
            <a href="/bankDetails">   
            <div className='personal-details-div'>
            <div className='logo-option'>        
            <img src={bankIcon} alt="userIocn" />
                <p className='option-title'>Bank Details</p>
            </div>
            <i class="fa-solid fa-chevron-right color-yellow"></i>
            </div>
            </a>
            <a href="/kycDetails">
            <div className='personal-details-div'>
            <div className='logo-option'>        
            <img src={icardIcon} alt="userIocn" />
                <p className='option-title'>KYC Details</p>
            </div>
            <i class="fa-solid fa-chevron-right color-yellow"></i>
            </div>
            </a>
            <a href="/nomineeDetails">
            <div className='personal-details-div'>
            <div className='logo-option'>        
            <img src={icardIcon} alt="userIocn" />
                <p className='option-title'>Nominee details</p>
            </div>
            <i class="fa-solid fa-chevron-right color-yellow"></i>
            </div>
            </a>
            <a href="/support">
            <div className='personal-details-div support'>
            <div className='logo-option'>        
            <img src={supportIcon} alt="userIocn" />
                <p className='option-title'>Support</p>
            </div>
            <i class="fa-solid fa-chevron-right color-yellow"></i>
            </div>
            </a>
            <a href="/share">
            <div className='personal-details-div'>
            <div className='logo-option'>        
            <img src={shareIcon} alt="userIocn" />
                <p className='option-title'>Share link</p>
            </div>
            {/* <i class="fa-solid fa-chevron-right"></i> */}
            </div>
            </a>
            <a href="/login">
            <div className='personal-details-div'>
            <div className='logo-option'>        
            <img src={logoutIcon} alt="userIocn" />
                <p onClick={()=>{signout();}} className='option-title'>Logout</p>
            </div>
            {/* <i class="fa-solid fa-chevron-right"></i> */}
            </div>
            </a>
            </div>
        </div>
        <NavTab/>
    </div>
    ):(
        <div className='container-xxl '>
            <Navbar/>
            <div className='d-flex flex-row  justify-content-start  mt-5'>
                <div className='navtab' ><NavTabs/></div>
                <div className=' text-white desk-profile-container m-0 py-0 px-4 col-4'>
            <div className='header' > 
                <i class="fa-solid fa-chevron-left"></i>  
                My Profile
            </div>  
            {/* <div className='user-name-img'>
                <p className='user-name' > Hemant Kant Malviya</p>
                <img className='user-profile-img' src={userImg} alt="userImg"/>
            </div> */}
            <div className='profile-pages-options my-3'>
            <a href="/personalDetails">   
            <div className='personal-details-div'>
            <div className='desk-logo-option'>        
                <img src={userIcon} alt="userIocn" />
                <p className='option-title'>Personal Details</p>
            </div>
            <i class="fa-solid fa-chevron-right color-yellow"></i>
            </div>
            </a>
            <a href="/bankDetails">   
            <div className='personal-details-div'>
            <div className='desk-logo-option'>        
            <img src={bankIcon} alt="userIocn" />
                <p className='option-title'>Bank Details</p>
            </div>
            <i class="fa-solid fa-chevron-right color-yellow"></i>
            </div>
            </a>
            <a href="/kycDetails">
            <div className='personal-details-div'>
            <div className='desk-logo-option'>        
            <img src={icardIcon} alt="userIocn" />
                <p className='option-title'>KYC Details</p>
            </div>
            <i class="fa-solid fa-chevron-right color-yellow"></i>
            </div>
            </a>
            <a href="/nomineeDetails">
            <div className='personal-details-div'>
            <div className='desk-logo-option'>        
            <img src={icardIcon} alt="userIocn" />
                <p className='option-title'>Nominee Details</p>
            </div>
            <i class="fa-solid fa-chevron-right color-yellow"></i>
            </div>
            </a>
            <a href="/support">
            <div className='personal-details-div support'>
            <div className='desk-logo-option'>        
            <img src={supportIcon} alt="userIocn" />
                <p className='option-title '>Support</p>
            </div>
            <i class="fa-solid fa-chevron-right color-yellow"></i>
            </div>
            </a>
            <a href="/share">
            <div className='personal-details-div'>
            <div className='desk-logo-option'>        
            <img src={shareIcon} alt="userIocn" />
                <p className='option-title'>Share link</p>
            </div>
            {/* <i class="fa-solid fa-chevron-right"></i> */}
            </div>
            </a>
            <a href="/login">

            <div className='personal-details-div'>
            <div onClick={()=>{signout();}} className='desk-logo-option'>        
            <img src={logoutIcon} alt="userIocn" />
                <p className='option-title'>Logout</p>
            </div>
            {/* <i class="fa-solid fa-chevron-right"></i> */}
            </div>
            </a>
            </div>
        </div>
            </div>
        
    </div>
    )}
    </div>
  )
}

export default ProfilePage