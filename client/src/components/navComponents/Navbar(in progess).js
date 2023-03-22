import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
import {
  Navb,
  NavLink,
  NavLinkHome,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  NavLogin
} from './NavbarElements'
import SignUpForm from './SignupForm';
import LoginForm from './LoginForm';
//import Auth from '../utils/auth';

const AppNavbarOld = () => {
  // set modal display state
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navb>
        <Bars />
        <NavMenu>
          <NavLinkHome to='/'>
            Get Moving
          </NavLinkHome>
              <NavLogin onClick={() => setShowModal(true)}>Login/Sign Up</NavLogin>
          {/*</Navbar.Collapse>*/}
          {/*</NavMenu>*/}
        </NavMenu>
      </Navb>
      {/* set modal data up */}
      <Modal
        size='lg'
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby='signup-modal'>
        {/* tab container to do either signup or login component */}
        <Tab.Container defaultActiveKey='signup'>
          <Modal.Header closeButton>
            <Modal.Title id='signup-modal'>
              <Nav variant='pills'>
                <Nav.Item>
                  <Nav.Link eventKey='login'>Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='signup'>Sign Up</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey='login'>
                <LoginForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey='signup'>
                <SignUpForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    </>
  );
};

export default AppNavbarOld;