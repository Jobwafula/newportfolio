import React from 'react'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

export default function Contact() {
  return (
    <div>
        <Navbar/>
        <HeroImg2  heading='CONTACT' text='lets chart'/> 
        <Footer />
    </div>
  )
}
