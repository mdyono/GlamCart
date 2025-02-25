import React from 'react'
import "./hero.css"
import hand_icons from "../Assets/hand_icon.png"
import arrow_icon from "../Assets/arrow.png"
import hero_imae from  "../Assets/hero_image.png"

function Hero() {
  return (
   <div className='hero'>
    <div className='hero-left'> 
        <h2>
            NEW ARRIVALS
        </h2>
        <div>
        <div className='hero-hand-icon'>
        <p>
            NEW
        </p>
        <img src={hand_icons} alt='!'/>
    </div>
    <p>Collections</p>
    <p>for everyone</p>        
    </div>

    <div className="hero-latest-btn">
        <div>
            Latest Collection
        </div>
        <img src={arrow_icon} alt='!'/>
        </div>

   </div>
   <div className='hero-right'>
    <img src={hero_imae} alt='!'/>


   </div>
   </div>


  )
}

export default Hero