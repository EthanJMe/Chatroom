import { Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"

function NavBar() {
    return (
        <div>
            <Navbar>
                <h3><Link to='/'>Home</Link></h3>
                <h3><Link to ='/Chats'>Chats</Link></h3>
                <h3><Link to ='/About'>About</Link></h3>
                <h3>User</h3>
            </Navbar>
        </div>
    )
}

export default NavBar
