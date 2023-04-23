import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import HeroImg2 from '../components/HeroImg2'
import AboutMe from '../components/AboutMe'

export default function About() {
  return (
    <div>
        <Navbar />
        <HeroImg2 heading='ABOUT' text='Im a proficient front-End Developer ' />
        {/* <AboutMe /> */}
      <Footer />
    </div>
  )
}
