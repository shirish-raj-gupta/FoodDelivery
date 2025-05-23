import React, { useState } from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'
import { Link } from 'react-router'

const Navbar = () => {

  const[menu, setMenu] = useState("home")


  return (
    <div className='navbar'>
      <img  src={assets.logo} alt="logo" className='logo'/>
      <ul className='navbar-menu'>
        <Link to='/' className={menu==="home" ? "active":""} onClick={()=>{setMenu("home")}}>Home</Link>
        <a href='#explore-menu' className={menu==="menu" ? "active":""} onClick={()=>{setMenu("menu")}}>Menu</a>
        <a href='#app-download' className={menu==="mobile-app" ? "active":""} onClick={()=>{setMenu("mobile-app")}}> Mobile App</a>
        <a href='#footer' className={menu==="contact-us" ? "active":""} onClick={()=>{setMenu("contact-us")}}>Contact Us</a>
      </ul>
      <div className='navbar-right'>
        <img src={assets.search_icon} alt="search" className='search'/>
        <div className='navbar-search-icon'>
          <img src={assets.basket_icon} alt="search" className='search'/>
          <div className='dot'></div>
        </div>
        <button>Sign In</button>
      </div>
    </div>
  )
}

export default Navbar