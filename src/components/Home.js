import { useEffect, useRef, useMemo, useState } from "react";
import { useStato, useStatoset } from "../data/Context";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Primo from "./1First";
import Secondo from "./2Second";
import Terzo from "./3Third";
import Quarto from "./4Forth";
import Intro from "./Intro";
import Footer from "./Footer";

import { ReactComponent as Guir } from "../imma/guitar.svg"
import { ReactComponent as Lamp } from "../imma/lampost1.svg" 

import { useSpringValue } from "@react-spring/web";

function Home({ navotto, navParent }){

  let stato = useStato()
  let dispatch = useStatoset()

  const [parallaxLayerMounted, setParallaxLayerMounted] = useState(false);

  useEffect(() => {
    setParallaxLayerMounted(true); 
  }, []);

  //instead of a resize we use it for clientWidth
  let parle = useRef(null)
  let finestra = useRef()

  let base = document.getElementById("finestra")
  let stratosRefs = useRef([])
  let colRefs = useRef([])

  //First intersect for the navbar and bar animation
  useEffect(()=>{

    let navItems = navParent.current

    if( stratosRefs.current.length ){

      let options = {
        root: finestra.current.container.current,
        rootMargin: "0px 0px -85% 0px",
        threshold: 0,
      }
    
      console.log( navItems )

      const navOb = stratosRefs.current.reduce((acc, strat) => {
        const matchingCol = navItems.find((col) => col.className.includes(strat.id));
        
        if (matchingCol) {
          acc[strat.id] = matchingCol;
        }
        
        return acc;
      }, {});


      function altro(entries){
  
        entries.forEach((entry)=>{

          if( entry.isIntersecting ){

            stato.springa.start( entry.target.attributes.move.value )

            navItems.forEach(item=>{
              item.classList.remove("active")
            })
            navOb[entry.target.id].classList.add("active")

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
  
      stratosRefs.current.forEach((valo)=>{
        observer.observe(valo)
      })
    }

    // ----------

    let reffe;

    //we cache the values instead of queryselect() on intersect    
    const colonne = stratosRefs.current.reduce((acc, strat) => {
      const matchingCol = colRefs.current.find((col) => col.className.includes(strat.id));
      
      if (matchingCol) {
        acc[strat.id] = matchingCol;
      }
      
      return acc;
    }, {});


    if(stratosRefs.current.length){

      let coloptions = {
        root: finestra.current.container.current, 
        rootMargin: "0px",
        threshold: [...Array(150).keys()].map(x => x / 150),
      }

      function scrolled(entries){

        entries.forEach((entry)=>{

          //We can't start the boundingClient.Top from 0 coz we need to space it from the navbar
          if(entry.isIntersecting && entry.boundingClientRect.top <= 75 ){
          
            reffe = colonne[entry.target.id]
            requestAnimationFrame(() => {
              reffe.style.height = `calc(100vh + ${entry.boundingClientRect.top - 75 + "px"} )`;
            });
          }

        })
      } 

      let observer1 = new IntersectionObserver(scrolled, coloptions)

      stratosRefs.current.forEach((valo1)=>{
        observer1.observe(valo1)
      })

    }

  }, [parallaxLayerMounted])

  return(
    <div ref={parle} style={{width: "100%" }}>
      <Parallax pages={4.75} className="noScroll" ref={finestra} id="finestra" style={{ height: "100vh" }}>
        <ParallaxLayer  offset={0}>
          <Intro/>
        </ParallaxLayer>

        {/* component allows fill and height/width */}
        <ParallaxLayer offset={0.55} className="cent-flex bg-main">
          <Guir className="position-relative firstback"
            style={{ fill: `hsl(${stato.base}, 100%, 36%)`, height: "45vh", width: "12%" }}/>
        </ParallaxLayer>

        <ParallaxLayer offset={0.55}>
          <div className="stratos" id="TuneFuse" move="25%" color={300} 
            ref= {(ref)=> stratosRefs.current[0] = ref }>
            <Primo />
          </div>
        </ParallaxLayer>
      
        <ParallaxLayer offset={1.55} className="bg-main">
          <div className="stratos" id="Band" move="50%" color={210}
            ref= {(ref)=> stratosRefs.current[1] = ref }>
            <Secondo />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={2.55} className="bg-main" factor={window.innerWidth< 600 ? 1.05 : 1}>
          <div className="stratos" id="Duo" move="75%" color={120} style={{ height: "100%" }}
            ref= {(ref)=> stratosRefs.current[2] = ref }>
            <Terzo />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={window.innerWidth< 600 ? 3.60 : 3.55} className="bg-main cent-flex">
          <Lamp className="position-relative fourthback" 
            style={{ fill: `hsl(${parseInt(stato.base) + 180 }, 100%, 36%)`, height: "28vh", width: "12%" }}/>
        </ParallaxLayer>

        {/* 3.55  */}
        <ParallaxLayer offset={window.innerWidth< 600 ? 3.60 : 3.55} factor={window.innerWidth< 600 ? 0.95 : 1}>
          <div className="stratos" id="Team" move="100%" color={35} style={{ height: "100%" }}
            ref= {(ref)=> stratosRefs.current[3] = ref }>
            <Quarto />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={4.55} factor={0.2} className="bg-primary">
          <Footer/>
        </ParallaxLayer>

        <ParallaxLayer offset={0.30} style={{ height: 0 ,display: "inline-block"}} sticky={{ start: 0.30, end: 1.55 }}>
          <> 
            <div className="position-relative d-inline-block lato TuneFuse" style={{ width: "25%" }}
              ref={(ref)=> ( colRefs.current[0] = ref )}>

              <div className="position-relative bg-primary" style={{ height: "100vh" }} >
                <div className="position-absolute colonna" style={{ backgroundImage: `url("./imma/dayOne.jpg")` }}>
                </div>

                <div className="position-relative d-flex flex-column justify-content-start align-items-center" 
                  style={{ height: "100%" }}>
                  
                  <div className="d-none d-md-flex flex-column justify-content-around pt-4" style={{height: "80%"}}>
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
                        <img src={`./imma/building.jpg`} alt="" className="colImag border border-2 border-primary"/>                      
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
            <div className="middleCol" style={{marginLeft: "25%", width: "55%" }}>
              <div className="cent-flex position-relative text-primary bg-main-second">
                <h4> - Our Band - </h4>
              </div>
            </div>
          </>
        </ParallaxLayer>

        <ParallaxLayer offset={1.37} style={{ height: 0, display: "inline-block"}} sticky={{start: 1.37, end: 2.55}}>
          <>
            <div className="d-inline-block lato Band" style={{marginLeft: "80%", width: "20%", transition: "0.05s"}}
              ref={(ref)=> ( colRefs.current[1] = ref )}>

              <div className="position-relative bg-primary text-secondary" style={{height: "100vh" }}>
                <div className="position-absolute colonna" style={{ backgroundImage: `url("./imma/dayTwo.jpg")` }}>
                </div>


                <div className="position-relative d-flex flex-column justify-content-start align-items-center" 
                  style={{ height: "100%"}}>
                  
                  <div className="d-none d-md-flex flex-column pt-4" style={{height: "80%"}}>
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
                        <img src={`./imma/building.jpg`} alt="" className="colImag border border-2 border-primary"/>                      
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
            <div className="middleCol" style={{marginLeft: "20%", width: "60%"}}>
              <div className="cent-flex position-relative bg-main-second text-primary">
                <h4> - Our Duo - </h4>
              </div>
            </div>
          </>
        </ParallaxLayer>

        <ParallaxLayer offset={2.41} style={{height: 0, display: "inline-block"}} sticky={{start: 2.41,end: 3.37}}>
          <>
            <div className="d-inline-block lato Duo" style={{ width: "20%"}}
              ref={(ref)=> ( colRefs.current[2] = ref )}>
              <div className="bg-primary text-secondary position-relative" style={{height: "100vh"}}>
                <div className="position-absolute colonna" style={{ backgroundImage: `url("./imma/thirdDay.jpg")` }}>
                </div>

                <div className="position-relative d-flex flex-column justify-content-start align-items-center" 
                  style={{ height: "100%" }}>
                  
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
                        <img src={`./imma/building.jpg`} alt="" className="colImag border border-2 border-primary"/>                      
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
            <div className="d-inline-block lato Team" style={{ width: "20%", marginLeft: "80%" }}
              ref={(ref)=> ( colRefs.current[3] = ref )}>
              <div className="bg-primary text-white position-relative" style={{height: "100vh"}}>
                <div className="position-absolute colonna" style={{ backgroundImage: `url("./imma/fourthDay.jpg")` }}>
                </div>

                <div className="position-relative d-flex flex-column justify-content-start align-items-center" 
                  style={{ height: "100%" }}>
                  
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
                        <img src={`./imma/building.jpg`} alt="" className="colImag border border-2 border-primary" />                      
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