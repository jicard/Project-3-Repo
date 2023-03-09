import React, { useState } from 'react'
// import styled from 'styled-components'
// import { motion } from 'framer-motion'
// import Button from '../Button/Button';
//import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './welcomepage.css';
import GIF from '../../images/moving.gif'
import checklist from '../../images/checklist.gif'
import LoginSignupButton from '../Login/Button';

const WelcomePage = () => {

  return (
    <>
    <div className="login">
    <LoginSignupButton />
    </div>
      <Container className='homepage-container'>
          <Row className="headliner" >
            <Col xs={12} md={6} className="main-text-area">
              <h2>Moving?</h2>
              <p>Let us help ease the transition!</p>
          </Col>
          <Col xs={12} md={6} className="truck-image">
            <img src={GIF} alt="Moving Truck"/>
          </Col>
        </Row>

        <Row className='sub-section'>
          <Col xs={12} md={6} className='check-image'>
          <img id='checklist-gif' src={checklist} alt='checklist' />
          </Col>
          <Col xs={6} md={8} className='text-box'>
            <h5>Designed with the Hardest Moves in Mind</h5>
            <p>Moving is never easy, no matter how many times you've moved. With <strong>GET MOVING</strong> we are here to help keep your mind at ease. You create the list, we check the boxes.</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default WelcomePage;
