import { Navbar } from "react-bootstrap"

function footer() {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth' // for smoothly scrolling
        });
      };
    
    return (
        <div>
            <Navbar className="bottomNav fixed-bottom">
                <button onClick={scrollToTop} className="space unButton">back to top</button>
            </Navbar>
        </div>
    )
}

export default footer
