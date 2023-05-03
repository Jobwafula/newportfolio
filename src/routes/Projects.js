import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Heroproject from '../components/HeroProject'
import Projectsmap from '../components/Projectsmap'

export default function Projects() {
  
  return (
    <div className='container'>
      <Navbar />
      <Heroproject heading='PROJECTS.' text='My recent most projects'/> 
      
      <Projectsmap />
      <Footer />
    </div>
  )
}
