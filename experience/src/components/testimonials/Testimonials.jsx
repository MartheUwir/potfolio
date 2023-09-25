import React from 'react'
import './testimonials.css'
import Avt1 from '../../assets/avatar1.jpg'
import Avt2 from '../../assets/avatar2.jpg'
import Avt3 from '../../assets/avatar3.jpg'
import Avt4 from '../../assets/avatar4.jpg'

const data = [
  {
    avatar:Avt1,
    name: 'CITO RUTH',
    review: 'This one classmate and sitmate of mine who guide me everyday can testfy how passionate I am as she taught me so much . I got many things from her thoughout academic year'

  },
  {
    avatar:Avt2,
    name: 'Kimon',
    review: 'This one classmate and sitmate of mine who guide me everyday can testfy how passionate I am as she taught me so much . I got many things from her thoughout academic year'

  },
  {
    avatar:Avt3,
    name: 'CITO RUTH',
    review: 'This one classmate and sitmate of mine who guide me everyday can testfy how passionate I am as she taught me so much . I got many things from her thoughout academic year'

  },
  {
    avatar:Avt4,
    name: 'CITO RUTH',
    review: 'This one classmate and sitmate of mine who guide me everyday can testfy how passionate I am as she taught me so much . I got many things from her thoughout academic year'

  }

]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>
      <div className="container testimonials_container">
        
   {
     data.map(({avatar,name,review},index) => {
      return(
        <article key={index} className='testimonial'>
          <div className="client_avatar">
            <img src={avatar} alt="geez" />

          </div>
          <h5 className='client_name'>{name}</h5>
          <small className="client_review">{review}</small>
        </article>
      )

     })
   }

      </div>
    </section>
  )
}

export default Testimonials