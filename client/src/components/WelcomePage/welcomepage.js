import React from 'react'
import Button from '../Button/Button';
import './welcomepage.css';
import MP4 from 'public/images/movingvideo.mp4'

const WelcomePage = () => {
  return (
    <div className='homepage-container'>
      <video src={MP4} autoPlay loop muted />
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
  );
};

export default WelcomePage;