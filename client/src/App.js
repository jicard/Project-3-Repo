import List from './components/list'
import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/NavbarPages/homepage'
import About from './components/NavbarPages/about'
import listButton from './components/NavbarPages/listButton'

function App() {
  return (
    <Router>
      <Navbar />
      <List />
        <Routes>
          <Route path='/' exact component={Homepage} />
          <Route path='/about' exact component={About} />
      </Routes>
    </Router>
  );
}

export default App;
