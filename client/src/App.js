import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'react-router';
import WelcomePage from './components/WelcomePage/welcomepage'
import AccountSettings from './components/AccountSettings/accountsettings'
import List from './components/list/index'
import TheFooter from './components/footer/index'
import Navbar from './components/Navbar'
import About from './components/NavbarPages/about'
import ContactUs from './components/FooterPages/ContactUs/contactUs'


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<WelcomePage />} />
        <Route path='/about' element={<About />} />
        <Route path='/aboutus' element={<ContactUs/>} />
      </Routes>
      <TheFooter />
    </Router>
  );
}

export default App;
