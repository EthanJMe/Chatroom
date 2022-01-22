import './css/App.css';
import { Route, Switch, Link } from 'react-router-dom'
import Home from './pages/Home'
import BaseChat from './pages/baseChat'
import About from './pages/About'
import UserPage from './pages/userPage'
import 'bootstrap/dist/css/bootstrap.min.css';
import TopNavBar from './navbars/TopNavBar';
import BottomNavBar from './navbars/BottomNavBar';
import Footer from './navbars/footer';
import ContactUsBody from './pages/Contact';
import LoginPage from './pages/LoginPage';
import { Col, Row, Container, Button, Form } from "react-bootstrap"
import { getTestData, postTestData } from './actions/index.js';
import { useDispatch } from 'react-redux';

import * as api from './api/index';
import ParticleBackground from './pages/ParticleBackground'
import chatContent from './content';



function App() {
  const dispatch = useDispatch()
  return (
    
      <div fluid className="bg-1">
        <ParticleBackground></ParticleBackground>
        <div className="">
          <TopNavBar />
          <button onClick={() => api.testGet()}>Test Get</button>
          <button onClick={() => api.testPost()}>Test Post</button>
          <button><Link className="space" to="/profile">Profile</Link></button>
          <BottomNavBar />
          <Switch>
            <Route exact path='/profile'>
              <UserPage />
            </Route>
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
              <ContactUsBody />
            </Route>
            <Route exact path="/User">
              <LoginPage />
            </Route>
            <Route path="/Rooms/:index">
              <BaseChat chatContent = {chatContent}/>
            </Route>
          </Switch>
          <Footer />
        </div>
      </div>
    


  );
}

export default App;
