import React from 'react'
import Button from '../Button/Button';
import './accountsettings.css';

const accountsettings = () => {
  return (

    <div className='homepage-container'>
      <div className='moving-details'>
        <h1>Moving Details</h1>
        <h3>New Address:</h3>
        <text>New address here</text>
        <h3>Move-in Date:</h3>
        <text>Move-in date here</text>
        <h3>Old Residence:</h3>
        <text>Old address here</text>
        <h3>Move Out Date:</h3>
        <text>Date need to move out by</text>

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
        <h3>Name:</h3>
        <text>Name here</text>
        <h3>Email:</h3>
        <text>Email here</text>
        <h3>Password</h3>
        <text>Password here</text>

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