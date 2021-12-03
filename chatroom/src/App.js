import './App.css';
import Route from 'react-router-dom'
import Home from './Home'
import Chat from './Chat'
import About from './About'

function App() {
  return (
    <>
    <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/Chat'>
        <Chat />
      </Route>
      <Route exact path='/About'>
        <About />
      </Route>
    </>
  );
}

export default App;
