import './App.css';
import Route from 'react-router-dom'
import Home from './Home'
import Chat from './Chat'
import About from './About'
import 'bootstrap/dist/css/bootstrap.min.css';
import navBar from './navBar';

function App() {
  return (
    <>
    <navBar/>
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
