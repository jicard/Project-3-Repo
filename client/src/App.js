import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import WelcomePage from './components/WelcomePage/welcomepage'
import AccountSettings from './components/AccountSettings/accountsettings'
import List from './components/list'
import TheFooter from './components/Footer'
import Navbar from './components/Navbar'
import Homepage from './components/NavbarPages/homepage'
import About from './components/NavbarPages/about'
import listButton from './components/NavbarPages/listButton'
import ContactUs from './components/FooterPages/ContactUs/contactUs'


function App() {
  return (
    <Router>
      <Navbar />
      {/* <List /> */}
        <Routes>
          <Route path='/' element={<WelcomePage />} />
          <Route path='/about' element={<About />} />
          <Route path='/settings' element={<AccountSettings/>} />
          <Route path='/contact-us' element={<ContactUs/>} />
      </Routes>
      <TheFooter />
    </Router>
    
  );
}

export default App;
