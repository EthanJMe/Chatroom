import './App.css';
import {Route, Switch} from 'react-router-dom'
import Home from './Home'
import Chat from './Chat'
import About from './About'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar';

function App() {
  return (
    <>
    <NavBar/>
    <Switch>
    <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/Chat'>
        <Chat />
      </Route>
      <Route exact path='/About'>
        <About />
      </Route>
      </Switch>
    </>
  );
}

export default App;
