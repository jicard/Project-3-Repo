import React from 'react';
import Button from '../Button/Button';
import './accountsettings.css';

const accountsettings = () => {
  return (

    <div className='homepage-container'>
      <div className='moving-details'>
        <h1>Moving Details</h1>
        <h3>New Address:</h3>
        <h6>New address here</h6>
        <h3>Move-in Date:</h3>
        <h6>Move-in date here</h6>
        <h3>Old Residence:</h3>
        <h6>Old address here</h6>
        <h3>Move Out Date:</h3>
        <h6>Date need to move out by</h6>

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
        <h6>Name here</h6>
        <h3>Email:</h3>
        <h6>Email here</h6>
        <h3>Password</h3>
        <h6>Password here</h6>

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