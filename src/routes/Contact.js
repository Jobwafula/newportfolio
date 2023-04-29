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
        <div>
          <a href="https://api.whatsapp.com/send=+254741699821">send message</a>
        </div>
      <Footer />
    </div>
  )
}
