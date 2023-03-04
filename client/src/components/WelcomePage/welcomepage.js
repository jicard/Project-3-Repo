import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import Button from '../Button/Button';
import './welcomepage.css';
import GIF from '../../images/moving.gif'
import checklist from '../../images/checklist.gif'

const WelcomePage = () => {
  return (
    <div className='homepage-container'>
      <div className= 'main-info'>
      <img src={GIF} alt="Moving Truck" />
        <h1>Moving?</h1>
        <p>Let us help ease the transition!</p>
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
      <div className='sub-section'>
        <h2>Designed with the Hardest Moves in Mind</h2>
        <p>Moving is never easy, no matter how many times you've moved.With GET MOVING we are here to help keep your mind at ease. With our pre-templated checklist, we help check the boxes as your moving date gets closer.</p>  
        <img src={checklist} alt='checklist' />
      </div>
    </div>
  );
};

export default WelcomePage;