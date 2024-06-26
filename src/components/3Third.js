import { useEffect, useRef, useState } from "react";
import { useStato, useStatoset } from "../data/Context";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import { useSpring, animated, easings, useSprings, useInView} from "react-spring";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic, faChampagneGlasses } from "@fortawesome/free-solid-svg-icons";

import basso from "../imma/basso.jpg"
import ice from "../imma/trueTransCat.png"

function Terzo(){

  let stato = useStato()
  let dispatch = useStatoset()

  //we use a different INview from the home.js one, this one is for the pixels
  let [terzo, terzoView] = useInView({
    rootMargin: "0px",
    threshold: 0.2
  })

  //Image icon
  let [ruolo, terApi] = useSprings(stato.barre.length , (i)=> ({
    x: terzoView ? "0%" : i%2 ? "100%" : "-100%",
    config: {mass: 2, friction: 30, tension: 320}
  }), [terzoView])

  //OK SOME GUIDELINES  
  //backgroundPosition is the acrtual sprite frame we are moving
  //frame by frame
  //WALK is the fake movement we syncronize with the moved sprite, its steps
  //dont need to be like the sprite ones, its for smooth movement
  //PROS is just the loadbar, it uses the same values as the pixels
  //but can have different timing

  //This is how we use the easing steps on a pixel animation, to substitute and controll
  //The css version
  let [{backgroundPosition}, posiApi] = useSpring(()=>({
    backgroundPosition: terzoView ? "-574px" : "50px",
    config: { 
      duration: terzoView ? 1500 : 300, 
      easing: easings.steps(13),
    }
  }), [terzoView])

  //EVEN IF THE pixel movement and the line abslute width
  //are both based on the context data, we separate them for different
  //easing, for differrent duration in/out inview
  let [walk, walkApi] = useSprings(stato.barre.length, (i)=>({
    from: {
      views: "0%",
      albums: "0%"
    },
    to: {
      views: terzoView ? `${stato.duo[i].views[1] - 12}%`: "0%", config: {duration: 200},
      albums: terzoView ? `${stato.duo[i].albums[1] - 12}%`: "0%", config: {duration: 200}       
    },
    config: {duration: terzoView ? 1500 : 300, easing: easings.steps(20) }
  }), [terzoView])

  let [pros, prosApi] = useSprings(stato.barre.length ,(i)=>({
    views: terzoView ? `${stato.duo[i].views[1]}%` : "0%",
    albums: terzoView ? `${stato.duo[i].albums[1]}%` : "0%",
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
    <div style={{marginLeft: "22%", height: "100%"}} ref={terzo}>

      <div className="thirdTitle text-secondary flex-column cent-flex justify-content-between justify-content-md-end" 
        style={{ /*paddingTop: "7%"*/ /*,height: "6%"*/ }}>
        <h2 className="text-secondary"> 
          The HarmoNavs <FontAwesomeIcon className="ps-1" icon={faChampagneGlasses} /> 
        </h2>
      </div>

      {/* Mobile design */}
      <div className="d-flex d-sm-none flex-column row mx-0 px-2 col-12 position-relative"
        style={{height: "90vh"}}>

        {/*
          TranslateX() when using percentage moves an element orizontally based on its
          OWN width, while the left will move based on teh entire container
          translateX doesnt change the layout so won't change theother elements' 
        */}
        {stato.duo.map((cont, index)=>(
          <div className={`shortenSect mt-3 row col-12 mx-0 px-0 d-flex ${index%2 ? "justify-content-end" : "justify-content-start"} align-items-start position-relative`}>
            {/* image and title */}
            <div className="position-relative d-flex d-md-none px-0 " style={{top: "2%", width: "100%", height: "25vw", zIndex: 5 }}>

            {/* we can variable interpèolation for property names, only values
            so we use an array 
            so we store the property names in the array and use it with index as index while keeping the animated string value fixed
            or we can put the arrays elements directly on the inline*/}
            <div className="position-absolute" style={{height: "100%", width: "25vw", [["left", "right"][index%2]]: "0%" }}>
              <animated.div className="centered position-absolute" 
                style={{backgroundImage: `url(${cont.photo})`, height: "100%", width: "25vw", [["left", "right"][index%2]]: ruolo[0].x }}>
              </animated.div>

              <div className="cent-flex bg-secondary" style={{width: "25vw", height: "100%"}}>
                <FontAwesomeIcon icon={cont.icon} style={{fontSize: "3em"}}/>
              </div>
            </div>

            <div className={`bg-primary position-absolute text-white text-center flex-column cent-flex`}
              style={{height: "100%", width: "45vw", [["right", "left"][index%2]]: "0%"}}>
              <h3 className="ps-1"> {cont.name} </h3>
              <p className="px-2"> {cont.role}
                <FontAwesomeIcon className="ps-1" icon={cont.icon} />
              </p>
            </div>

          </div>

          {/* actual mobile text container*/}
          <div className="thirdPresent col-11 bg-primary text-white position-absolute px-2" style={{ [["right", "left"][index%2]]: "0%" /*right: "0%"*/ }}>
 
            <div className="shortenText flex-column justify-content-around" style={{fontSize: "0.9em", height: "35%"}}> 
              {cont.desc[0]} 
            </div>

            <div className="d-flex flex-column justify-content-around mt-0 mt-md-2 shortenBar" >

            <div>
              <p className="fw-bold"> Global views: {cont.views[0]} </p>
              <div className="position-relative shortenPixel" style={{height: 26, width: "100%"}}>
              <animated.div className="position-absolute" style={{width: 50, height: 26, left: walk[index].views}}>
                <animated.div style={{height: "100%", width: "100%",
                  backgroundImage: `url(${ice})`,
                  backgroundPosition,
                }}
                >
                </animated.div>
              </animated.div>
              </div>

              <div className="d-flex justify-content-start align-items-center position-relative">
                <div className="bg-secondary" style={{width: "1em", height: "1em", borderRadius: "50%" }}>
                </div>

                <animated.div className="d-flex align-items-center position-absolute bg-secondary"
                  style={{ height: 3, width: pros[index].views }}>
                </animated.div>
              </div>
            </div>

            <div>
              <p className="fw-bold">Albums sold: {cont.albums[0]}</p>
              <div className="position-relative shortenPixel" style={{height: 26, width: "100%"}}>
              <animated.div className="position-absolute" style={{width: 50, height: 26, left: walk[index].albums}}>
                <animated.div style={{height: "100%", width: "100%",
                  backgroundImage: `url(${ice})`,
                  backgroundPosition,
                }}
                >
                </animated.div>
              </animated.div>
              </div>

              <div className="d-flex justify-content-start align-items-center position-relative">
                <div className="bg-secondary" style={{width: "1em", height: "1em", borderRadius: "50%" }}>
                </div>

                <animated.div className="d-flex align-items-center position-absolute bg-secondary"
                  style={{ height: 3, width: pros[index].albums }}>
                </animated.div>
              </div>
            </div>

            </div>
          </div>

          </div>
        ))}

      </div>

      <div className="p-1 mx-2 d-flex d-md-none flex-column justify-content-center bg-secondary text-white" style={{ height: "8%" }}>
        <p><b>West Sound Studio</b></p>
        <p><b>7:30 AM, 1:15 PM, 7:30 PM</b></p>
      </div>
      
      {/* Desktop version */}
      <div className="d-none d-sm-flex align-items-center row col-12 px-2 mx-0" style={{height: "80%"}}>

      {stato.duo.map((cont, index)=>(
        <div className="row col-12 mx-0 px-0 flex-cent position-relative" style={{height: "38vh"}}>

        {/* text for first/ even index elements */}
        <div style={{width: "57vw", height: "inherit", [["left", "right"][index%2]]: "0%" }} 
          className={`position-absolute bg-primary text-white ${index%2 ? "d-flex" : "d-flex" } d-flex flex-column justify-content-around align-items-start`}>
          
          <div>
            <h3>{cont.name}</h3>
            <p> {cont.role} 
              <FontAwesomeIcon className="ps-1" icon={cont.icon} />
            </p>
          </div>

          <p className="pe-4"> {cont.desc[1]} </p>
          
          <div className="d-flex row mx-0 col-12">

            <div className="col-6 px-0">
              <p className="fw-bold"> Global views: {cont.views[0]} </p>
              <div className="position-relative" style={{height: 26, width: "100%"}}>
                <animated.div className="position-absolute" style={{width: 50, height: 26, left: walk[index].views}}>
                  <animated.div style={{height: "100%", width: "100%",
                    backgroundImage: `url(${ice})`,
                    backgroundPosition,
                  }}
                  >
                  </animated.div>
                </animated.div>
              </div>

              <div className="d-flex justify-content-start align-items-center position-relative">
                <div className="bg-secondary" style={{width: "1em", height: "1em", borderRadius: "50%" }}>
                </div>

                <animated.div className="d-flex align-items-center position-absolute bg-secondary"
                  style={{ height: 3, width: pros[index].views }}>
                </animated.div>
              </div>
            </div>

            <div className="col-6 px-0">
              <p className="fw-bold"> Global albums: {cont.albums[0]} </p>
              <div className="position-relative" style={{height: 26, width: "100%"}}>
                <animated.div className="position-absolute" style={{width: 50, height: 26, left: walk[index].albums}}>
                  <animated.div style={{height: "100%", width: "100%",
                    backgroundImage: `url(${ice})`,
                    backgroundPosition,
                  }}
                  >
                  </animated.div>
                </animated.div>
              </div>

              <div className="d-flex justify-content-start align-items-center position-relative">
                <div className="bg-secondary" style={{width: "1em", height: "1em", borderRadius: "50%" }}>
                </div>

                <animated.div className="d-flex align-items-center position-absolute bg-secondary"
                  style={{ height: 3, width: pros[index].albums }}>
                </animated.div>
              </div>
            </div>

          </div>

        </div>
        {/* animated image direction depending on index*/}
        <div className="px-0 position-absolute" style={{width: "20vw", height: "inherit", [["right", "left"][index%2]]: "0%" }}>
          <div className="bg-primary text-primary d-flex align-items-center" style={{width: "100%", height: "100%" }}>
          
            <animated.div className="centered position-absolute" 
              style={{backgroundImage: `url(${basso})`, height: "38vh", width: "20vw", [["right", "left"][index%2]]: ruolo[0].x }}>
            </animated.div>

            <div className="cent-flex" 
              style={{width: "20vw", height: "38vh", backgroundColor: "purple"}}>
              <FontAwesomeIcon icon={faMusic} style={{fontSize: "3em"}}/>
            </div>
          
          </div>
        </div>

        </div>
      ))}
      </div>

    </div>
  )
}

export default Terzo;