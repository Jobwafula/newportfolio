import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import AboutMe from '../components/AboutMe'
import { FaWhatsappSquare } from 'react-icons/fa'
import Projectsmap from '../components/Projectsmap'

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
      <Projectsmap />
      {/* <Projectsmap /> */}
      <Footer />
      <div style={styles}>
          <a href="https://api.whatsapp.com/send?phone=254741699821">
            <FaWhatsappSquare size={40} color=' rgba(82, 138, 13, 0.454)' />
          </a>
        </div>
    </div>
  )
}
