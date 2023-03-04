import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import Button from '../Button/Button';
import './welcomepage.css';
import GIF from '../../images/moving.gif'

const WelcomePage = () => {
  return (
    <div className='homepage-container'>

      <img src={GIF} alt="Moving Truck" />
      <div className= 'main-info'>
        <h1>MOVING?</h1>
        <p>We Help You Stay Organized!</p>
        <div className='hero-btns'>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
            GET STARTED
          </Button>
          <Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            onClick={console.log('loginclick!')}
          >
            Login 
          </Button>

        </div>
      </div>    
    </div>
  );
};

export default WelcomePage;