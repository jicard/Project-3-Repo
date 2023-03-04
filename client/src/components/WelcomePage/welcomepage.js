import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import Button from '../Button/Button';
import './welcomepage.css';
// import MP4 from 'C:/Users/Julia J/Desktop/Project-3-Repo/client/public/images/movingvideo.mp4'

const WelcomePage = () => {
  return (
    <div className='homepage-container'>
              <video width="100%" height="50%" autoPlay loop muted controls >
      <source src='C:\Users\Julia J\Desktop\Project-3-Repo\client\public\images\moving.gif' type="video/gif"/>
</video>
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


        {/* <video src= {MP4} autoPlay loop muted></video>  */}
      </div>
    </div>
  );
};

export default WelcomePage;