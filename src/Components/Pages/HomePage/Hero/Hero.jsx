import React from 'react'
import './Hero.css'
import big_data from './assets/big-data.png'

const Hero = () => {
  return (
    <div>
        <div className="hero container">
            <div className="hero-text">
                <img src={big_data} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Hero