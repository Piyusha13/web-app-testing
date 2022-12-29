import React from 'react'
import "./Navbar.style.css"
import notification from "../../assets/notification.svg"
import user from "../../assets/user.svg"
import { useMediaQuery } from "react-responsive";
import { useState } from 'react';
import menuImg from "../../assets/Menu.svg";

const Navbar = () => {

  const[menu,setMenu]=useState(false);
  const isMobile = useMediaQuery({
    query: "(max-width: 750px)",
  });

  return (
    <>
    {isMobile?(
      <>
      <div className='row  m-0 w-100 text-white mob-navbar-container justify-content-between align-items-center'>
      <div className='col mob-menu-img '  onClick={()=>{setMenu(!menu);}}>
          <img src={menuImg} alt="menu-img" />
          {menu?(<>
          <div className='mob-menu col fs-6 fw-bold bg-dark w-75'>
            {/* <div className='col bg-primary'> */}
            <div className='row'>Home</div>
            <div className='row'>About</div>
            <div className='row'>Service</div>
            <div className='row'>Contact Us</div>
            {/* </div> */}
        </div>
        </>):
        (<></>)}
        </div>
        
        <div className='col mob-logo '>Growpital</div>
        
        <div className='col  d-flex flex-row justify-content-end mob-notifiaction-uesr-div'>
            <div className='row '>    
                <img className="col" src={notification} alt="notification"/>
                <img src={user} className="col" alt="user"/>
            </div>
        </div>
        
    </div>
      </>
    ):(
      <div className='row p-0 m-0 w-100 text-white navbar-container justify-content-start align-items-center'>
        
      <div className='col-2 logo '>Growpital</div>
      <div className='col-5 fs-5 fw-bold'>
          <div className='row'>
          <div className='col'>Home</div>
          <div className='col'>About</div>
          <div className='col'>Service</div>
          <div className='col'>Contact Us</div>
          </div>
      </div>
      <div className='col  d-flex flex-row justify-content-end notifiaction-uesr-div'>
          <div className='row px-2'>    
              <img className="col" src={notification} alt="notification"/>
              <img src={user} className="col" alt="user"/>
          </div>
      </div>
      
  </div>
    )}
    </>
    
  )
}

export default Navbar