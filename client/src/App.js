import { Routes, Route } from 'react-router-dom';
import './App.css';
import React, { Component } from 'react';
import WelcomePage from './components/WelcomePage/welcomepage'
import AccountSettings from './components/AccountSettings/accountsettings'
import Lists from './components/list/index'
import TheFooter from './components/footer/index'
import Navbar from './components/Navbar'
import Homepage from './components/NavbarPages/homepage'
import About from './components/NavbarPages/about'
import listButton from './components/NavbarPages/listButton'
import ContactUs from './components/FooterPages/contactUs'

function App() {
  return (
    <Router>
      <Navbar />
      <List />
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
