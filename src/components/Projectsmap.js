import React from 'react'
import projects from './projectsdata'
import './projectsstyles.css';

export default function Projectsmap() {

    const proj = projects.map((item)=>
  <div className='projects'>
    <div >
      <img className='img'src={item.img} alt='weather'/>
    </div>
    <div className='textMap'><p>{item.text}</p></div>
    
  </div>)
  return (
    <div className='projcontainer'>
       
         {proj}
      
    </div>
  )
}
