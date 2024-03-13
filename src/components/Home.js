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

  //let esempio = useRef(null)

  let parle = useRef(null)

  //Instead of useResize we just use the current.clientWidth

  let reffe;
  let mio;

  //e need to create a different interect ith a different options object
  useEffect(()=>{

    let finalmente = document.querySelectorAll(".stratos")
    let navigat = document.querySelectorAll(".nav-item");

    if( finalmente.length ){

      let options = {
        root: base,
        rootMargin: "0px 0px -85% 0px",
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

    //Is there a difference in view when we add more thresholds?

    //When we querySelect we can't acces ref coz its ot a dom attribute, its specific 
    //to react/JSX, 

    //we dont use css variables to edit in a changeable className, nor we use a useRef()
    //style we access throught another attribut to then use in an array of useRef()
    //To access the correct one, we just edit the target's height
    if(finalmente.length){

      let coloptions = {
        root: base, 
        rootMargin: "0px",
        threshold: [...Array(150).keys()].map(x => x / 150),
      }

      let largo = parle.current.clientWidth
      //The parallax including the freaking nacbar from google affects ALSO the boundingRect
      function scrolled(entries){

        entries.forEach((entry)=>{
          //When using intercept for the sticky columns font push the end of sticky too behind
          //it might trigger the stickycol beyond its space and create 2 heights columns

          //when scrolling from bottom top, the boundingRectTop goes from 80 + to 500+ (being from teh next thing)
          //so the previous column almost dissapers
          //from 70 to 10

          if(entry.isIntersecting && entry.boundingClientRect.top <= (largo> 537 ? 70 : 120) ){
            
            //console.log( entry.boundingClientRect.top )
            if( entry.target.id == "primo" ){
              console.log( "Pri top" + entry.boundingClientRect.top )
            }
            //entry.target.ref.current.style.height = "500px"

            //We cannot console.log() the document.queryselct style BUT we can edit it
          
            reffe = document.querySelector(`.vero.${entry.target.id}`)
            reffe.style.height = `calc(100vh + ${entry.boundingClientRect.top - (largo> 537 ? 70 : 120) + "px"} )`
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
  // 5em / 10em for the mobile testing

  //so, to avoid having 2 scrollBars for a scrollable Parallax and the fixed window scroll we
  //include the Parallax without a marginTop, (add an empty space that wil be covered)
  //and add The margin to the sticky columns, while also cutting up their start to compesate the margin

  //watch out for the padding, it can cut the image height/width 100%

  //The bg-primary includes in it the transition we use for its change of color on navbar
  //we avoid teh columns to be affected by placing teh class NOT where the heigth gets changed but in the child tags
  return(
    <div ref={parle} style={{width: "100%" /*marginTop: "5em"*/, height: "calc(100vh - 5em)" }}>
      <Parallax pages={4.75} className="meno" id="questo">
        <ParallaxLayer  offset={0}>
          <Intro/>
        </ParallaxLayer>

        <ParallaxLayer  offset={0.55} style={{ backgroundColor: "#001F3F" }}>
          <div ref={primate} className="stratos" id="primo" move="17%" color={300} >
            <Primo />
          </div>
        </ParallaxLayer>
        
        <ParallaxLayer offset={1.55} style={{ backgroundColor: " pink " }}>
          <div ref={secondate} className="stratos" id="secondo" move="34%" color={210}>
            <Secondo />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={2.55} style={{ backgroundColor: " #001F3F " }}>
          <div className="stratos" id="terzo" move="51%" color={120}>
            <Terzo />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={3.55} style={{ backgroundColor: " #001F3F " }}>
          <div className="stratos" id="quarto" move="68%" color={30}>
            <Quarto />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={4.55} factor={0.2} style={{ backgroundColor: "navajowhite" }}>
          <Footer/>
        </ParallaxLayer>

        <ParallaxLayer onScroll={vario} offset={0.30} style={{ height: 0 ,display: "inline-block"}} sticky={{ start: 0.30, end: 1.55 }}>
          <> 
            <div targetrefname="esempio"  className="position-relative d-inline-block vero primo" 
              style={{ verticalAlign: "top", marginTop: "5em" ,overflowY: "hidden",width: "25%" }}>

              <div className="position-relative bg-primary" style={{ height: "100vh" }} >

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

        <ParallaxLayer offset={1.37} style={{height: 0, display: "inline-block"}} sticky={{start: 1.37, end: 1.37 }}>
          <>
            <div className="d-inline-block" style={{verticalAlign: "top", marginTop: "5em", marginLeft: "25%" ,width: "50%" }}>
              <div className="d-flex justify-content-center align-items-center position-relative" 
              style={{backgroundColor: "lightblue", height: "calc(20vh - 5em)" }}>
                <h3> Band </h3>
              </div>
            </div>
          </>
        </ParallaxLayer>

        <ParallaxLayer offset={1.37} style={{ height: 0, display: "inline-block"}} sticky={{start: 1.37, end: 2.55}}>
          <>
            <div targetrefname="esempio1" className="d-inline-block vero secondo" 
              style={{overflowY: "hidden",verticalAlign: "top", marginTop: "5em" , marginLeft: "75%", width: "25%" }}>
              <div className="position-relative bg-primary text-secondary" style={{height: "100vh" }}>
                <h3>Siamo stati</h3>
              </div>
            </div>
          </>
        </ParallaxLayer>

        <ParallaxLayer offset={2.41} style={{height: 0, display: "inline-block"}} sticky={{start: 2.41, end: 2.41}}>
          <>
            <div className="d-inline-block" style={{marginTop: "5em", marginLeft: "20%", width: "55%"}}>
              <div style={{backgroundColor: "green", height: "calc(20vh - 5em"}}>
                The Duo
              </div>
            </div>
          </>
        </ParallaxLayer>

        <ParallaxLayer offset={2.41} style={{height: 0, display: "inline-block"}} sticky={{start: 2.41,end: 3.37}}>
          <>
            <div className="d-inline-block vero terzo" 
              style={{ overflowY: "hidden", marginTop: "5em", verticalAlign: "top" ,width: "20%"}}>
              <div className="bg-primary text-secondary  position-relative" style={{height: "100vh"}}>
                That way
              </div>
            </div>
          </>
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

        <ParallaxLayer className="d-none d-md-inline-block" offset={3.43} style={{height: 0 }} sticky={{start: 3.43,end: 4.55}}>
          <>
            <div className="d-inline-block vero quarto" 
              style={{ marginTop: "5em" ,overflowY: "hidden" ,verticalAlign: "top" ,width: "25%", marginLeft: "75%"}}>
              <div className="bg-primary text-white position-relative" style={{height: "55vh"}}>
                Second way
              </div>
            </div>
          </>
        </ParallaxLayer>

      </Parallax>

    </div>
  )
}

export default Home;