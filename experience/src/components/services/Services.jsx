import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services_container">
    
    <article className='service'>
      <div className="service_head">
      <h3>UI/UX Design</h3>  
      </div>
  
   <ul className="service_list">
   <li><BiCheck className='service_list-icon'/>
    <p>Usability Testing</p>
    </li> 
    <li><BiCheck className='service_list-icon'/>
    <p>Design System Development </p>
    </li> 
    <li><BiCheck className='service_list-icon'/>
    <p>Information Architecture</p>
    </li> 
    <li><BiCheck className='service_list-icon'/>
    <p>create data management </p>
    </li> 
    <li><BiCheck className='service_list-icon'/>
    <p>Interaction Design</p>
    </li> 
    <li><BiCheck className='service_list-icon'/>
    <p>Accessibility Design</p>
    </li>  
    <li><BiCheck className='service_list-icon'/>
    <p>Interaction Design </p>
    </li>
    <li><BiCheck className='service_list-icon'/>
    <p>User Experience (UX) Design </p>
    </li> 
    
   </ul>
   </article>
   {/* END OF UI/UX DESIGN */}
   <article className='service'>
      <div className="service_head">
      <h3>Web Development</h3>  
      </div>
  
   <ul className="service_list">
    <li><BiCheck className='service_list-icon'/>
    <p>Web Application Development</p>
    </li> 
    <li><BiCheck className='service_list-icon'/>
    <p>Website Maintenance and Support</p>
    </li> 
    <li><BiCheck className='service_list-icon'/>
    <p>E-commerce Development</p>
    </li> 
    <li><BiCheck className='service_list-icon'/>
    <p>Front-End Development</p>
    </li> 
    <li><BiCheck className='service_list-icon'/>
    <p>Website Development</p>
    </li> 
    <li><BiCheck className='service_list-icon'/>
    <p>Back-End Development</p>
    </li>  
    <li><BiCheck className='service_list-icon'/>
    <p>Content Management System </p>
    </li> 
   </ul>
   </article>
   {/* ======end of web dev */}
   <article className='service'>
      <div className="service_head">
      <h3>Content Creatinon</h3>  
      </div>
  
   <ul className="service_list">
    <li><BiCheck className='service_list-icon'/>
    <p>Whitepapers and Research Papers</p>
    </li> 
    <li><BiCheck className='service_list-icon'/>
    <p>Content Strategy Consulting</p>
    </li> 
    <li><BiCheck className='service_list-icon'/>
    <p>Technical Writing</p>
    </li> 
    <li><BiCheck className='service_list-icon'/>
    <p>Blog and Article Writing</p>
    </li> 
    <li><BiCheck className='service_list-icon'/>
    <p>Code Samples and Snippets</p>
    </li> 
    <li><BiCheck className='service_list-icon'/>
    <p>Video Content Production</p>
    </li>  
    <li><BiCheck className='service_list-icon'/>
    <p>Tutorial Creation</p>
    </li> 
   </ul>
   </article>
      </div>
    </section>
  )
}

export default Services