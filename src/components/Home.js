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
  useReducedMotion,
  useInView,
  useSpringValue
} from "@react-spring/web";

function Home(){

  let stato = useStato()
  let dispatch = useStatoset()

  const parallaxLayerRef = useRef(null);
  const [parallaxLayerMounted, setParallaxLayerMounted] = useState(false);

  let pronto = useRef(null)

  let base = document.getElementById("questo")

  let primate = useRef()
  let secondate = useRef()

  let colla = useRef()

  let alto = useSpringValue(0, {immediate: true})



  let parle = useRef()
  //e need to create a different interect ith a different options object
  useEffect(()=>{

    let finalmente = document.querySelectorAll(".stratos")
    let navigat = document.querySelectorAll(".nav-item");

    if( finalmente.length ){

      let options = {
        root: base,
        rootMargin: "0px 0px -100% 0px",
        threshold: 0,
      }
  
      //It seems I can use entry.target element value inside the 
      //addEventListener function
      //We will need to create a section ONLY to talk about ho wheel event works in Parallax
      function altro(entries){
  
        entries.forEach((entry)=>{

          if( entry.isIntersecting ){

            //transfering these to the wheel function 
            //console.log( entry.boundingClientRect.height )
            //console.log( entry.intersectionRect.height )
            //console.log( entry.target.clientHeight )

            window.addEventListener("wheel", proviamo )

            /*
            let {container, current} = parle.current
            console.log( "this is current " + current )

            window.addEventListener('wheel', ()=>{
              console.log("siam stati qui")
              console.log( entry.target.clientHeight )
              console.log( current )
            }
            );
            */

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

    function handleWheelEvent(){
      console.log("from here we start")
    }

    // ----------

    //remember that intersect and boundingrect classlist() add/remove
    //diodn't work coz intersect and boundingRect were embeeded between each other
    if(finalmente.length){

      let coloptions = {
        root: base, 
        rootMargin: "0px",
        threshold: [...Array(100).keys()].map(x => x / 100),
      }

      function scrolled(entries){

        entries.forEach((entry)=>{

          //When using intercept for the sticky columns font push the end of sticky too behind
          //it might trigger the stickycol beyond its space and create 2 heights columns
          if(entry.isIntersecting && entry.boundingClientRect.top <= 80){

            //WE add the variable height of the column once it intersects the top
            document.documentElement.style.setProperty("--col", entry.boundingClientRect.top - 80 + "px" )
            
            document.querySelector(`.d-inline-block.${entry.target.id}`).classList.remove("lato")
            document.querySelector(`.d-inline-block.${entry.target.id}`).classList.remove("pieno")
            document.querySelector(`.d-inline-block.${entry.target.id}`).classList.add("stickycol")
            /*
            if( entry.boundingClientRect.top <= 80 ){
              
              document.documentElement.style.setProperty("--col", entry.boundingClientRect.top - 80 + "px" )
            
              document.querySelector(`.d-inline-block.${entry.target.id}`).classList.remove("pieno")
              document.querySelector(`.d-inline-block.${entry.target.id}`).classList.add("stickycol")
            }
            */
          }else if( entry.isIntersecting ){
            document.querySelector(`.d-inline-block.${entry.target.id}`).classList.add("pieno")
            document.querySelector(`.d-inline-block.${entry.target.id}`).classList.remove("lato")
            document.querySelector(`.d-inline-block.${entry.target.id}`).classList.remove("stickycol")

          }else{

            if( entry.target.id == "secondo" ){
              console.log( entry )
            }

            document.querySelector(`.d-inline-block.${entry.target.id}`).classList.remove("pieno")
            document.querySelector(`.d-inline-block.${entry.target.id}`).classList.add("lato")
            document.querySelector(`.d-inline-block.${entry.target.id}`).classList.remove("stickycol") 
          }


        })

      } 

      let observer1 = new IntersectionObserver(scrolled, coloptions)

      finalmente.forEach((valo1)=>{
        observer1.observe(valo1)
      })

    }

    //the return for the added wheel effect, if we were to add it 
    return () => {
      window.removeEventListener('wheel', handleWheelEvent);
    };

  }, [parallaxLayerMounted])
 

  function vario(){
    console.log("donde vamos")
  }


  //lets try an external wheel that gets the target element
  function proviamo(){
    /*
    console.log("---------------------")
    console.log( secondate )
    console.log( secondate.current.offsetTop )
    const {container, current} = parle.current;
    console.log( current )
    */
  }


  //ok so, the current value is 0, I guess, while container is the Parallax
  //and no, ref current and getElementbyId are not symilar
  //current is not pixel and adds by 100 to each scroll movement
  //ok, they may be pixels of the entire scroll area, 
  //yes its pixel, the entire height is, 4211 - max-scrolled 3315 == 896 (thescreen window)
  //being the window.innerHeight the window height
  //while container.current.scrollHeight is the entire scroll height of the window( fixed)
  //so we get the percentage using only current as changinng
  //For the singular sections we can use primo.current.clientHeight
  
  /*
  let primate = useRef()
  const scrollListener = () => {

    const handleWheelEvent = () => {
      const {container, current} = parle.current;
      let percentage = container.current.scrollHeight - window.innerHeight

      const scrollpercent = current / percentage
      console.log(scrollpercent);
    };

    window.addEventListener('wheel', handleWheelEvent);

    return () => {
      window.removeEventListener('wheel', handleWheelEvent);
    };
  };
  useEffect(scrollListener, []);
  */

  //Read the useMount paragraph in the notes
  useMount(() => {
    setParallaxLayerMounted(true);
  });

  //check the notes for how we spaced the sticky columns
  return(
    <div style={{width: "100%" , marginTop: "5em", height: "calc(100vh - 5em)" }}>
      <Parallax ref={parle} pages={4.7} className="meno" id="questo">
        <ParallaxLayer  offset={0}>
          <Intro/>
        </ParallaxLayer>

        <ParallaxLayer  offset={0.5} style={{ backgroundColor: "lightskyblue" }}>
          <div ref={primate} className="stratos" id="primo" move="17%" color={318} >
            <Primo />
          </div>
        </ParallaxLayer>
        
        <ParallaxLayer onScroll={vario} offset={0.35} style={{ height: 0, display: "inline-block"}} sticky={{ start: 0.35, end: 1.5 }}>
          <> 
            <div className="position-relative d-inline-block pieno primo" 
              style={{ verticalAlign: "top", overflowY: "hidden",width: "25%", backgroundColor: "brown" }}>

              <div className="position-relative" style={{ backgroundColor: "brown", height: "100%" }} >

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
          <div ref={secondate} className="stratos" id="secondo" move="34%" color={227}>
            <Secondo />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1.4} style={{ height: 0, display: "inline-block"}} sticky={{start: 1.4, end: 2.5}}>
          <>
            <div className="d-inline-block pieno secondo" style={{overflowY: "hidden",verticalAlign: "top", marginLeft: "75%", width: "25%" }}>
              <div className="position-relative" style={{backgroundColor: "purple", height: "100vh" }}>
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

        <ParallaxLayer offset={2.45} style={{height: 0, display: "inline-block"}} sticky={{start: 2.45,end: 3.45}}>
          <>
            <div className="d-inline-block pieno terzo" style={{ overflowY: "hidden" ,verticalAlign: "top" ,width: "20%"}}>
              <div className="position-relative" style={{height: "100vh", backgroundColor: "navy", color: "yellow"}}>
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

        <ParallaxLayer className="d-none d-md-inline-block" offset={3.4} style={{height: 0 }} sticky={{start: 3.4,end: 4.4 }}>
          <>
            <div className="d-inline-block pieno quarto" style={{ overflowY: "hidden" ,verticalAlign: "top" ,width: "25%", marginLeft: "75%"}}>
              <div className="position-relative" style={{height: "55vh", backgroundColor: "darkkhaki"}}>
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