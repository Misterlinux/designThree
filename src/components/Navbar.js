import {
  useScroll,
  animated,
  useSpring,
  useIsomorphicLayoutEffect,
  useReducedMotion
} from "@react-spring/web";
import { useEffect, useRef, useState } from "react";
import { useStato, useStatoset } from "../data/Context";

function Navbar(){

  let stato = useStato()
  let dispatch = useStatoset()

  useEffect(()=>{
    let navi = document.querySelectorAll(".col-8 .col-3")
    //console.log( navi )
  })



  return(
    <div className="d-flex justify-content-between row mx-0 col-12 bg-danger naviga">

      <div className="col-3">
        Icona
      </div>
      <div className="col-8 row">
        <nav className="col-3 nav-item border-right border-warning primo">
          <div className=""> Element </div>
        </nav>
        <nav className="col-3 nav-item secondo">
          <div className=""> Element </div>
        </nav>
        <nav className="col-3 nav-item terzo">
          <div className=""> Element </div>
        </nav>
        <nav className="col-3 nav-item quarto">
          <div className=""> Element </div>
        </nav>

        <animated.div className="barra" style={{width: stato.springa}}>
        </animated.div>
      </div>

    </div>
  )
}

export default Navbar;