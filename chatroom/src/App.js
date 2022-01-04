import './App.css';
import {Route, Switch} from 'react-router-dom'
import Home from './Home'
import Chat from './Chat'
import About from './About'
import 'bootstrap/dist/css/bootstrap.min.css';
import TopNavBar from './TopNavBar';
import BottomNavBar from './BottomNavBar';
import Footer from './footer';
import ContactUsBody from './Contact';
import LoginPage from './LoginPage';
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
      <Route exact path='/Contact'>
      <ContactUsBody/>
      </Route>
      <Route exact path = "/User">
        <LoginPage/>
      </Route>
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
