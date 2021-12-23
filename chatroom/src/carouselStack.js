import GamesCarousel from './carouselGames';
import PlatformsCarousel from './carousePlatforms';
import HardwareCarousel from './carouselHardware';
import { Row, Col } from 'react-bootstrap';
import { carouselContentGames, carouselContentHardware, carouselContentPlatforms} from './carouselContent';


function CarouselStack () {
    return (
        <Col>
            <Row>
                <GamesCarousel content={carouselContentGames}/>
            </Row>
            <Row>
                <HardwareCarousel content={carouselContentHardware}/>
            </Row>
            <Row>
                <PlatformsCarousel content={carouselContentPlatforms}/>
            </Row>
        </Col>
    )
}

export default CarouselStack