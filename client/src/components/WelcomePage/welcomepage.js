import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
// import Button from '../Button/Button';
import Button from 'react-bootstrap/Button';
import './welcomepage.css';
import GIF from '../../images/moving.gif'
import checklist from '../../images/checklist.gif'
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useMutation } from '@apollo/client';
import { ADD_USER, LOGIN_USER } from '../../utils/mutations'
import TheFooter from '../footer/index'
import AppNavbar from '../Navbar'
import { Nav } from '../Navbar/NavbarElements';

const WelcomePage = () => {

  /* Handling opening/closing modal 
  Try reusing, might need new variables for separate modal*/
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  /* Sign Up Modal stuff 
  Copy/Pasted - Different variables inside usestate, different name for function
  Add Address (Current + Destination) + Move-in Date (?) */
  const [signupFormState, setSignupFormState] = useState({
    email: '',
    firstName: '',
    lastName: ''
  })

  const handleSignupFormChange = (event) => {
    // handles changing form values in the signup form
    const { name, value } = event.target;
    setSignupFormState({
      ...signupFormState,
      [name]: value
    })

    console.log('SIGNUP FORM STATE', signupFormState)
  }

  const handleSignupModalSubmit = (event) => {
    //import Mutation 
    // this function is controlled by the inputs and butons in the signup modal
    // call ADD_USER 
    // loginModalSubmit call LOGIN_USER

    // later this will include a function to pas this inforatmion to the database using typedefs and resolvers
    //  you'll have to import the correct Mutation into this page/component
    // console log current user information (signupFormState)
  }

  return (
    <>
    <div className='homepage-container'>
      <div className='main-info'>
        <h1>Moving?</h1>
        <p>Let us help ease the transition!</p>
        <div className='hero-btns'>
          <Button variant="primary" onClick={handleShow}>
            GET STARTED
          </Button>

          <Modal
            show={show}
            onHide={handleClose}
            animation={false}>
            <Modal.Header closeButton>
              <Modal.Title>Create Account</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  name='email'
                  value={signupFormState.email || ''}
                  onChange={handleSignupFormChange}
                  required />
                <Form.Label>First Name</Form.Label>
                <Form.Control name='firstName' required />
                <Form.Label>Last Name</Form.Label>
                <Form.Control name='lastName' required />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary"
                onClick={handleSignupModalSubmit}>Submit</Button>
            </Modal.Footer>
          </Modal>
          {/* <Button
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
          </Button> */}
        </div>
        <img src={GIF} alt="Moving Truck" />
      </div>
      <div className='sub-section'>
        <img src={checklist} alt='checklist' />
        <div className='text-box'>
          <h2>Designed with the Hardest Moves in Mind</h2>
          <p>Moving is never easy, no matter how many times you've moved. With <strong>GET MOVING</strong> we are here to help keep your mind at ease. With our pre-templated checklist, we help check the boxes as your moving date gets closer.</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default WelcomePage;