import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import AboutMe from '../components/AboutMe'
import { FaWhatsappSquare } from 'react-icons/fa'
import Projects from './Projects'

export default function Home() {
  const styles={
    color:'green',
    position:'fixed',
    bottom:10,
    right:10
  }
  return (
    <div>
      <Navbar />
      <Hero />
    
      <AboutMe />
      <Projects />
      <Footer />
      <div style={styles}>
          <a href="https://api.whatsapp.com/send?phone=254741699821">
            <FaWhatsappSquare size={40} color='green' />
          </a>
        </div>
    </div>
  )
}
