import Particles from 'react-tsparticles';


const ParticleBackground = () => {
    return <div className="particle-background">
        <Particles
        options={{
            "background": {
              "color": {
                "value": ""
              },
              
              "repeat": "no-repeat",
              "size": "cover"
            },
            "fullScreen": {
              "zIndex": 0
            },
            "detectRetina": false,
            "fpsLimit": 30,
            "interactivity": {
              "events": {
                "onClick": {
                "enable": true,
                  "mode": "grab"
                },
                "onDiv": {
                  "selectors": "#repulse-div",
                  "mode": "repulse"
                },
                "onHover": {
                  "enable": true,
                  "mode": "bubble"
                }
              },
              "modes": {
                "bubble": {
                  "distance": 400,
                  "duration": 6,
                  "opacity": .5,
                  "size": 10,
                },
                "grab": {
                  "distance": 400
                },
                "slow": {
                  "factor": 8,
                  "radius": 1
                }
              }
            },
            "particles": {
              "collisions": {
                "enable": true,
                },
              "color": {
                "value": "#ffffff"
              },
              "links": {
                "color": {
                  "value": "#ffffff"
                },
                "distance": 200,
                "enable": true,
                "opacity": 0.4
              },
              "move": {
                "attract": {
                  "rotate": {
                    "x": 1200,
                    "y": 1200
                  }
                },
                "enable": true,
                "outModes": {
                  "default": "bounce",
                  "bottom": "bounce",
                  "left": "bounce",
                  "right": "bounce",
                  "top": "bounce"
                },
                "speed": .3
              },
              "number": {
                "density": {
                  "area": 80
                },
                "value": 200
              },
              "opacity": {
                "value": {
                  "min": .3,
                  "max": .3
                },
                "animation": {
                  "enable": true,
                  "minimumValue": .3
                }
              },
              "size": {
                "random": {
                  "enable": true,
                  "minimumValue": 1
                },
                "value": 1,
                "animation": {
                  "speed": 40,
                  "minimumValue": 0.1
                }
              }
            },
            // "polygon": {
            //   "draw": {
            //     "enable": true,
            //     "stroke": {
            //       "color": {
            //         "value": "rgba(255,255,255,0.2)"
            //       },
            //       "width": 0.5,
            //       "opacity": 0.2
            //     }
            //   },
            //   "enable": true,
            //   "inline": {
            //     "arrangement": "equidistant"
            //   },
            //   "move": {
            //     "radius": 10,
            //     "type": "path"
            //   },
            //   "scale": 0.5,
            //   "type": "inline",
             
            // }
          }}
        />
    </div>
}

export default ParticleBackground