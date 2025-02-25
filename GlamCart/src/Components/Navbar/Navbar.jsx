import React, { useState } from 'react'
import './Navbar.css'
import { FaCartShopping } from "react-icons/fa6";
import logo2 from '../Assets/logo2.jpg'
import { Link } from 'react-router-dom';
const Navbar = () => {
  let [menu,setmenu]=useState("shop")
  return (
    <div className='navbar'>
      <div className='navlogo'>
      <img src={logo2} alt="" />
    <p>GlamCart</p>
      </div>
     
        <ul className='navmenu'>
            <li onClick={()=>{setmenu("shop")}}>Shop{menu==="shop"?<hr />:<></>}</li>
            <li onClick={()=>{setmenu("Men")}}>Men{menu==="Men"?<hr />:<></>}</li>
            <li onClick={()=>{setmenu("Women")}}>Women{menu==="Women"?<hr />:<></>}</li>
            <li onClick={()=>{setmenu("Kids")}}>Kids{menu==="Kids"?<hr />:<></>}</li>

        </ul>
        <div className='nav-login'>
            <button>Login</button>
            <FaCartShopping size={40}/>
            <div className='nav-cart-count'>0</div>
        </div>
      </div>
    
  )
}

export default Navbar
