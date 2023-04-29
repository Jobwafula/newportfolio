import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import AboutMe from '../components/AboutMe'
import { FaWhatsapp } from 'react-icons/fa'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div>
          <a style={{color:'green',position:'fixed',margin:'90vw 90vh'}}href="https://api.whatsapp.com/send?phone=254741699821">
            <FaWhatsapp size={40} color='green' />
          </a>
        </div>
      <AboutMe />
      <Footer />
    </div>
  )
}
