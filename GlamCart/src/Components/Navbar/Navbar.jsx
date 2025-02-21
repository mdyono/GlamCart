import React from 'react'
import './Navbar.css'
import logo1 from '../assets/logo1.png'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navlogo'>
    <img src={logo1} alt="" />
    <p>GlamCart</p>
      </div>
    </div>
  )
}

export default Navbar
