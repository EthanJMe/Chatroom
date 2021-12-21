import { Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"
import chatwareLogo from './assets/chatwareLogo.png'

function NavBar() {
   let Logo = chatwareLogo
    return (
        <div>
            <Navbar className="topNav">
                <Link className="LogoCenter" to='/'><img  src={Logo} alt = ''/></Link>
                <Link to = '/User'><div className="circle">User</div></Link>
            </Navbar>
        </div>
    )
}

export default NavBar
