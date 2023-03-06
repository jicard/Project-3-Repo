import React, { Component } from 'react';
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
    <Router>
      <Navbar />
      <Lists />
      <TheFooter />
      <Routes>
          <Route path='/' exact component={Homepage} />
          <Route path='/about' exact component={About} />
          {/*<Route path='/aboutus' exact component={ContactUs} />*/}
      </Routes>
    </Router>
  );
}

export default App;
