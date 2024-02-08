import { useEffect, useRef } from "react";
import { useStato, useStatoset } from "../data/Context";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Secondo from "./2Second";
import Terzo from "./3Terzo";

function Primo(){

  let stato = useStato()
  let dispatch = useStatoset()

  function framme(){

    dispatch({
      type: "colore",
      base: 20
    })
  }

  let alt = useRef()
  useEffect(()=>{

    let option={
      rootMargin: "0px 0px -100% 0px",
      threshold: 0
    }

    function camb(entry){
      console.log("altolo")

      if(entry[0].isIntersecting){
        
        dispatch({
          type: "colore",
          base: 111
        })
      }
    }

    let observer = new IntersectionObserver(camb, option)

    observer.observe( alt.current )
  }, [])

  //Parallax needs to be the only element innit
  //we dont need height coz page is 100%
  return(
    <div ref={alt} style={{width: "100%", marginTop: "5em"}}>

      <Parallax pages={3.3} className="meno">
        <ParallaxLayer offset={0}>
          Alti
        </ParallaxLayer>

        <ParallaxLayer offset={1} className="d-flex justify-content-end" sticky={{ start: 1, end: 1.8 }}>
          <h2>La vita dei poll</h2>
        </ParallaxLayer>

        <ParallaxLayer offset={1.5} style={{height: "30vh" }}>
          <Terzo />
        </ParallaxLayer>

        <ParallaxLayer offset={1.8} factor={1.5} style={{ height: "150vh", backgroundColor: "lightcoral" }}>
          <h1>Gia c'era stato {stato.base}</h1>
          <div className="text-center">
            <button className="btn btn-success" onClick={framme}>
              ancora li
            </button>
          </div>

          <div style={{ height: "100vh", border: "solid 2px brown" }}>
            Lorem ipsum dolor sit amet.
          </div>
        </ParallaxLayer>
      </Parallax>

    </div>
  )
}

export default Primo;