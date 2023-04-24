import React from 'react'
import './AboutMe.css'
import job from '../assets/job.jpeg'
import data from './skills.js'

export default function AboutMe() {
    const skills = data.map((item)=>
        
        <div key={item.id}>
            <div style={{color:'#fff'}}> {item.icon}</div>
            <p>{item.text}</p>
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
            
            <div className='image-text'>
                <h1>Preparedness . Sustainability . Resilience . Response . Adaptation</h1>
                <h3>A web developer based in Nairobi, Kenya</h3>
                <p>Wafula is a well experienced GIS specialist with proven record in Web & GIS Application development, database management, data visualization and analysis, API Design and system deployment, scripting , automation, familiarity with impact assessment and analysis.</p>
                <p>She has strong technical skills and great interpersonal skills, allowing interaction with a wide variety of clients. She strives for improved human welfare by leveraging her GIS and remote-sensing programming skills to developing interactive, user-friendly, state of the art GIS tools, web apps and systems that are able to assess impact for decision making, analyse risk, support the mitigation of crises and threats and foster preparedness, resilience and response.</p>
                <p><span>E-mail</span> : <span>jobwafulabg@gmail.com</span></p>
            </div>
        </div>
        <div className='skills'>
            <h1>MY SKILLS</h1>
            <p>What I am well conversant with</p>
            <div>
                {skills}
            </div>
        </div>

        
      </div>
    </div>
  )
}
