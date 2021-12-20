import { Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"

function BottomNavBar() {
    return (
        <div>
            <Navbar className="bottomNav">
                <Link className="space" to = "/Rooms"><h2>Rooms</h2></Link>
                <Link className="space" to = "/About"><h2>About Us</h2></Link>
                <Link className="space" to = "/Contact"><h2>Contact</h2></Link>
            </Navbar>
        </div>
    )
}

export default BottomNavBar