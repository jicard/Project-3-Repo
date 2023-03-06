import { Routes, Route } from 'react-router-dom';
import './App.css';
import React, { Component } from 'react';

import Lists from './components/list/index'
import TheFooter from './components/footer/index'
import Navbar from './components/Navbar'
import Homepage from './components/NavbarPages/homepage'
import About from './components/NavbarPages/about'
import ContactUs from './components/FooterPages/contactUs'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navbar />
        <TheFooter />
        <Routes>
          <Route component={Homepage} path="/" exact />
          <Route component={About} path="/about" />
          <Route component={Lists} path="/lists" />
        </Routes>
      </div>
    );
  }
}

export default App;
