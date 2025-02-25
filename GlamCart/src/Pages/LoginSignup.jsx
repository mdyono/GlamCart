import React from 'react'
import './CSS/LoginSignup.css'
const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className='loginsignupcontainer'>
        <h1>Sign Up</h1>
        <div className='loginsignupfields'>
          <input type="text"  placeholder='Your Name'/>
          <input type="email" placeholder='Email Address'  />
          <input type="password" placeholder='password' />
        </div>
        <button className='login-btn'>Continue</button>
        <p className='loginsignup-login'>Already have an Account ?<span> Login here</span></p>
        <div className='loginsignup-agree'>
          <input type='checkbox' name="" id="" />
          <p>By continuing , I agree to the terms & privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
