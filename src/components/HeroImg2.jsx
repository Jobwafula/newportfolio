import React from 'react'
import './HeroImg.css'
import { Link } from 'react-router-dom'

export default function HeroImg2(props) {
  return (
    <div className='hero-img'>
        <div className='heading'>
            <h1>{props.heading}</h1>
            <p>{props.text}</p>
            <div className='btn' style={{}}>
               <Link to='/Form'>Send Email</Link>
            </div>
        </div>
      
    </div>
  )
}
