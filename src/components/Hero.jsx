import React from 'react'
import intro from '../assets/fwi2ef.jpg'
import './HeroStyles.css'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <div className='hero'>
      <div className='mask'>
       <img className='introImage' src={intro} alt='heroImg'/> 
      </div>
      
         
         <div className='content'>
          <p className='anime-text'>HI, I'M WAFULA</p>
          <h1>Web Developer</h1>
          <div>
            <Link to='/projects' className='btn'>Projects</Link>
            <Link to='/contact' className='btn btn-light'>contact</Link>
          </div>
         </div>
    </div>
  )
}
