import nvidia from '../assets/nvidia.png';
import razr from '../assets/razr.png';
import alienware from '../assets/alienware.png';
import steam from '../assets/steam.png';
import xbox from '../assets/xbox.png';
import playstation from '../assets/playstation.jpg';
import eldenRing from '../assets/eldenRing.png';
import halo from '../assets/halo.jpg';
import battlefield from '../assets/battlefield.jpg';

let carouselContentPlatforms = [
    {
        carouselImg: steam,
        carouselCaption: "The most comprehensive game library on PC",
        carouselTitle: "Steam"
    },
    {
        carouselImg: playstation,
        carouselCaption: "The home console from Sony Entertainment",
        carouselTitle: "PlayStation"
    },
    {
        carouselImg: xbox,
        carouselCaption: "The home console from Microsoft",
        carouselTitle: "XBox"
    }
]

let carouselContentGames = [
    {
        carouselImg: eldenRing,
        carouselCaption: "Newest RPG from FromSoftware",
        carouselTitle: "Elden Ring"
    },
    {
        carouselImg: halo,
        carouselCaption: "Master Chief returns in Halo Infinite",
        carouselTitle: "Halo Infinite"
    },
    {
        carouselImg: battlefield,
        carouselCaption: "Go to war in the newest installment from EA",
        carouselTitle: "Battlefield 2042"
    }
]

let carouselContentHardware = [
    {
        carouselImg: nvidia,
        carouselCaption: "One of the best in PC graphics",
        carouselTitle: "Nvidia"
    },
    {
        carouselImg: razr, 
        carouselCaption: "For all equipment needs",
        carouselTitle: "Razr"
    },
    {
        carouselImg: alienware, 
        carouselCaption: "Building gaming PCs since 1996",
        carouselTitle: "AlienWare"
    }
]



export { carouselContentGames, carouselContentPlatforms, carouselContentHardware }
// export default carouselContentGames