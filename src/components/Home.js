import { useEffect, useRef, useMemo, useState } from "react";
import { useStato, useStatoset } from "../data/Context";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Primo from "./1First";
import Secondo from "./2Second";
import Terzo from "./3Third";
import Quarto from "./4Forth";
import Intro from "./Intro";
import Footer from "./Footer";

import camera from "../imma/fotoicon.svg"

import { useMount } from "../data/Data";
import {
  useResize,
  useScroll,
  animated,
  useSpring,
  useIsomorphicLayoutEffect,
  useReducedMotion
} from "@react-spring/web";

function Home(){

  let stato = useStato()
  let dispatch = useStatoset()

  const parallaxLayerRef = useRef(null);
  const [parallaxLayerMounted, setParallaxLayerMounted] = useState(false);

  
  useEffect(()=>{

    let base = document.getElementById("questo")
    let finalmente = document.querySelectorAll(".stratos")

    let navigat = document.querySelectorAll(".nav-item");

    if( finalmente.length ){

      let options = {
        root: base,
        rootMargin: "0px 0px -100% 0px",
        threshold: 0,
      }
  
      function altro(entries){
  
        entries.forEach((entry)=>{
  
          if( entry.isIntersecting ){
            stato.springa.start( entry.target.attributes.move.value )
            
            navigat.forEach(item=>item.classList.remove("active"))
            document.querySelector(`.nav-item.${entry.target.id }`).classList.add("active")

            dispatch({
              type: 'colore',
              base: entry.target.attributes.color.value
            });

            dispatch({
              type: "topico",
              topic: entry.target.id
            })

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

  //Maybe we will need the useResize() maybe not
  /*
  let quad = useRef(null)

  const { width, height } = useResize({
    container: quad,
    onChange: ({value: {width} })=> {
      console.log( width )
    }
  })
  */

  //check the notes for how we spaced the sticky columns
  return(
    <div style={{width: "100%" , marginTop: "5em", height: "calc(100vh - 5em)" }}>
      <Parallax pages={4.7} className="meno" id="questo" ref={parallaxLayerRef}>
        <ParallaxLayer offset={0}>
          <Intro/>
        </ParallaxLayer>

        <ParallaxLayer offset={0.5} style={{ backgroundColor: "lightskyblue" }}>
          <div className="stratos" id="primo" move="17%" color={318} >
            <Primo />
          </div>
        </ParallaxLayer>
        
        <ParallaxLayer offset={0.35} style={{ height: 0, display: "inline-block"}} sticky={{ start: 0.35, end: 0.6 }}>
          <> 
            <div className="d-inline-block" style={{ verticalAlign: "top", width: "25%" }}>
              <div className="position-relative" style={{ backgroundColor: "brown", height: "calc(100vh - 5em)" }} >

                <div className="position-absolute colonna1">
                </div>

                <div className="position-relative">
                  <h2 className="text-center" style={{ color: "yellow" }}>First day</h2>
                  <p>Welcome to the way</p>
                </div>

              </div>

            </div>
          </>
        </ParallaxLayer>

        <ParallaxLayer offset={1.4} style={{height: 0, display: "inline-block"}} sticky={{start: 1.4, end: 1.4}}>
          <>
            <div className="d-inline-block" style={{verticalAlign: "top", marginLeft: "25%" ,width: "50%" }}>
              <div className="d-flex justify-content-center align-items-center position-relative" 
              style={{backgroundColor: "lightblue", height: "calc(20vh - 5em)" }}>
                <h3> Band </h3>
              </div>
            </div>
          </>
        </ParallaxLayer>

        <ParallaxLayer offset={1.5} style={{ backgroundColor: "pink" }}>
          <div className="stratos" id="secondo" move="34%" color={227}>
            <Secondo />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1.4} style={{ height: 0, display: "inline-block"}} sticky={{start: 1.4, end: 1.65}}>
          <>
            <div className="d-inline-block" style={{verticalAlign: "top", marginLeft: "75%", width: "25%" }}>
              <div style={{backgroundColor: "purple", height: "calc(100vh - 5em)" }}>
                <h3>Siamo stati</h3>
              </div>
            </div>
          </>
        </ParallaxLayer>

        <ParallaxLayer offset={2.5} style={{ backgroundColor: "silver" }}>
          <div className="stratos" id="terzo" move="51%" color={137}>
            <Terzo />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={2.45} style={{height: 0, display: "inline-block"}} sticky={{start: 2.45, end: 2.45}}>
          <>
            <div className="d-inline-block" style={{marginLeft: "20%", width: "55%"}}>
              <div style={{backgroundColor: "green", height: "calc(20vh - 5em"}}>
                The Duo
              </div>
            </div>
          </>
        </ParallaxLayer>

        <ParallaxLayer offset={2.45} style={{height: 0, display: "inline-block"}} sticky={{start: 2.45,end: 2.65}}>
          <>
            <div className="d-inline-block" style={{width: "20%"}}>
              <div style={{height: "calc(100vh - 5em)", backgroundColor: "navy", color: "yellow"}}>
                That way
              </div>
            </div>
          </>
        </ParallaxLayer>

        <ParallaxLayer offset={3.5} style={{ backgroundColor: "sandybrown" }}>
          <div className="stratos" id="quarto" move="68%" color={47}>
            <Quarto />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={3.78} speed={0.5}
          style={{
            display: "inline-block",
            width: "10vw",
            height: "10vw",
            marginLeft: "62%",
            backgroundImage: `URL(${camera})`,
            backgroundPosition: "center center",
            backgroundSize: "contain"
          }}
        >
        </ParallaxLayer>

        <ParallaxLayer className="d-none d-md-inline-block" offset={3.4} style={{height: 0 }} sticky={{start: 3.4,end: 3.9 }}>
          <>
            <div className="d-inline-block" style={{width: "25%", marginLeft: "75%"}}>
              <div style={{height: "55vh", backgroundColor: "darkkhaki"}}>
                Second way
              </div>
            </div>
          </>
        </ParallaxLayer>

        <ParallaxLayer offset={4.5} factor={0.2} style={{ backgroundColor: "navajowhite" }}>
          <Footer/>
        </ParallaxLayer>
      </Parallax>

    </div>
  )
}

export default Home;