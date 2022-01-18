import './css/App.css';
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import BaseChat from './pages/baseChat'
import About from './pages/About'
import 'bootstrap/dist/css/bootstrap.min.css';
import TopNavBar from './navbars/TopNavBar';
import BottomNavBar from './navbars/BottomNavBar';
import Footer from './navbars/footer';
import ContactUsBody from './pages/Contact';
import LoginPage from './pages/LoginPage';
import {getTestData, postTestData} from './actions/index.js';
import {useDispatch} from 'react-redux';

import * as api from './api/index';

function App() {
  const dispatch = useDispatch()
  return (
    <>
      <TopNavBar />
      <button onClick = {dispatch(getTestData)}>Test Get</button>
      <button onClick= {dispatch(postTestData)}>Test Post</button>
      <BottomNavBar />
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
    </>
  );
}

export default App;
