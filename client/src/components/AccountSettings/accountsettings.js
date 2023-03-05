import React from 'react'
import Button from '../Button/Button';
import './accountsettings.css';

const accountsettings = () => {
  return (

    <div className='homepage-container'>
      <div className='moving-details'>
        <h1>Moving details</h1>
        <h2>New address</h2>
        <text>New address here</text>
        <h2>Move-in Date:</h2>
        <text>move-in date here</text>
        <h2>Old Residence</h2>
        <text>old address here</text>
        <h2>Move Out Date:</h2>
        <text>date need to move out by</text>
      </div>
      <div className= 'account-settings'>
        <h1>Account Settings</h1>
        <h2>name</h2>
        <text>name here</text>
        <h2>email</h2>
        <text>emailhere</text>
        <h2>password</h2>
        <text>password here</text>

        <div className='hero-btns'>

          <Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            onClick={console.log('loginclick!')}
          >
            Save 
          </Button>
        </div>

      </div>
    </div>
  );
};


export default accountsettings