import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.png'


const Portfolio = () => {
  return (
    <section id='portfolio'>

      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio_container'>
        
        <article className="portfolio_item">
        <div className="portfolio_item-image">
          <img src={IMG1} alt="" />
          <h3>Memory Game</h3>
          <div className="portfolio_item-cta">
           <a href="https://github.com/MartheUwir/memg" className='btn'target='_blank'>Github</a>
           <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary'target='_blank'>Live Demo</a>

          </div>
        </div>

        </article>
       
        <article className="portfolio_item">
        <div className="portfolio_item-image">
          <img src={IMG1} alt="" />
          <h3>Mern Authentication</h3>
          <div className="portfolio_item-cta">
          <a href="https://github.com/MartheUwir/mern-auth" className='btn'target='_blank'>Github</a>
          <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary'target='_blank'>Live Demo</a>

          </div>
        </div>

        </article>
         
        <article className="portfolio_item">
        <div className="portfolio_item-image">
          <img src={IMG1} alt="" />
          <h3>E-Commerce App</h3>
          <div className="portfolio_item-cta">
          <a href="https://github.com/MartheUwir/ecomm" className='btn'target='_blank'>Github</a>
          <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary'target='_blank'>Live Demo</a>

          </div>
        </div>

        </article>
        
        <article className="portfolio_item">
        <div className="portfolio_item-image">
          <img src={IMG1} alt="" />
          <h3>Hospital service</h3>
          <div className="portfolio_item-cta">
          <a href="https://github.com" className='btn'target='_blank'>Github</a>
          <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary'target='_blank'>Live Demo</a>

          </div>
        </div>

        </article>

        
        <article className="portfolio_item">
        <div className="portfolio_item-image">
          <img src={IMG1} alt="" />
          <h3>School Management System</h3>
          <div className="portfolio_item-cta">
          <a href="https://github.com/MartheUwir/rcasmis" className='btn'target='_blank'>Github</a>
          <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary'target='_blank'>Live Demo</a>

          </div>
        </div>

        </article>
        
        <article className="portfolio_item">
        <div className="portfolio_item-image">
          <img src={IMG1} alt="" />
          <h3>Random Game</h3>
          <div className="portfolio_item-cta">
          <a href="https://github.com" className='btn'target='_blank'>Github</a>
          <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary'target='_blank'>Live Demo</a>

          </div>
        </div>

        </article>
      </div>
    </section>
  )
}

export default Portfolio