import React from 'react'
import Button from '../Button/Button';
import './accountsettings.css';

const accountsettings = () => {
  return (

    <div className='homepage-container'>
      <div className='moving-details'>
        <h1>Moving details</h1>
        <h3>New address</h3>
        <text>New address here</text>
        <h3>Move-in Date:</h3>
        <text>move-in date here</text>
        <h3>Old Residence</h3>
        <text>old address here</text>
        <h3>Move Out Date:</h3>
        <text>date need to move out by</text>

        <div className='account-btns'>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
            Edit
          </Button>
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
      <div className='account-settings'>
        <h1>Account Settings</h1>
        <h3>name</h3>
        <text>name here</text>
        <h3>email</h3>
        <text>emailhere</text>
        <h3>password</h3>
        <text>password here</text>

        <div className='account-btns'>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
            Edit
          </Button>
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