import React, { useState } from 'react'
// import styled from 'styled-components'
// import { motion } from 'framer-motion'
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

  const [showLogin, setShowLogin] = useState(false);
  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);

  /* Sign Up Modal stuff 
  Copy/Pasted - Different variables inside usestate, different name for function
  Add Address (Current + Destination) + Move-in Date (?) */
  const [signupFormState, setSignupFormState] = useState({
    email: '',
    firstName: '',
    lastName: '',
    addressFrom: '',
    addressTo: '',
    moveDate: ''
  })

  const [loginFormState, setLoginFormState] = useState({
    email: '',
    password: ''
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

  const handleLoginFormChange = (event) => {
    // handles changing form values in the signup form
    const { name, value } = event.target;
    setLoginFormState({
      ...loginFormState,
      [name]: value
    })

    console.log('LOGIN FORM STATE', loginFormState)
  }

  const handleSignupModalSubmit = (event) => {
    //import Mutation 
    // this function is controlled by the inputs and butons in the signup modal
    // call ADD_USER 
    // loginModalSubmit call LOGIN_USER

    // later this will include a function to pass this information to the database using typedefs and resolvers
    // console log current user information (signupFormState)
  }

  const handleLoginModalSubmit = (event) => {

  }

  return (
    <>
      <div className='homepage-container'>
        <div className='main-info'>
          <h1>Moving?</h1>
          <p>Let us help ease the transition!</p>
          <div className='hero-btns'>
            <Button variant="primary" onClick={handleShow}>
              Sign Up
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
                  <Form.Control name='firstName'
                    value={signupFormState.firstName || ''}
                    onChange={handleSignupFormChange}  required />
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control name='lastName'
                    value={signupFormState.lastName || ''}
                    onChange={handleSignupFormChange}  required />
                  <Form.Label>Current Address</Form.Label>
                  <Form.Control name='addressFrom'
                    value={signupFormState.addressFrom || ''}
                    onChange={handleSignupFormChange}  required />
                  <Form.Label>New Address</Form.Label>
                  <Form.Control name='addressTo'
                    value={signupFormState.addressTo || ''}
                    onChange={handleSignupFormChange}  required />
                  <Form.Label>Moving Date</Form.Label>
                  <Form.Control name='moveDate'
                    value={signupFormState.moveDate || ''}
                    onChange={handleSignupFormChange}  required />
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

            {/* END OF GET STARTED BUTTON */}

            <Button variant="primary" onClick={handleShowLogin}>
              Log In
            </Button>

            <Modal
              show={showLogin}
              onHide={handleCloseLogin}
              animation={false}>
              <Modal.Header closeButton>
                <Modal.Title>Log in to your account</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <Form.Group>
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    name='email'
                    value={loginFormState.email || ''}
                    onChange={handleLoginFormChange}
                    required />
                  <Form.Label>Password</Form.Label>
                  <Form.Control name='password'
                    value={loginFormState.password || ''}
                    onChange={handleLoginFormChange}  required />
                </Form.Group>
              </Modal.Body>

              <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseLogin}>
                  Close
                </Button>
                <Button variant="primary"
                  onClick={handleLoginModalSubmit}>Submit</Button>
              </Modal.Footer>
            </Modal>
          </div>
          <img src={GIF} alt="Moving Truck" />
        </div>
        <div className='sub-section'>
          <img src={checklist} alt='checklist' />
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