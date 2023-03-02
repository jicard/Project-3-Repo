import List from './components/list'
import './App.css';
import Home from './components/pages/Home';

function App() {
  return (
    <>
    <List />
    <Route path='/' exact component={Home} />
    </>
  );
}

export default App;
