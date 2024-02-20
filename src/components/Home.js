import { useEffect, useRef, useMemo, useState } from "react";
import { useStato, useStatoset } from "../data/Context";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Primo from "./1First";
import Secondo from "./2Second";
import Terzo from "./3Third";
import Quarto from "./4Forth";
import Intro from "./Intro";
import Footer from "./Footer";

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

  return(
    <div style={{width: "100%", marginTop: "5em"}}>
      <Parallax pages={4.7} className="meno" id="questo" ref={parallaxLayerRef}>
        <ParallaxLayer offset={0}>
          <Intro/>
        </ParallaxLayer>

        <ParallaxLayer offset={0.5} style={{ backgroundColor: "lightskyblue" }}>
          <div className="stratos" id="primo" move="17%" color={318} >
            <Primo />
          </div>
        </ParallaxLayer>
        
        <ParallaxLayer offset={0.35} style={{ height: 0, display: "inline-block"}} sticky={{ start: 0.35, end: 0.8 }}>
          <> 
            <div className="d-inline-block" style={{ verticalAlign: "top", width: "30%"}}>
              <div className="position-relative" style={{ backgroundColor: "brown", height: "80vh" }} >

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

        <ParallaxLayer offset={1.5} style={{ backgroundColor: "pink" }}>
          <div className="stratos" id="secondo" move="34%" color={227} style={{ height: "100%" }}>
            <Secondo />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1.5} style={{ height: 0, display: "inline-block"}} sticky={{start: 1.4, end: 2}}>
          <>
            <div className="d-inline-block" style={{ marginLeft: "69%", width: "30%" }}>
              <div style={{ height: "70vh", backgroundColor: "purple" }}>
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

        <ParallaxLayer offset={2.4} style={{height: 0, display: "inline-block"}} sticky={{start: 2.4,end: 2.9}}>
          <>
            <div className="d-inline-block" style={{width: "30%"}}>
              <div style={{height: "70vh", backgroundColor: "navy" }}>
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

        <ParallaxLayer offset={3.4} style={{height: 0, display: "inline-block"}} sticky={{start: 3.4,end: 3.9 }}>
          <>
            <div className="d-inline-block" style={{width: "30%", marginLeft: "69%"}}>
              <div style={{height: "70vh", backgroundColor: "darkkhaki"}}>
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