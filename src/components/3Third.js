import { useEffect, useRef, useState } from "react";
import { useStato, useStatoset } from "../data/Context";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import { useSpring, animated, easings, useSprings, useInView} from "react-spring";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from "@fortawesome/free-solid-svg-icons";

import basso from "../imma/basso.jpg"
import ice from "../imma/ice.png"

function Terzo(){

  let stato = useStato()
  let dispatch = useStatoset()

  let [terzo, terzoView] = useInView({
    rootMargin: "0px",
    threshold: 0.3
  })

  //Image icon
  let [ruolo, terApi] = useSprings(stato.barre.length , (i)=> ({
    x: terzoView ? "0%" : i%2 ? "100%" : "-100%",
    config: {mass: 2, friction: 30, tension: 320}
  }), [terzoView])

  //This is how we use the easing steps on a pixel animation, to substitute and controll
  //The css version
  let [{backgroundPosition}, posiApi] = useSpring(()=>({
    backgroundPosition: terzoView ? "-145px" : "50px",
    config: { 
      duration: terzoView ? 1000 : 300, 
      easing: easings.steps(4),
    }
  }), [terzoView])

  let [walk, walkApi] = useSprings(stato.barre.length, (i)=>({
    //x: terzoView ? stato.barre[i] : 0,

    from: {x: 0},
    to: {x: terzoView ? stato.barre[i] : 0, config: {duration: 200} },

    config: {duration: terzoView ? 1000 : 300, easing: easings.steps(20) }
  }), [terzoView])


  let [pros, prosApi] = useSprings(stato.barre.length ,(i)=>({
    width: terzoView ? stato.barre[i] : 0 ,
    config: {duration: 1000}
  }), [terzoView])

  //THE COL-12 will cover the 100% of the current aviable space, 
  return(   
    <div style={{marginLeft: "22%", height: "100vh"}} ref={terzo}>

      <div style={{paddingTop: "5vh"}}>
        <h1>This is the duo</h1>
      </div>

      <div className="d-flex justify-content-center row mx-0 col-12">

        <div className="col-12 row mx-0 px-1 d-flex align-items-center" style={{height: "40vh"}}>

          <div className="col-4 px-0" style={{height: "100%"}}>
            <div className="d-flex justify-content-center align-items-center position-relative" style={{overflow: "hidden", borderLeft: "2px solid red"}}>
              <div className="d-flex justify-content-center align-items-center" style={{width: "100%", height: "40vh", backgroundColor: "purple" }}>
                <FontAwesomeIcon icon={faMusic} style={{fontSize: "5em"}}/>
              </div>

              <animated.div className="position-absolute centered" 
                style={{width: "100%", height: "40vh", left: ruolo[0].x ,backgroundImage: `url(${basso})` }}>
              </animated.div>
            </div>  
          </div>
          <div className="col-8">
            <h3>Watt Watterson</h3>
            <p>Lorem ipsum dolor sit amet consectetur. 
              <FontAwesomeIcon icon={faMusic} />
            </p>

            <animated.div style={{width: 50, height: 50, x: walk[0].x}}>
              <animated.div style={{height: "100%", width: "100%",
                backgroundImage: `url(${ice})`,
                backgroundPosition,
              }}
              >
              </animated.div>
            </animated.div>

            <div className="d-flex justify-content-start align-items-center position-relative">
              <div style={{width: "1em", height: "1em", borderRadius: "50%", backgroundColor: "red" }}>
              </div>

              <div className="d-flex align-items-center position-absolute">
                <animated.div style={{height: 3, width: pros[0].width, backgroundColor: "red", transformOrigin: "right" }}>
                </animated.div>
              </div>
            </div>
          </div>

        </div>


        <div className="col-12 row mx-0 mt-3" style={{height: "30vh"}}>
          <div className="col-8">
            <h3>Watt Watterson</h3>
            <p>Lorem ipsum dolor sit amet consectetur. 
              <FontAwesomeIcon icon={faMusic} />
            </p>

            <animated.div style={{width: 50, height: 50, x: walk[1].x}}>
              <animated.div style={{height: "100%", width: "100%",
                  backgroundImage: `url(${ice})`,
                  backgroundPosition,
                }}
              >
              </animated.div>
            </animated.div>

            <div className="d-flex justify-content-start align-items-center position-relative">
              <div style={{width: "1em", height: "1em", borderRadius: "50%", backgroundColor: "red" }}>
              </div>

              <div className="d-flex align-items-center position-absolute">
                <animated.div style={{height: 3, width: pros[1].width, backgroundColor: "red" }}>
                </animated.div>
              </div>
            </div>

          </div>
          <div className="col-4">
            <div className="d-flex justify-content-center align-items-center position-relative" style={{overflow: "hidden", borderRight: "2px solid red"}}>
              <div className="d-flex justify-content-center align-items-center" style={{width: "100%", height: "40vh", backgroundColor: "purple" }}>
                <FontAwesomeIcon icon={faMusic} style={{fontSize: "5em"}}/>
              </div>

              <animated.div className="position-absolute centered" 
                style={{width: "100%", height: "40vh", left: ruolo[1].x  ,backgroundImage: `url(${basso})` }}>
              </animated.div>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Terzo;