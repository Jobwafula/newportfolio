import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Heroproject from '../components/HeroProject'
import projects from '../components/projectsdata'
import './projectsstyles.css';
export default function Projects() {
  const proj = projects.map((item)=>
  <div>
    <div className='projects'>
      <img className='img'src={item.img} alt='weather'/>
    </div>
    <p>{item.text}</p>
  </div>)
  return (
    <div className='container'>
      <Navbar />
      <Heroproject heading='PROJECTS.' text='My recent most projects'/> 
      <div className='mapContainer'>
         {proj}
      </div>
      
      <Footer />
    </div>
  )
}
