import React, { useState } from 'react'
// import styled from 'styled-components'
// import { motion } from 'framer-motion'
// import Button from '../Button/Button';
//import Button from 'react-bootstrap/Button';
import './welcomepage.css';
import GIF from '../../images/moving.gif'
import checklist from '../../images/checklist.gif'

const WelcomePage = () => {

  return (
    <>
      <div className='homepage-container'>
        <div className='main-info'>
          <div className='text-area-1'>
          <h1>Moving?</h1>
          <p>Let us help ease the transition!</p>
          <img src={GIF} alt="Moving Truck" />
        </div>
        </div>
        <div className='sub-section'>
          <div className='checkimage'>
          <img src={checklist} alt='checklist' />
          </div>
          <div className='text-box'>
            <h5>Designed with the Hardest Moves in Mind</h5>
            <p>Moving is never easy, no matter how many times you've moved. With <strong>GET MOVING</strong> we are here to help keep your mind at ease. With our pre-templated checklist, we help check the boxes as your moving date gets closer.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomePage;
