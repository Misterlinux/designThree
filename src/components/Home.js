import { useEffect, useRef, useMemo, useState } from "react";
import { useStato, useStatoset } from "../data/Context";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Primo from "./1First";
import Secondo from "./2Second";
import Terzo from "./3Third";
import Quarto from "./4Forth";
import Intro from "./Intro";
import Footer from "./Footer";

import guitar from "../imma/guitar.svg"
import { ReactComponent as Guir } from "../imma/guitar.svg"
import { ReactComponent as Lamp } from "../imma/lampost1.svg" 

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

  let mio;

  //we need to create a different interect ith a different options object
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
    //To access the correct one, we just directly edit the target's height
    let reffe;

    //so, to avoid the querySelector  on the intersect we cached the values on an object 
    //to get from the array and modify its height
    let elements = {};
    finalmente.forEach((valo1) => {
      elements[valo1.id] = document.querySelector(`.vero.${valo1.id}`);
    });
    console.log( "--------VVV----------" )
    console.log( elements )

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

          if(entry.isIntersecting && entry.boundingClientRect.top <= (largo> 537 ? 75 : 75) ){
          
            //console.log( entry.boundingClientRect.top )
            //entry.target.ref.current.style.height = "500px"

            //We cannot console.log() the document.queryselct style BUT we can edit it
            //instead of doing a querySelector we just pick from a pre-made array
            //reffe = document.querySelector(`.vero.${entry.target.id}`)
            reffe = elements[entry.target.id]
            //console.log("Pixel Movemnt")
            //console.log( elements[entry.target.id] )
            requestAnimationFrame(() => {
              reffe.style.height = `calc(100vh + ${entry.boundingClientRect.top - 75 + "px"} )`;
            });

            //reffe.style.height = `calc(100vh + ${entry.boundingClientRect.top - (largo> 537 ? 75 : 75) + "px"} )`
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
  
  //about the sticky ICONS, if we use scale() to make the image bigger we lose the 
  //d-flex center to the avaiable width/height

  //WE need to study the SVG more, lets see if this website works https://svgcrop.com/
  //try to memorize a formula to hanlder it tho

  //We tried the component and the image for the SVG files but we didnt want to overlay the actual content of
  //the parallaxLayer with teh icons, so we separated the background color to another layer AND put the icon there
  //we cant use spoeed tho

  //APPARENTLY WE cant use stato.base directly in this file to stile the elements, only in the other files
  //no, the problem is that any useReducer data even if numbers, will be converted to string when
  //trying to use it on the DOM, we first need to style={parsetInt(stato.base)}
  
  //Lets try to avoid the browser UI (navbar) from cutting away the height of our design
  //Well this may take us in a jorney toward sthe viewpoint enlightment
  //https://css-tricks.com/the-large-small-and-dynamic-viewports/
  //https://cloudfour.com/thinks/a-bashful-button-worth-8-million/
  //contrary to vh the dvh will work on percentage of the ACTUAL usable space
  //*dynamic consideration of any UA interfaces*
  //and will vary between 100vh (maximus) and 100svh minimun
  //svh is based if any ua interface is currently active, acts like
  //well maybe another time, at the end the height is reduced, but the vh is consistent between the components

  //anyway if we wanted to use window.innerHeigth for the dymaic set of style props
  //we would need a resize event listener BUT during the ParallaxLayer scroll it counts so it updates its values
  
  //Parallax is 100% height by efault but DO NOT, trust the container, it won't inherit the 100vh on some
  //mobile designs

  //the queryseklect stra
  /*
  let palla = useRef()

  function siamo(){
    console.log("SIAMO come arrivati")
    palla.current.scrollTo(4)
  }
  */
  return(
    <div ref={parle} style={{width: "100%" /*marginTop: "5em", height: "100vh"*/ }}>
      <Parallax pages={4.75} className="meno" id="questo" style={{ height: "100vh" }}>
        <ParallaxLayer  offset={0}>
          <Intro/>
        </ParallaxLayer>

        <ParallaxLayer offset={0.55} className="d-flex justify-content-center align-items-center bg-main" style={{
          backgroundSize: "100% 100%",
          /*backgroundRepeat: "no-repeat",
          backgroundPosition: "45% center",
          backgroundImage: `url(${guitar})`,
          opacity: 1,*/
          //backgroundColor: "hsla(280, 100%, 20%, 1)",
          //Position relative is needed for the positioning
        }}
        >
          <Guir className="position-relative firstback"
            style={{ fill: `hsl(${stato.base}, 100%, 36%)`, 
            height: "45vh", width: "12%" }}/>
        </ParallaxLayer>

        <ParallaxLayer  offset={0.55} className="">
          <div ref={primate} className="stratos" id="TuneFuse" move="25%" color={300} >
            <Primo />
          </div>
        </ParallaxLayer>
        

        {/* we used the component version coz its simpler to handler proportions and color
        <ParallaxLayer offset={0.95} style={{ height: 0, display: "inline-block"}}>
          <>
            <img src={guitar} className="position-absolute" style={{ width: "25%", right: "0%" }} />     
          </>
        </ParallaxLayer>
        */}
        
        {/*
        <ParallaxLayer offset={0.85} speed={0.2} style={{ height: 0, display: "inline-block"}} >
          <>
            <Guir className="position-absolute" 
              style={{ fill: `hsl(${stato.base}, 100%, 36%)`, left: "calc(45vw + 30% + 15vh)", height: "40vh", width: "12%" }}/>
          </>
        </ParallaxLayer>
        */}



        <ParallaxLayer offset={1.55} className="bg-main">
          <div ref={secondate} className="stratos" id="Band" move="50%" color={210}>
            <Secondo />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={2.55} className="bg-main" factor={window.innerWidth< 600 ? 1.05 : 1}>
          <div className="stratos" id="Duo" move="75%" color={120} style={{ height: "100%" }}>
            <Terzo />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={window.innerWidth< 600 ? 3.60 : 3.55} className="bg-main cent-flex"
          style={{ backgroundSize: "100% 100%" }}>
          <Lamp className="position-relative fourthback" 
            style={{ fill: `hsl(${parseInt(stato.base) + 180 }, 100%, 36%)`, 
            height: "28vh", width: "12%" }}/>
        </ParallaxLayer>

        {/* 3.55  */}
        <ParallaxLayer offset={window.innerWidth< 600 ? 3.60 : 3.55} factor={window.innerWidth< 600 ? 0.95 : 1}>
          <div className="stratos" id="Team" move="100%" color={35} style={{ height: "100%" }}>
            <Quarto />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={4.55} factor={0.2} className="bg-primary">
          <Footer/>
        </ParallaxLayer>

        <ParallaxLayer onScroll={vario} offset={0.30} style={{ height: 0 ,display: "inline-block"}} sticky={{ start: 0.30, end: 1.55 }}>
          <> 
            <div targetrefname="esempio"  className="position-relative d-inline-block vero TuneFuse" 
              style={{ verticalAlign: "top", marginTop: "5em" ,overflowY: "hidden",width: "25%" }}>

              <div className="position-relative bg-primary" style={{ height: "100vh" }} >
                <div className="position-absolute colonna1" style={{ backgroundImage: `url("./imma/dayOne.jpg")` }}>
                </div>

                <div className="position-relative d-flex flex-column justify-content-start align-items-center" 
                  style={{ height: "100%", width: "100%" }}>
                  
                  <div className="d-none d-md-flex flex-column pt-4 justify-content-around" style={{height: "80%"}}>
                    <h2 className="text-center text-secondary bg-primary p-2 mx-2" style={{fontSize: "3.5em" }}>
                      First day
                    </h2>
                    
                    <div className="ps-2 text-white">

                      <h3 className="text-secondary">Place:</h3>
                        <h5 className="ps-2">East Music Theatre</h5>
                        <h5 className="ps-2">1200 avaiable seats</h5>

                      <h3 className="text-secondary">Time:</h3>
                        <h5 className="ps-2">10:00 AM</h5>
                        <h5 className="ps-2">4:30 PM</h5>

                      <div className="d-flex justify-content-start py-3">
                        <img src={`./imma/building.jpg`} alt="" className="border border-2 border-primary"
                          style={{height: "20vh", width: "20vh", borderRadius: "30%"}} />                      
                      </div>
                    </div>
                  </div>

                  <div className="d-block d-md-none text-warning pt-3 mobilefirst">
                    <h1>F</h1>
                    <h1>I</h1>
                    <h1>R</h1>
                    <h1>S</h1>
                    <h1>T</h1>
                    <h1> </h1>
                    <h1>D</h1>
                    <h1>A</h1>
                    <h1>Y</h1>
                  </div>

                </div>
              </div>

            </div>
          </>
        </ParallaxLayer>

        <ParallaxLayer offset={1.37} style={{height: 0, display: "inline-block"}} sticky={{start: 1.37, end: 1.37 }}>
          <>
            <div className="d-inline-block" style={{verticalAlign: "top", marginTop: "5em", marginLeft: "25%" ,width: "55%" }}>
              <div className="cent-flex position-relative middlecol text-primary bg-main-second">
                <h4> - Our Band - </h4>
              </div>
            </div>
          </>
        </ParallaxLayer>

        <ParallaxLayer offset={1.37} style={{ height: 0, display: "inline-block"}} sticky={{start: 1.37, end: 2.55}}>
          <>
            <div targetrefname="esempio1" className="d-inline-block vero Band" 
              style={{overflowY: "hidden",verticalAlign: "top", marginTop: "5em" , marginLeft: "80%", width: "20%", transition: "0.05s"}}>

              <div className="position-relative bg-primary text-secondary" style={{height: "100vh" }}>
                <div className="position-absolute colonna1" style={{ backgroundImage: `url("./imma/dayTwo.jpg")` }}>
                </div>


                <div className="position-relative d-flex flex-column justify-content-start align-items-center" 
                  style={{ height: "100%", width: "100%" }}>
                  
                  <div className="d-none d-md-flex flex-column pt-4 " style={{height: "80%"}}>
                    <h2 className="text-center text-secondary bg-primary p-2 mx-auto" style={{fontSize: "3em", width: "90%" }}>
                      Second Day
                    </h2>
                    
                    <div className="text-white ps-3">

                      <h3 className="text-secondary">Place:</h3>
                        <h5 className="ps-2">Central Music park</h5>
                        <h5 className="ps-2">1600 avaiable seats</h5>

                      <h3 className="text-secondary">Time:</h3>
                        <h5 className="ps-2">12:00 AM</h5>
                        <h5 className="ps-2">8:30 PM</h5>

                      <div className="d-flex justify-content-start py-3">
                        <img src={`./imma/building.jpg`} alt="" className="border border-2 border-primary"
                          style={{height: "20vh", width: "20vh", borderRadius: "30%"}} />                      
                      </div>
                    </div>
                  </div>

                  <div className="d-block d-md-none text-secondary pt-3 mobilefirst">
                    <h1>S</h1>
                    <h1>E</h1>
                    <h1>C</h1>
                    <h1>O</h1>
                    <h1>N</h1>
                    <h1>D</h1>
                    <h1> </h1>
                    <h1>D</h1>
                    <h1>A</h1>
                    <h1>Y</h1>
                  </div>
                </div>

              </div>
  
            </div>
          </>
        </ParallaxLayer>

        <ParallaxLayer offset={2.41} style={{height: 0, display: "inline-block"}} sticky={{start: 2.41, end: 2.41}}>
          <>
            <div className="d-inline-block" style={{marginTop: "5em", marginLeft: "20%", width: "60%"}}>
              <div className="cent-flex position-relative middlecol bg-main-second text-primary">
                <h4> - Our Duo - </h4>
              </div>
            </div>
          </>
        </ParallaxLayer>

        <ParallaxLayer offset={2.41} style={{height: 0, display: "inline-block"}} sticky={{start: 2.41,end: 3.37}}>
          <>
            <div className="d-inline-block vero Duo" 
              style={{ overflowY: "hidden", marginTop: "5em", verticalAlign: "top" ,width: "20%"}}>
              <div className="bg-primary text-secondary position-relative" style={{height: "100vh"}}>
                <div className="position-absolute colonna1" style={{ backgroundImage: `url("./imma/thirdDay.jpg")` }}>
                </div>

                <div className="position-relative d-flex flex-column justify-content-start align-items-center" 
                  style={{ height: "100%", width: "100%" }}>
                  
                  <div className="d-none d-md-flex flex-column pt-4" style={{height: "80%"}}>
                    <h2 className="text-center text-secondary bg-primary p-2 mx-auto" style={{fontSize: "3em", width: "90%" }}>
                      Third Day
                    </h2>
                    
                    <div className="text-white ps-3">

                      <h3 className="text-secondary">Place:</h3>
                        <h5 className="ps-2">West Sound Studio</h5>
                        <h5 className="ps-2">800 avaiable seats</h5>

                      <h3 className="text-secondary">Time:</h3>
                        <h5 className="ps-2">7:30 AM</h5>
                        <h5 className="ps-2">1:15 PM</h5>
                        <h5 className="ps-2">7:30 PM</h5>

                      <div className="d-flex justify-content-start py-3 ps-3">
                        <img src={`./imma/building.jpg`} alt="" className="border border-2 border-primary"
                          style={{height: "20vh", width: "20vh", borderRadius: "30%"}} />                      
                      </div>
                    </div>

                  </div>

                  <div className="d-block d-md-none text-secondary pt-3 mobilefirst">
                    <h1>T</h1>
                    <h1>H</h1>
                    <h1>I</h1>
                    <h1>R</h1>
                    <h1>D</h1>
                    <h1> </h1>
                    <h1>D</h1>
                    <h1>A</h1>
                    <h1>Y</h1>
                  </div>
                </div>

              </div>
            </div>
          </>
        </ParallaxLayer>

        <ParallaxLayer className="d-none d-md-inline-block" offset={3.41} style={{height: 0 }} sticky={{start: 3.41,end: 3.70}}>
          <>
            <div className="d-inline-block vero Team" 
              style={{ marginTop: "5em" ,overflowY: "hidden" ,verticalAlign: "top" ,width: "20%", marginLeft: "80%"}}>
              <div className="bg-primary text-white position-relative" style={{height: "100vh"}}>
                <div className="position-absolute colonna1" style={{ backgroundImage: `url("./imma/fourthDay.jpg")` }}>
                </div>

                <div className="position-relative d-flex flex-column justify-content-start align-items-center" 
                  style={{ height: "100%", width: "100%" }}>
                  
                  <div className="d-none d-md-flex flex-column pt-4" style={{height: "80%"}}>
                    <h2 className="text-center text-secondary bg-primary p-2 mx-auto" style={{fontSize: "3em", width: "90%" }}>
                      Team Q&A
                    </h2>
                    
                    <div className="text-white ps-3">

                      <h3 className="text-secondary">Place:</h3>
                        <h5 className="ps-2">Central Studio</h5>
                        <h5 className="ps-2">100 avaiable seats</h5>

                      <h3 className="text-secondary">Time:</h3>
                        <h5 className="ps-2">9:30 AM</h5>
                        <h5 className="ps-2">11:15 PM</h5>
                        <h5 className="ps-2">2:30 PM</h5>
                        <h5 className="ps-2">5:30 PM</h5>

                      <div className="d-flex justify-content-start py-3 ps-3">
                        <img src={`./imma/building.jpg`} alt="" className="border border-2 border-primary"
                          style={{height: "20vh", width: "20vh", borderRadius: "30%"}} />                      
                      </div>
                    </div>

                  </div>

                </div>

              </div>
            </div>
          </>
        </ParallaxLayer>

      </Parallax>

    </div>
  )
}

export default Home;