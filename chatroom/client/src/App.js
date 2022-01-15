import './css/App.css';
import {Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import BaseChat from './pages/baseChat'
import About from './pages/About'
import 'bootstrap/dist/css/bootstrap.min.css';
import TopNavBar from './navbars/TopNavBar';
import BottomNavBar from './navbars/BottomNavBar';
import Footer from './navbars/footer';
import ContactUsBody from './pages/Contact';
import LoginPage from './pages/LoginPage';
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
      <BaseChat/>
      </Route>
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
