import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>
      <div className="container testimonials_container">
        <article className='testimonial'>
          <div className="client_avatar">
            <img src={AVTR1} alt="geez" />

          </div>
          <h5 className='client_name'>ALX se founders</h5>
          <small className="client_review">
            Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Voluptatem est, autem quia et minus at eligendi dolores dicta illo
            exercitationem, in
            libero optio recusandae sit? Fuga veniam minus quae culpa.

          </small>
        </article>

        <article className='testimonial'>
          <div className="client_avatar">
            <img src={AVTR2} alt="geez" />

          </div>
          <h5 className='client_name'>Intelsat space stem</h5>
          <small className="client_review">
            Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Voluptatem est, autem quia et minus at eligendi dolores dicta illo
            exercitationem, in
            libero optio recusandae sit? Fuga veniam minus quae culpa.

          </small>
        </article>

        <article className='testimonial'>
          <div className="client_avatar">
            <img src={AVTR3} alt="geez" />

          </div>
          <h5 className='client_name'>Narayan Verdante</h5>
          <small className="client_review">
            Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Voluptatem est, autem quia et minus at eligendi dolores dicta illo
            exercitationem, in
            libero optio recusandae sit? Fuga veniam minus quae culpa.

          </small>
        </article>

        <article className='testimonial'>
          <div className="client_avatar">
            <img src={AVTR4} alt="geez" />

          </div>
          <h5 className='client_name'>Narayan Verdante</h5>
          <small className="client_review">
            Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Voluptatem est, autem quia et minus at eligendi dolores dicta illo
            exercitationem, in
            libero optio recusandae sit? Fuga veniam minus quae culpa.

          </small>
        </article>



      </div>
    </section>
  )
}

export default Testimonials