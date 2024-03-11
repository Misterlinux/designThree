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
  //rememeber that the space is 78vw in total for teh side column

  //For the position absolute we need the Absolute image to be before its relative one
  //if not the 2 will overlay
  //Position absolute elements TAKEN OUYT OF document flow, they dont modify
  //so if its forst on teh container it will overlay with teh next (that wont change due to it)
  //and if placed below it will start from the end of the previous, without overlaying
  return(   
    <div style={{marginLeft: "22%", height: "100vh"}} ref={terzo}>

      <div style={{paddingTop: "5vh"}}>
        <h1>This is the duo</h1>
      </div>

      <div className="d-flex justify-content-center align-items-center row mx-0 px-2 col-12 mt-5">

        <div className="row col-12 mx-0 px-0 d-flex justify-content-start align-items-start position-relative" style={{height: "40vh"}}>
          <div className="position-relative d-flex px-0" 
            style={{top: "2%", width: "100%", height: "30vw", zIndex: 5 }}>
            <div style={{height: "100%", width: "30vw" }}>
              
              <animated.div className="thirdImage position-absolute" 
                style={{backgroundImage: `url(${basso})`, height: "100%", width: "30vw", left: ruolo[0].x}}>
              </animated.div>

              <div className="d-flex justify-content-center align-items-center" 
                style={{width: "30vw", height: "100%", backgroundColor: "purple"}}>
                <FontAwesomeIcon icon={faMusic} style={{fontSize: "3em"}}/>
              </div>
            </div>

            <div className="bg-success text-white text-start d-flex flex-column justify-content-center align-items-center" 
              style={{height: "100%", width: "45vw"}}>
              <h3 className="ps-1">Watt Watterson</h3>
              <p>The main member
                <FontAwesomeIcon icon={faMusic} />
              </p>
            </div>
          </div>

          <div className="col-10 bg-success position-absolute px-2" 
            style={{height: "90%", top: "0%", right: "0%", paddingTop: "calc(30vw + 4%)"}}>
 
            <p> Bandinst of teh group, expert in drumns and ready to show his new drum </p>

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


        <div className="row col-12 mx-0 px-0 d-flex justify-content-end align-items-start position-relative" style={{height: "40vh"}}>
          <div className="position-relative d-flex px-0"
            style={{top: "2%", width: "100%", height: "30vw", zIndex: 5 }}>

            <div className="bg-success text-white d-flex flex-column justify-content-center align-items-center" 
              style={{height: "100%", width: "45vw"}}>
              <h3 className="ps-1">Watt Watterson</h3>
              <p>The main member
                <FontAwesomeIcon icon={faMusic} />
              </p>
            </div>

            <div style={{height: "100%", width: "30vw" }}>
              <animated.div className="thirdImage position-absolute" 
                style={{backgroundImage: `url(${basso})`, height: "100%", width: "30vw", right: ruolo[0].x}}>
              </animated.div>

              <div className="d-flex justify-content-center align-items-center" 
                style={{width: "30vw", height: "100%", backgroundColor: "purple"}}>
                <FontAwesomeIcon icon={faMusic} style={{fontSize: "3em"}}/>
              </div>
            </div>

          </div>

          <div className="col-10 bg-success position-absolute px-2" 
            style={{height: "90%", top: "0%", left: "0%", paddingTop: "calc(30vw + 2%)"}}>

            <p> Bandinst of teh group, expert in drumns and ready to show his new drum </p>

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

      </div>

    </div>
  )
}

export default Terzo;