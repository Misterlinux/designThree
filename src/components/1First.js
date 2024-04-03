import { useState } from "react";
import { useSpring, useSprings, animated, useInView} from "react-spring";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAstronaut, faCompactDisc, faMotorcycle } from "@fortawesome/free-solid-svg-icons";

import single from "../imma/single.jpg"
import singlesec from "../imma/singleCover.jpg"

function Primo(){

  let star = "Kai Ashen"
  let [nome, setNome] = useState(star.split("")) 

  let [ref, inView] = useInView({
    threshold: 0.3,
    rootMargin: "0px"
  })

  let horin = useSpring({
    x: inView ? "20%" : "100%"
  })

  let toppo = useSpring({
    y: inView ? 0 : -200,
    left: inView ? "48vh" : "0vh",
    width: inView ? "30vw" : "0vw",
    config:{
      duration: 1500
    }
  })
  
  //Text digits animated if onView
  let [mosso, mossoApi] = useSprings(nome.length, (i)=>({
    from: { top: 0 },
    to: inView ? [
      {top: 15},
      {top: -15},
      {top: 5},
      {top: -5},
      {top: 0}
    ] :
    {
      top: 0
    },
    delay: inView ? (i * 200) : 10,
    config: {
      duration: inView ? 400 : 10,
    }

  }), [inView])

  //we use nowrap on the expanding text animated div
  //We "adampt" the animation margin by media query subtracting the margin
  return(
    <div className="d-flex row unoParallax" ref={ref}>
      
      <animated.div className="barraintro bg-secondary text-primary d-flex justify-content-start align-items-center position-absolute" 
        style={{x: horin.x }}>
        <h2 className="text-white"> 
          Check our program 
          <FontAwesomeIcon className="ps-2" icon={faUserAstronaut}/>  
        </h2>
      </animated.div>
      
      <div className="col-11 d-flex flex-column position-relative">

        <animated.div className="barraTour py-2 px-1 d-none d-md-flex flex-column position-absolute text-primary bg-secondary" 
          style={{left: toppo.left, width: toppo.width}}>
          <h4>On tour <FontAwesomeIcon icon={faMotorcycle}/></h4>
          <h4>Top 10 at BillBoard 100 <FontAwesomeIcon icon={faCompactDisc}/></h4>
        </animated.div>


        <div className="cent-flex position-relative single">

        {/* red background on image */}
        <div className="position-absolute bg-danger single" style={{ marginTop: 0 }}>
        </div>
        {/* The image is the background */}
        <div className="position-relative singlepresent" 
          style={{ backgroundImage: `url(${single})`}}>
          {/* Top left absolute square border */}
          <animated.div className="bg-primary position-absolute"
            style={{ height: "10vh", width: "10vh", marginLeft: "-15px", marginTop: "-15px", zIndex: -5, y: toppo.y }}>
          </animated.div>
          {/* section bottom right */}
          <div className="position-relative singletext">

            <div className="d-flex row col-12 mx-0 bg-primary text-secondary">
              <div className="singlesecond" style={{backgroundImage: `url(${singlesec})`}}>
              </div>

              <div className="singlename px-0 cent-flex">
                <div className="text-secondary cent-flex">

                  {nome.map((cont, index)=>(
                    <animated.h1 className="cent-flex position-relative pb-1" key={index}
                      style={{width: "0.7em", height: "1em", top: mosso[index].top }}>
                      {cont}
                    </animated.h1>)
                  )}

                </div>
              </div>
            </div>

            <div className="p-2 p-md-3 bg-secondary text-white">
              <p>
                Lorem11 ipsum dolor sit, amet consectetur adipisicing elit. 
                Aliquam voluptatibus repellendus reprehenderit quaerat 
                consequuntur molestias culpa, ipsa tempora, accusantium qui 
                voluptas possimus aspernatur rem pariatur eligendi.
              </p>
              
              <div className="d-block d-md-none pt-3">
                <p><b>Place</b> : East Theatre/ 1200 avaiable seats</p>
                <p><b>Hour</b>: 10:00 PM/ 4:30 PM</p>
              </div>
            </div>

          </div>

        </div>

        </div>


      </div>
    </div>
  )
}

export default Primo;