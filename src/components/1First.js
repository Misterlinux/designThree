import { useRef, useEffect, useState } from "react";
import { useStato, useStatoset } from "../data/Context";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useSpring, useSprings, animated, useInView, easings} from "react-spring";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAstronaut, faCompactDisc, faMotorcycle } from "@fortawesome/free-solid-svg-icons";

import single from "../imma/single.jpg"
import singlesec from "../imma/singleCover.jpg"

function Primo(){

  let stato = useStato()
  let dispatch = useStatoset()

  let star = "Kai Ashen"
  let [nome, setNome] = useState(star.split("")) 

  useEffect(()=>{

    //console.log( nome.length )
  })

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
  
  //what differenciated the different looped animated elements its delay, 
  //but duration is the actual single animated duration for each

  //also for some reason the initial value of the background was set
  //to the TO value of the ending point
  //we prefered usingg fixed numbers instead of the variable to avoid
  //issued when doing the + 180 complementary hue
  let [mosso, mossoApi] = useSprings(nome.length, (i)=>({
    from: {
      //backgroundColor: `hsl( 120 , 100%, 36%)`,
      top: 0
    },
    to: inView ? [
      {/*backgroundColor: `hsl( 220 , 100%, 36%)`,*/ top: 15},
      {/*backgroundColor: `hsl( 300 , 100%, 36%)`,*/ top: -15},
            {/*backgroundColor: `hsl( 220 , 100%, 36%)`,*/ top: 5},
      {/*backgroundColor: `hsl( 300 , 100%, 36%)`,*/ top: -5},
      {/*backgroundColor: `hsl( 120 , 100%, 36%)`,*/ top: 0}
    ] :
    {
      //backgroundColor: `hsl( 120, 100%, 36%)`,
      top: 0
    },
    delay: inView ? (i * 200) : 10,
    config: {
      duration: inView ? 400 : 10,
      loop: 2,
      //easing: easings.steps(1)
    }

  }), [inView])


  //WE can obtain the dual square effect using double position absolute on a background Relative, 
  //also if using margin only margin-left/top will work while if using 
  //position on absolute all 4 will work

  //ok so, if we wwant an element to be absolute BETWEEN paralaxKayerswe cant use a position-relative for its container
  //REMEMBER THe old reliable white-space: nowrap when expanding the space for a width 
  //The marginLeft was 28% 
  return(
    <div className="d-flex row unofirst" ref={ref} style={{width: "70%", height: "100vh", overflow: "hidden" }}>
      
      <animated.div className="bg-secondary text-primary d-flex justify-content-start align-items-center position-absolute barraintro" 
        style={{x: horin.x }}>
        <h2 className="text-white"> 
          Check our program 
          <FontAwesomeIcon className="ps-2" icon={faUserAstronaut}/>  
        </h2>
      </animated.div>
      
      <div className="col-11 d-flex flex-column position-relative">

      <animated.div className="py-2 px-1 d-none d-md-flex flex-column justify-content-center position-absolute text-primary bg-secondary" 
        style={{whiteSpace: "nowrap", left: toppo.left, top: "12vh", width: toppo.width, overflowX: "hidden"}}>
        <h4>On tour <FontAwesomeIcon icon={faMotorcycle}/></h4>
        <h4>Top 10 at BillBoard 100 <FontAwesomeIcon icon={faCompactDisc}/></h4>
      </animated.div>

      <div className="d-flex justify-content-center position-relative single">
        <div className="position-relative singlepresent" 
          style={{ width: "100%", height: "100%", backgroundImage: `url(${single})`}}>

          <animated.div className="bg-primary position-absolute"
            style={{ height: "10vh", width: "10vh", marginLeft: "-15px", marginTop: "-15px", zIndex: -5, y: toppo.y }}>
          </animated.div>

          <div className="position-relative singletext">

            <div className="d-flex row col-12 mx-0 bg-primary text-secondary">
              <div className="singlesecond" style={{backgroundImage: `url(${singlesec})`}}>
              </div>

              <div className="singlename px-0 d-flex justify-content-center align-items-center">
                <div className="text-secondary d-flex align-items-center">

                  {nome.map((cont, index)=>(
                    <animated.h1 className="cent-flex position-relative pb-1" key={index}
                      style={{width: "0.7em", height: "1em", top: mosso[index].top,
                        }}>
                      {cont}
                    </animated.h1>)
                  )}

                </div>
              </div>
            </div>

            <div className="p-2 p-md-3 bg-secondary text-white">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
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