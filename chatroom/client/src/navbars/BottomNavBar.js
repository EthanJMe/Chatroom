import { Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"
import Rooms from '../assets/Rooms.png'
import About from '../assets/About.png'
import Contact from '../assets/Contact.png'

function BottomNavBar() {
    return (
        <div>
            <Navbar className="topNav top">
            <Link className="LogoCenter" to='/ChatRooms'><img className="navLink" src={Rooms} alt = ''/></Link>
            <Link className="LogoCenter" to='/About'><img className="navLink" src={About} alt = ''/></Link>
            <Link className="LogoCenter" to='/Contact'><img className="navLink" src={Contact} alt = ''/></Link>
            </Navbar>
        </div>
    )
}

export default BottomNavBar
