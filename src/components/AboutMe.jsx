// import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import './AboutMe.css'
import job from '../assets/job.jpeg'
import data from './skills.js'

export default function AboutMe() {
    const skills = data.map((item)=>
        
        <div className='mapdiv' key={item.id}>
            <div  className='mapImage'> {item.icon}</div>
            <p className='mapText'>{item.text}</p>
        </div>
    )
  return (
    <div>
      <div>
        <h1>About Me</h1>
        <h2 style={{color:'#fff'}}>My Interests</h2>
        <div className='wrapper' >
            <div className='mask'>
                <img className='image' src={job} alt='job'/>
            </div>
            
            <div className=' image-text'>
                <h1>Who AM I?</h1>
                <h3>A web developer based in Nairobi, Kenya</h3>
                <p style={{fontSize:'1.4rem'}}>Wafula is a well experienced web developer and designer with proven record in 3D modelling & Android Application development, database management, data visualization and analysis, API Design and system deployment, scripting , automation, familiarity with impact assessment and analysis.</p>
                <p style={{fontSize:'1.4rem'}} >He has strong technical skills and great interpersonal skills, allowing interaction with a wide variety of clients. He strives for improved human welfare by leveraging her web and remote-sensing programming skills to developing interactive, user-friendly web apps and systems that are able to assess impact for decision making, analyse risk, support the mitigation of crises and threats and foster preparedness, resilience and response.</p>
                <p style={{fontSize:'1.4rem'}}><span >E-mail</span> : <span>jobwafulabg@gmail.com</span></p>
            </div>
        </div>
        <div className='skills'>
            <h1>MY SKILLS</h1>
            <p>What I am well conversant with</p>
            <div className='skillsMap'>
                {skills}
            </div>
        </div>  
      </div>
    </div>
  )
}
