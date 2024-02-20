import {
  useScroll,
  animated,
  useSpring,
  useIsomorphicLayoutEffect,
  useReducedMotion,
  useTransition
} from "@react-spring/web";
import { useEffect, useRef, useState } from "react";
import { useStato, useStatoset } from "../data/Context";

function Navbar(){

  let stato = useStato()
  let dispatch = useStatoset()

  let navigate = useTransition(stato.topic, {
    from:{
      y: 50
    },
    enter: {
      y: 0
    },
    leave:{
      y: -50
    },
    exitBeforeEnter: true,
    config: {    
      duration: 300,      
    }
  })


  useEffect(()=>{
    let navi = document.querySelectorAll(".col-8 .col-3")
    //console.log( navi )
  })

  //WE don't display the name on mobile, and also change the dimentions of the icon
  return(
    <div className="d-flex justify-content-between row mx-0 col-12 bg-danger naviga">

      <div className="col-2 col-md-3 d-flex justify-content-center align-items-center">
        <div style={{ height: 35, width: 35 }}>
          <div className="fondo"></div>
        </div>

        <h1 className="px-1 d-none d-md-flex">Tunefuse</h1>
      </div>

      <div className="d-none d-sm-flex col-sm-6 row">
        <nav className="col-3 nav-item primo d-flex justify-content-center align-items-center">
          <h4> Singer </h4>
        </nav>
        <nav className="col-3 nav-item secondo d-flex align-items-center justify-content-center">
          <h4 className=""> Band </h4>
        </nav>
        <nav className="col-3 nav-item terzo d-flex align-items-center justify-content-center">
          <h4 className=""> Duo </h4>
        </nav>
        <nav className="col-3 nav-item quarto d-flex align-items-center justify-content-center">
          <p className=""> Organization </p>
        </nav>

        <animated.div className="barra" style={{width: stato.springa}}>
        </animated.div>
      </div>

      <div className="d-flex d-sm-none row col-8">
        {navigate((style, item)=> (
          <div className="d-flex justify-content-center align-items-center" style={{overflow: "hidden"}}>
            <animated.p className="text-white" style={style}>
              {item}
            </animated.p>
          </div>
        ))}

        <animated.div className="barra" style={{width: stato.springa}}>
        </animated.div>
      </div>


    </div>
  )
}

export default Navbar;