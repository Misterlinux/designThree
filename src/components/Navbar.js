import {
  useScroll,
  animated,
  useSpring,
  useIsomorphicLayoutEffect,
  useReducedMotion,
  useTransition
} from "@react-spring/web";
import React, { useEffect, useRef, useState } from "react";
import { useStato, useStatoset } from "../data/Context";

function Navbar({ navotto, navParent}){

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
      y: -50,
      config: {duration: 100}
    },
    exitBeforeEnter: true,
    config: {    
      duration: 300,      
    }
  })

  let navi = navParent 

  return(
    <div className="naviga bg-primary d-flex justify-content-between row mx-0 col-12">

      <div className="cent-flex col-2 col-md-3">
        <div style={{ height: 35, width: 35 }}>
          <div className="fondo"></div>
        </div>

        <h1 className="px-1 d-none d-md-flex marker">Tunefuse </h1>
      </div>

      <div className="d-none d-sm-flex col-sm-6 row position-relative">
        <nav className="col-3 nav-item TuneFuse cent-flex" ref={(ref)=> {navi.current[0] = ref }}>
          <h4> Artist </h4>
        </nav>
        <nav className="col-3 nav-item Band cent-flex" ref={(ref)=> {navi.current[1] = ref }}>
          <h4> Band </h4>
        </nav>
        <nav className="col-3 nav-item Duo cent-flex" ref={(ref)=> {navi.current[2] = ref }}>
          <h4> Duo </h4>
        </nav>
        <nav className="col-3 nav-item Team cent-flex" ref={(ref)=> {navi.current[3] = ref }}>
          <h4> Team </h4>
        </nav>

        <animated.div className="barra" style={{width: stato.springa}}>
        </animated.div>
      </div>

      {/*this is the mobile navbar animated scrolled */}
      <div className="d-flex d-sm-none row col-8 position-relative">
        {navigate((style, item)=> (
          <div className="cent-flex" style={{overflow: "hidden"}}>
            <animated.p className="text-white marker" style={{fontSize: "2em" ,...style}}>
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