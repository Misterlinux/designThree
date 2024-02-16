import { useEffect, useRef, useMemo, useState } from "react";
import { useStato, useStatoset } from "../data/Context";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Primo from "./1First";
import Secondo from "./2Second";
import Terzo from "./3Third";
import Quarto from "./4Forth";

import { useMount } from "../data/Data";
import {
  useScroll,
  animated,
  useSpring,
  useIsomorphicLayoutEffect,
  useReducedMotion
} from "@react-spring/web";

function Home(){

  let stato = useStato()
  let dispatch = useStatoset()

  let alt = useRef()

  function avanti(){
    console.log("Altri vanti")
  }

  //transition css prop works when the same selectoirs changes its variables values

  const parallaxLayerRef = useRef(null);
  const [parallaxLayerMounted, setParallaxLayerMounted] = useState(false);

  //FOR SOME REASON THE QUERYSELECTORALL DOESNT work on the ParallaxLayers
  //so we need a re-render and THEN we can acces them
  //But we can querySelect Nav elements from the sibling compèonent
  useEffect(()=>{

    console.log( "This is the Navbar" )
    console.log( document.querySelectorAll(".nav-item") )

    let base = document.getElementById("questo")
    let finalmente = document.querySelectorAll(".stratos")

    let navigat = document.querySelectorAll(".nav-item");

    if( finalmente.length ){
      console.log( finalmente[1] )
      console.log( finalmente[1].id )
      console.log( finalmente[1].attributes.move.value )
      console.log( finalmente[1].classList )

      console.log("THIS HAS TO PLAY ONLY ONCE")

      let options = {
        root: base,
        rootMargin: "0px 0px -100% 0px",
        threshold: 0,
      }
  
      function altro(entries){
  
        entries.forEach((entry)=>{
  
          if( entry.isIntersecting ){
            console.log( entry )
            stato.springa.start( entry.target.attributes.move.value )
            
            navigat.forEach(item=>item.classList.remove("active"))

            document.querySelector(`.nav-item.${entry.target.id }`).classList.add("active")

            dispatch({
              type: 'colore',
              base: entry.target.attributes.color.value
            });
          }else{
            //console.log("Immaginando la robba")
          }
  
        })
      }
  
      let observer = new IntersectionObserver(altro, options)
  
      finalmente.forEach((valo)=>{
        observer.observe(valo)
      })

    }

  }, [parallaxLayerMounted])

  //Read the useMount paragraph in the notes
  useMount(() => {
    setParallaxLayerMounted(true);
  });

  return(
    <div style={{width: "100%", marginTop: "5em"}} >
      <Parallax pages={4.2} className="meno" id="questo" ref={parallaxLayerRef}>
        <ParallaxLayer offset={0} style={{ backgroundColor: "lightskyblue" }}>
          <div className="stratos" id="primo" move="17%" color={12} >
            <Primo />
          </div>
        </ParallaxLayer>
        
        <ParallaxLayer offset={1} style={{ backgroundColor: "pink" }}>
          <div className="stratos" id="secondo" move="34%" color={95} style={{ height: "100%" }}>
            <Secondo />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1.5} style={{ height: 0, display: "inline-block"}} sticky={{ start: 0.5, end: 1.5 }}>
          <> 
            <div className="d-inline-block" style={{ verticalAlign: "top", width: "30%"}}>
              <div style={{ backgroundColor: "brown", height: "65vh" }} >
                This is the bar
              </div>
            </div>

            <div className="d-inline-block" style={{ marginLeft: "20%" ,width: "40%" }}>
              <h3> This is the other content </h3>
              <div className="bg-warning">
                <p> This is the second context </p>
              </div>
            </div>
          </>
        </ParallaxLayer>

        <ParallaxLayer offset={2} style={{ backgroundColor: "silver" }}>
          <div className="stratos" id="terzo" move="51%" color={152}>
            <Terzo />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={3} style={{ backgroundColor: "sandybrown" }}>
          <div className="stratos" id="quarto" move="68%" color={220}>
            <Quarto />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={4} factor={0.2} style={{ backgroundColor: "navajowhite" }}>
          Footer area
        </ParallaxLayer>
      </Parallax>

    </div>
  )
}

export default Home;