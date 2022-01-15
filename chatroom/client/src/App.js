import './css/App.css';
import {Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import baseChat from './pages/baseChat'
import About from './pages/About'
import 'bootstrap/dist/css/bootstrap.min.css';
import TopNavBar from './navbars/TopNavBar';
import BottomNavBar from './navbars/BottomNavBar';
import Footer from './navbars/footer';
import ContactUsBody from './pages/Contact';
import LoginPage from './pages/LoginPage';

import * as api from './api/index';

function App() {
  return (
    <>
    <TopNavBar/>
    <button onClick = {() => api.testGet()}>Test Get</button>
    <button onClick = {() => api.testPost()}>Test Post</button>
    <BottomNavBar/>
    <Switch>
    <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/Chat'>
        <baseChat />
      </Route>
      <Route exact path='/About'>
        <About />
      </Route>
      <Route exact path='/Contact'>
      <ContactUsBody/>
      </Route>
      <Route exact path = "/User">
        <LoginPage/>
      </Route>
      <Route exact path="/Rooms">
      
      </Route>
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
