import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import{FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => { 
  return (
    <section id='about'>
    <h5>Get To Know</h5>
    <h2>About Me</h2>
    <div className="container about_container">
    <div className="about_me">
    <div className="about_me-image">
    <img src={ME} alt="About image"/>
    </div>
    </div>
    <div className="about_content">
      <div className="about_cards">

      <article className='about_card'>
          <FaAward className='about_icon'/>
       <h5>Experience</h5>
       <small>3+ Years Working</small>
       </article>

        <article className='about_card'>
          <FiUsers className='about_icon'/>
       <h5> Clients </h5>
       <small>100+ Worldwide</small>
        </article>

        <article className='about_card'>
        <VscFolderLibrary className='about_icon'/>
       <h5>Projects</h5>
       <small>30+ Completed</small>
        </article>

      </div>
      <p>
        Hello guyz am by the names of Uwiringiyimana Marthe and am a fullstack developer
        using different programming languages and frameworks. Am open and ready to work 
        as a full time employee. Please don't hestate to contact me for further information.
      </p>
      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
    </div>
    </section>
  )
}

 export default About