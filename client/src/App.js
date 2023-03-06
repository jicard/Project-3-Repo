import { Routes, Route, Router } from 'react-router-dom';
import './App.css';
import React, { Component } from 'react';
import WelcomePage from './components/WelcomePage/welcomepage'
import AccountSettings from './components/AccountSettings/accountsettings'
import List from './components/list/index'
import TheFooter from './components/footer/index'
import Navbar from './components/Navbar'
import About from './components/NavbarPages/about'
import listButton from './components/NavbarPages/listButton'
// import ContactUs from './components/FooterPages/contactUs'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import AccountSettings from './components/AccountSettings/accountsettings';
import TheFooter from './components/footer/index';
import contactUs from './components/FooterPages/contactUs';
import Lists from './components/list/index';
import Navbar from './components/Navbar';
import About from './components/NavbarPages/about';
import Homepage from './components/NavbarPages/homepage';
import listButton from './components/NavbarPages/listButton';
import WelcomePage from './components/WelcomePage/welcomepage';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<WelcomePage />} />
        <Route path='/about' exact element={About} />
        {/*<Route path='/aboutus' exact component={ContactUs} />*/}
      </Routes>
      <List />
      <TheFooter />
    </>
  );
}

export default App;
