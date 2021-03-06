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
import ParticleBackground from './pages/ParticleBackground'
import chatContent from './content';
import SignUp from './pages/SignUp';
import EditUser from './pages/EditUserPage';
import ChatList from './pages/ChatList';



function App() {
  return (
    
      <div fluid className="bg-1">

        <div className="">
          <TopNavBar />
          <BottomNavBar />
          <Switch>
          <Route exact path='/userStats'>
              <userStats/>
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
            <Route path="/Rooms/:index">
              <BaseChat chatContent = {chatContent}/>
            </Route>
            <Route exact path="/ChatRooms">
              <ChatList/>
            </Route>
          </Switch>
          <Footer />
          <ParticleBackground className='particle-background'></ParticleBackground>
        </div>
        
      </div>
    


  );
}

export default App;
