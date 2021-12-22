import './App.css';
import {Route, Switch} from 'react-router-dom'
import Home from './bodies/Home'
import Chat from './bodies/Chat'
import About from './bodies/About'
import 'bootstrap/dist/css/bootstrap.min.css';
import TopNavBar from './navbars/TopNavBar';
import BottomNavBar from './navbars/BottomNavBar';
import Footer from './navbars/footer';
import ContactUsBody from './bodies/Contact';

function App() {
  return (
    <>
    <TopNavBar/>
    <BottomNavBar/>
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
      <Route exact path = "/Contact">
        <ContactUsBody/>
      </Route>
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
