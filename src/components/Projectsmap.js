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
    <div>
      <div>
    <h2 style={{color:'white',marginLeft:'10px'}}>MY RECENT MOST PROJECTS</h2>
  </div>
    <div className='projcontainer'>
       
         {proj}
      
    </div>
    </div>
    
  )
}
