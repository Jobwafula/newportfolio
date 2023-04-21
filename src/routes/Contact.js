import React from 'react'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import Navbar from '../components/Navbar'
import Form from '../components/Form'

export default function Contact() {
  return (
    <div>
        <Navbar/>
        <HeroImg2  heading='CONTACT' text='lets chart'/> 
        <Form />
      <Footer />
    </div>
  )
}
