import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import WelcomePage from './components/WelcomePage/welcomepage'
import List from './components/list'
import TheFooter from './components/Footer'
import Navbar from './components/Navbar'
import Homepage from './components/NavbarPages/homepage'
import About from './components/NavbarPages/about'
import listButton from './components/NavbarPages/listButton'
import ContactUs from './components/FooterPages/contactUs'
import AccountSettings from './components/AccountSettings/accountsettings'

function App() {
  return (
    <Router>
      <Navbar />
      <AccountSettings/>
      <List />
      <TheFooter />
        <Routes>
          <Route path='/' exact component={WelcomePage} />
          <Route path='/about' exact component={About} />
          {/*<Route path='/aboutus' exact component={ContactUs} />*/}
          <Route path='/settings' exact component={AccountSettings} />
      </Routes>
    </Router>
  );
}

export default App;
