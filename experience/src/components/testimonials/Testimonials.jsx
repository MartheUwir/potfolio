import React from 'react'
import './testimonials.css'
import Avt1 from '../../assets/avatar1.jpg'
import Avt2 from '../../assets/avatar2.jpg'
import Avt3 from '../../assets/avatar3.jpg'
import Avt4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar:Avt1,
    name: 'Rwanda Coding Academy',
    review: 'This is high school where Marthe have acquired all the basic knowledge in here, RCA learning though digital innovation in project based learning . Shee worked on different projects and W truly believe that RCA Paved her Software engineering jourey'

  },
  {
    avatar:Avt2,
    name: 'Africa Agility',
    review: 'Marthe participated in this global program Africa Agility studying Artificial Intelligence. We believe that her AI skills advanced in here and the proudly presented certificate she Got approves that so far'

  },
  {
    avatar:Avt3,
    name: 'ALX SE instructors',
    review: 'AS Alx software engineering program mentors, we believe in passionate way that Marthe used. since 2022 learning here in Alx SE program .We believe that she gained more and gave more of her knowledge and effors.'

  },
  {
    avatar:Avt4,
    name: 'Intelsat space',
    review: 'Judi Sandrock, Leader of Intelsat space Program Assures that Marthe participated in Intelsat Space program. She showed great desire to learn, teach and collaborate with others on different space projects.'

  }

]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials_container">
        
   {
     data.map(({avatar,name,review},index) => {
      return(
        <SwiperSlide key={index} className='testimonial'>
          <div className="client_avatar">
            <img src={avatar} alt="geez" />

          </div>
          <h5 className='client_name'>{name}</h5>
          <small className="client_review">{review}</small>
        </SwiperSlide>
      )

     })
   }
 
      </Swiper>
    </section>
  )
}

export default Testimonials