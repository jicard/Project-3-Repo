import List from './components/list'
import './App.css';
import Home from './pages/Home';
import { Route } from 'react-router-dom';

function App() {
  return (
    <>
    <List />
    <Route path='/' exact component={Home} />
    </>
  );
}

export default App;
