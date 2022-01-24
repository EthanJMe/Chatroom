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
            "value": "#f0ffff"
          },
          "links": {
            "color": {
              "value": "#f0ffff"
            },
            "distance": 200,
            "enable": true,
            "opacity": 1
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
              "area": 200
            },
            "value": 100
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
      }}
    />
  </div>
}

export default ParticleBackground