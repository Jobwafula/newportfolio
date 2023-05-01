import React from 'react'
import './FooterStyles.css'
import { FaFacebook, FaGithub, FaHome, FaMailBulk, FaPhone, FaTwitter, } from 'react-icons/fa'

export default function Footer() {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome size={20} style={{color:'#fff',marginRight:'2rem'}} />
                    <div>
                        <p>Bungoma.</p>
                    </div>
                </div>
                <div className='phone'>
                    <h4><FaPhone  size={20} style={{color:'#fff',marginRight:'2rem'}} />+ 254 7 416-998-21</h4>
                </div>
                <div className='email'>
                    <FaMailBulk  size={20} style={{color:'#fff',marginRight:'2rem'}} />
                    <h4>jobwafulabg@gmail.com</h4>
                </div>
            </div>
            <div className='right'>
                <h4>About me</h4>
                <p>This is me Wafula Job.I enjoy contributing to open source and new projects.</p>
                <FaFacebook size={20} style={{color:'#fff',marginRight:'1rem'}}/>
                <FaTwitter size={20} style={{color:'#fff',marginRight:'1rem'}}/>
                <FaGithub size={20} style={{color:'#fff',marginRight:'1rem'}}/>
                
            </div>
            {/* <form /> */}
        
        </div>
      
    </div>
  )
}
