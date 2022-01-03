import ethan from "./assets/Ethan.png"
import solomon from "./assets/solomon1.jpg"
import dustin from "./assets/dustin.jpg"
import { Container, Row, Col } from "react-bootstrap"


function About() {
    return (
        <div>
            <Container fluid className='bg-1'>
                
                <Row className="justify-content-md-center">
                    <Col xs lg="6">
                        <div class='box'>
                            <img src={ethan} alt='done with mondays' className="pics" />
                            <img src={solomon} alt='i never look like this' className="pics" />
                            <img src={dustin} alt='he is a badass and he knows it' className="pics" />
                            <div class='title'>
                                <h3>About Us</h3>
                            </div>
                         
                            <p>A group of computer enthusiasts from Wyoming and
                                Nebraska, Ethan, Dustin, and Solomon all enjoy
                                discussing computers.
                                <br/>
                               
                            </p>
                            </div>
                    </Col>

                </Row>
               
                        
                           
                        

                    
                
            </Container>
        </div>
    )
}

export default About 