import './css/App.css';
import { Route, Switch, Link } from 'react-router-dom'
import Home from './pages/Home'
import BaseChat from './pages/baseChat'
import About from './pages/About'
import UserPage from './pages/UserPage'
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
import EditUser from './pages/EditUserPage';
import SignUp from './pages/SignUp.js';
import UserStats from './pages/UserStats.js'



function App() {
  const dispatch = useDispatch()
  return (
    <>
      <div fluid className="bg-1">

        <div className="">
          <TopNavBar />
          <button onClick={() => api.testGet()}>Test Get</button>
          <button onClick={() => api.testPost()}>Test Post</button>
          <button><Link className="space" to="/Profile">Profile</Link></button>
          <BottomNavBar />
          <Switch>
          <Route exact path='/userStats'>
              <UserStats />
            </Route>
            <Route exact path='/SighUp'>
              <SignUp />
            </Route>
            <Route exact path='/EditUser'>
              <EditUser />
            </Route>
            <Route exact path='/Profile'>
              <UserPage />
            </Route>
            <Route exact path='/'>
              <Home />
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
            <Route exact path="/Rooms">
              <BaseChat />
            </Route>
          </Switch>
          <Footer />
        </div>
        <ParticleBackground></ParticleBackground>
      </div>
    </>



  );
}

export default App;
