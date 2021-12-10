import { Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"

function navBar() {
    return (
        <div>
            <Navbar>
                <h3><Link>Home</Link></h3>
                <h3><Link>Chats</Link></h3>
                <h3><Link>About</Link></h3>
                <h3><Link>User</Link></h3>
            </Navbar>
        </div>
    )
}

export default navBar
