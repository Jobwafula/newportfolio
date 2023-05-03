import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import HeroImg2 from '../components/HeroImg2'
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
    <div>
      <Navbar />
      <HeroImg2 heading='PROJECTS.' text='My recent most projects'/>
      <div className='mapContainer'>
         {proj}
      </div>
      
      <Footer />
    </div>
  )
}
