import React from 'react'
import "./NavTab.style.css"
import menu from "../../assets/Menu.svg"
import home from "../../assets/Group.svg"
import portfolio from "../../assets/portfolio.svg"
import invest from "../../assets/invest.svg"
import userWallet from "../../assets/userWallet.svg"
import user from "../../assets/bx_bxs-user.svg"





const NavTab = () => {
  return (
    <div className=''>
        <div className='navtab-container d-flex text-white'>
            <div className=' align-items-center menu-div'>
                <img src={menu} alt="menu img"/>
                <div>Menu</div>
            </div>
            <div className='d-flex  navtab-options'>
                <img src={home} alt="menu img"/>
                <div>Home</div>
            </div>
            <a href="/portfolio">
            <div className='d-flex  navtab-options'>
                <img src={portfolio} alt="menu img"/>
                <div>Portfolio</div>
            </div>
            </a>
            <a href='/investment'>
            <div className='d-flex  navtab-options'>
                <img src={invest} alt="menu img"/>
                <div>Invest</div>
            </div>
            </a>
            <a href="/wallet">
            <div className='d-flex  navtab-options'>
                <img src={userWallet} className="navtab-wallet-img" alt="menu img"/>
                <div>Wallet</div>
            </div>
            </a>
            <a href='/profile'>
            <div className='d-flex  navtab-options'>
                <img className='navtab-user-img' src={user} alt="menu img"/>
                <div>Profile</div>
            </div>
            </a>
        </div>
    </div>
  )
}

export default NavTab