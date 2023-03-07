import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'react-router';
import WelcomePage from './components/WelcomePage/welcomepage'
import SettingsPage from './components/AccountSettings/accountsettings'
import TheFooter from './components/Footer/index'
import Navbar from './components/Navbar'
import About from './components/NavbarPages/about'
import ContactUsPage from './components/FooterPages/ContactUs/index'
import DashboardPage from './components/Dashboard/index';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<WelcomePage />} />
        {/* <Route path='/about' element={<About />} /> */}
        <Route path='/about-us' element={<ContactUsPage/>} />
        <Route path='/dashboard' element={<DashboardPage/>} />
        <Route path='/settings' element={<SettingsPage/>} />
      </Routes>
      <TheFooter />
    </Router>
  );
}

export default App;
