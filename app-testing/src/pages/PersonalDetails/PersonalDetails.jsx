import React from 'react'
// import "../pages/ProfilePageStyle.style.css"
import "./PersonalDetailsStyle.style.css"
import userImg from "../../assets/userImg.jpg"
import userIcon from "../../assets/bx_bxs-user.svg"
import NavTabs from '../../components/NavTab/NavTab'
import { useMediaQuery } from "react-responsive";
import Navbar from '../../components/Navbar/Navbar'
import attherate from "../../assets/attherate.svg"
import calender from "../../assets/healthicons_i-schedule-school-date-time-outline.svg"
import mobile from "../../assets/contact-mobile-svgrepo-com.svg"


const PersonalDetails = () => {
    const isMobile = useMediaQuery({ 
        query: "(max-width: 800px)",
      });
  return (
    <>
    {isMobile? (
        <div>
        <div className='personal-details-container'>
        <a href="/profile" >
        <div className='header' > 
            <i className="fa-solid fa-chevron-left"></i>  
            My Profile
        </div>
        </a>
        <div>
            <img className='personal-user-img' src={userImg} alt="userImg" />
        </div>
        <div className='input-name-container'>
            <div className='input-title'>Name</div>
            <div className='userImgDiv'>
                <img src={userIcon} alt="userImg"/>
            </div>
            <div className='profile-input-div'>
                <input placeholder='Enter name' type="name" readOnly={true} />
            </div>
        </div>
        <div className='input-name-container'>
            <div className='input-title'>D.O.B</div>
            <div className='userImgDiv'>
                <img className='calenderIcon' src={calender} alt="userImg"/>
            </div>
            <div className='profile-input-div'>
                <input placeholder='Enter name' type="name" readOnly={true} />
            </div>
        </div>
        <div className='input-name-container'>
            <div className='input-title'>Mobile</div>
            <div className='userImgDiv'>
                <img className='calenderIcon' src={mobile} alt="userImg"/>
            </div>
            <div className='profile-input-div'>
                <input placeholder='Enter name' type="name" readOnly={true} />
            </div>
        </div>
        <div className='input-name-container'>
            <div className='input-title'>Email</div>
            <div className='userImgDiv'>
                <img src={attherate} alt="userImg"/>
            </div>
            <div className='profile-input-div'>
                <input placeholder='Enter name' type="name" readOnly={true} />
            </div>
        </div>
        <div className='title' >
            Gender
        </div>
        <div className='radio-div'>
        <input type="radio" id="html" name="fav_language" value="HTML"/>
        <label for="html">Male</label>
        <input type="radio" id="html" name="fav_language" value="HTML"/>
        <label for="html">Female</label>
        <input type="radio" id="html" name="fav_language" value="HTML"/>
        <label for="html">Other</label>
        </div>
        <div className='title' >
            Marital status
        </div>
        <div className='radio-div'>
        <input type="radio" id="status" name="fav_language" value="HTML"/>
        <label for="html">Single</label>
        <input type="radio" id="status" name="fav_language" value="HTML"/>
        <label for="html">Married</label>
        </div>

         <div className='d-flex justify-content-center'>  
        <div className='change-details'>Chnage Profile Details</div>
        </div>
        
    </div>
    <div className='mob-navtab'>
    <NavTabs/>
    </div>
    </div>
    ):(
        <div className='container-xxl'>
            <Navbar/>
        <div className='row mt-5'>
            <div className='col-2'>  
            <NavTabs/>
            </div>  
        <div className='desktop-container col-7'>
            
        <a href="/profile" >
        <div className='header' > 
            <i className="fa-solid fa-chevron-left"></i>  
            <span className='px-2'>My Profile</span>
        </div>
        </a>
        <div>
            <img className='desk-personal-user-img' src={userImg} alt="userImg" />
        </div>
        <div className=' d-flex flex-row justify-content-between px-3 mb-5' >
        <div className=' desk-input-name-container'>
            <div className='input-title'>Name</div>
            <div className='userImgDiv'>
                <img src={userIcon} alt="userImg"/>
            </div>
            <div className='profile-input-div'>
                <input placeholder='Enter name' type="name" readOnly={true} />
            </div>
        </div>
        <div className=' desk-input-name-container'>
            <div className='input-title'>D.O.B</div>
            <div className='userImgDiv'>
                <img className='calenderIcon' src={calender} alt="userImg"/>
            </div>
            <div className='profile-input-div'>
                <input placeholder='Enter name' type="name" readOnly={true} />
            </div>
        </div>
        </div>
        <div className='d-flex flex-row justify-content-between px-3' >

        <div className='   desk-input-name-container'>
            <div className='input-title'>Mobile</div>
            <div className='userImgDiv'>
                <img className='calenderIcon' src={mobile} alt="userImg"/>
            </div>
            <div className='profile-input-div'>
                <input placeholder='Enter name' type="name" readOnly={true} />
            </div>
        </div>
        <div className=' desk-input-name-container'>
            <div className='input-title'>Email</div>
            <div className='userImgDiv'>
                <img src={attherate} alt="userImg"/>
            </div>
            <div className='profile-input-div'>
                <input placeholder='Enter name' type="name" readOnly={true} />
            </div>
        </div>
        </div>
        <div className='d-flex flex-row justify-content-between px-3 text-white' >
        <div>
        <div className='title' >
            Gender
        </div>
        <div className='radio-div'>
        <input type="radio" id="html" name="fav_language" value="HTML"/>
        <label htmlFor="html">Male</label>
        <input type="radio" id="html" name="fav_language" value="HTML"/>
        <label htmlFor="html">Female</label>
        <input type="radio" id="html" name="fav_language" value="HTML"/>
        <label htmlFor="html">Other</label>
        </div>
        </div>
        <div className='status-div' >
        <div className='title' >
            Marital status
        </div>
        <div className='radio-div'>
        <input type="radio" id="status" name="fav_language" value="HTML"/>
        <label htmlFor="html">Single</label>
        <input type="radio" id="status" name="fav_language" value="HTML"/>
        <label htmlFor="html">Married</label>
        </div>
        </div>
        </div>
         <div className='d-flex justify-content-center'> 
        <div className='desk-change-details my-5 '>Chnage Profile Details</div>
        </div>
       
    </div>
    </div>
    </div>
    )}
    
</>
  )
}

export default PersonalDetails