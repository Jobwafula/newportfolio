import React from 'react'
import projects from './projectsdata'
import './projectsstyles.css';

export default function Projectsmap() {

    const proj = projects.map((item)=>
  <div>
    <div className='projects'>
      <img className='img'src={item.img} alt='weather'/>
    </div>
    <p>{item.text}</p>
  </div>)
  return (
    <div className='container'>
       
         {proj}
      
    </div>
  )
}
