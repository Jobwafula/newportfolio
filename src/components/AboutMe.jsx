// import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import './AboutMe.css'
import job from '../assets/psd1_6.png'
import data from './skills.js'
import {DiJsBadge,DiReact}  from 'react-icons/di'
import {BsFiletypeCss} from 'react-icons/bs'
import {AiFillHtml5} from 'react-icons/ai'
// import { useState,useEffect } from 'react'


export default function AboutMe() {
  // const [isMobile,setIsMobile] = useState(false)

  // useEffect(()=>{
  //   const handleResize = ()=>{
  //     setIsMobile(window.innerWidth>768)
  //   }
  //   window.addEventListener('resize',handleResize)
  //   // window.removeEventListener('resize',handleResize)
  // },[])
  // skills map
    const skills = data.map((item)=>
        
        <div className='mapdiv' key={item.id}>
            <div  className='mapImage'> {item.icon}</div>
            <p className='mapText'>{item.text}</p>
        </div>
    )
  return (
    <div>
      <div className='mainwrapper'>
        <h1 style={{color:'white',margin:'0 10px'}}>About Me</h1>
        <h2 style={{color:'white',margin:'0 10px'}}>My Interests</h2>
        <div className='wrapper' >
           <div className='img-mask'>
                <img className='image' src={job} alt='job'/>
            </div> 
            
            <div className=' image-text'>
                <h1 >Who AM I?</h1>
                <h3>A web developer based in Nairobi, Kenya</h3>
                <p>Wafula is a well experienced web developer and designer with proven record in 3D modelling & Android Application development, database management, data visualization and analysis, API Design and system deployment, scripting , automation, familiarity with impact assessment and analysis.</p>
                <p >He has strong technical skills and great interpersonal skills, allowing interaction with a wide variety of clients. He strives for improved human welfare by leveraging her web and remote-sensing programming skills to developing interactive, user-friendly web apps and systems that are able to assess impact for decision making, analyse risk, support the mitigation of crises and threats and foster preparedness, resilience and response.</p>
                <p><span style={{fontSize:'bold'}} >E-mail</span> : <span>jobwafulabg@gmail.com</span></p>
            </div>
        </div>
        <div className='skills'>
            <h1 style={{color:'white'}}>MY SKILLS</h1>
            <p style={{color:'white'}}>What I am well conversant with</p>
            <div className='skillsMap'>
                {skills}
            </div>
            <div style={{padding:'10px'}} className='small'>
              <div style={{display:'flex',gap:'10vw'}}>
                  <div className='mapDiv'>
                    <div className='mapImage'>
                      <AiFillHtml5 size={40} />
                    </div>
                    <p className='mapText'>HTML</p>
                  </div>
                  <div className='mapDiv'>
                    <div className='mapImage'>
                      <BsFiletypeCss size={40} />
                    </div>
                    <p className='mapText'>CSS</p>
                  </div>
              </div>

              <div style={{display:'flex',gap:'10vw'}}>
                <div className='mapDiv'>
                  <div className='mapImage'>
                    <DiJsBadge size={20} />
                  </div>
                  <p className='mapText'>es6</p>
                </div>
                <div className='mapDiv'>
                  <div className='mapImage'>
                    <DiReact size={40} />
                  </div>
                  <p className='mapText'>react</p>
                </div>
              </div>


              <div style={{display:'flex',gap:'10vw'}}>
                <div className='mapDiv'>
                  <div className='mapImage'>
                    <DiJsBadge size={40} />
                  </div>
                  <p className='mapText'>JAVA</p>
                </div>
                <div className='mapDiv'>
                  <div className='mapImage'>
                    <DiReact size={40} />
                  </div>
                  <p className='mapText'>FIGMA</p>
                </div>
              </div>


              <div style={{display:'flex',gap:'10vw'}}>
                <div className='mapDiv'>
                  <div className='mapImage'>
                    <DiJsBadge size={40} />
                  </div>
                  <p className='mapText'>strap</p>
                </div>
                <div className='mapDiv'>
                  <div className='mapImage'>
                    <DiReact size={40} />
                  </div>
                  <p className='mapText'>AWS</p>
                </div>
              </div>



              
            </div>
        </div>  
      </div>
    </div>
  )
}
