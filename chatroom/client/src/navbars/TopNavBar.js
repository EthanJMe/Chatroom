import { Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"
import chatwareLogo from '../assets/chatwareLogoElectric.png'
import avatar from '../assets/placeholder.png'

function NavBar() {
   let Logo = chatwareLogo
    return (
        <div>
            <Navbar className="header top">
                <Link className="LogoCenter" to='/'><img  src={Logo} alt = ''/></Link>
                <Link to = '/User'><div className="circle"><img className='avatar' src={avatar} alt = ''/></div></Link>
            </Navbar>
        </div>
    )
}

export default NavBar
