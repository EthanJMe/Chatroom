import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { carouselContentHardware } from './carouselContent';


function HardwareCarousel({content}) {
  return (
    <div className="carousel-container">
      <Carousel fade>
        {content.map((item, index) => {
          return (
              <Carousel.Item>
                <Link>
                <img
                  className="d-block w-100"
                  src={item.carouselImg}
                  alt="First slide"
                />
                </Link>
                <Carousel.Caption>
                  <h3>{item.carouselTitle}</h3>
                  <p>{item.carouselCaption}</p>
                </Carousel.Caption>
              </Carousel.Item>
          )
        })}
      </Carousel>

    </div>
  )
}

export default HardwareCarousel
