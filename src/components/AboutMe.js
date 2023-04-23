import React from 'react'
import './AboutMe.css'
import job from '../assets/job.jpeg'

export default function AboutMe() {
  return (
    <div>
      <div>
        <h1>About Me</h1>
        <h2 style={{color:'#fff'}}>My Interests</h2>
        <div className='wrapper' >
            <div className='mask'>
                <img className='image' src={job} alt='job'/>
            </div>
            
            <div className='image-text'>
                <h1>Sustainability.adaptability.proficiency</h1>
    
            </div>
        </div>
        
      </div>
    </div>
  )
}
