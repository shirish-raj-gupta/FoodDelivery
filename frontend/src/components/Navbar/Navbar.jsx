import React, { use, useContext, useState } from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'
import { Link, useNavigate } from 'react-router'
import { StoreContext } from '../../context/StoreContext'

const Navbar = ({setShowLogin}) => {

  const[menu, setMenu] = useState("home")

  const{getTotalCartAmount , token, setToken}= useContext(StoreContext);
  const navigate = useNavigate();

  const logout = ()=>{
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  }


  return (
    <div className='navbar'>
      <Link to='/'><img  src={assets.logo} alt="logo" className='logo'/></Link>
      <ul className='navbar-menu'>
        <Link to='/' className={menu==="home" ? "active":""} onClick={()=>{setMenu("home")}}>Home</Link>
        <a href='#explore-menu' className={menu==="menu" ? "active":""} onClick={()=>{setMenu("menu")}}>Menu</a>
        <a href='#app-download' className={menu==="mobile-app" ? "active":""} onClick={()=>{setMenu("mobile-app")}}> Mobile App</a>
        <a href='#footer' className={menu==="contact-us" ? "active":""} onClick={()=>{setMenu("contact-us")}}>Contact Us</a>
      </ul>
      <div className='navbar-right'>
        <img src={assets.search_icon} alt="" />
        <div className='navbar-search-icon'>
          <Link to='/cart'><img  src={assets.basket_icon} alt=""/></Link>
          <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        {!token? <button onClick={()=>setShowLogin(true)}>Sign In</button>: <div className='navbar-profile'>
          <img src={assets.profile_icon} alt="" />
          <ul className="nav-profile-dropdown">
            <li onClick={()=>navigate('/myorders')} src={assets.bag_icon}><p>Orders</p></li>
            <hr />
            <li onClick={logout} src={assets.logout_icon}><p>Logout</p></li>
            </ul></div>}
       
      </div>
    </div>
  )
}

export default Navbar