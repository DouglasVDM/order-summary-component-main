import React from 'react'

import image from '../images/illustration-hero.svg';
import musicIcon from '../images/icon-music.svg'

// COMPONENTS
import Button from './Button';
import HeroImage from './HeroImage';

const Home = () => {
  return (
    <div className='home'>
      <HeroImage image={image} />

      <h2>Order Summary</h2>
      <p>
        You can now listen to millions of songs, audiobooks, and podcasts on any
        device anywhere you like!
      </p>

      <div className="content">
        <img className='icon' src={musicIcon} alt='music-icon' />
        <div>
          <h3>Annual Plan</h3>
          <p>$59.99/year</p>
        </div>
        <a href="https://douglasvandermerwe,netlify.app">Change</a>
      </div>

      <Button text='Proceed to Payment' />
      <a className='cancel' href='https://douglasvandermerwe.netlify.app'>Cancel Order</a>
    </div>
  )
}

export default Home;
