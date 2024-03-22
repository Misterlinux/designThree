import { useEffect, useRef, useState } from "react";
import { useStato, useStatoset } from "../data/Context";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { animated, useSpring, useInView, useTransition, useSpringValue} from '@react-spring/web'

import Carousel from 'react-bootstrap/Carousel';
import intro from "../imma/intro.jpg";
import build from "../imma/building.jpg"
import logo from "../imma/logo.png"
import camera from "../imma/fotoicon.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";

function Quarto(){

  let stato = useStato();
  let dispatch = useStatoset()

  let [cart, inCart] = useInView({
    rootMargin: "0px",
    threshold: 0.5
  })

  let cartello = useSpring({
    height: inCart ? "-68vh" : "0vh",
    config: {
      duration: 500
    }
  })

  let [conta, setConta] = useState(0)

  function mossi(e){
    mosso.start( e*20 /*+ "vh"*/ )
    setConta(e)
  }
    
  let mosso = useSpringValue( 0, {config: {duration: 500}})


  return(
    <div ref={cart} style={{height: "100%"}}>
      {/* from 20% to 25% on text intro height */}
      <div className="text-secondary flex-column cent-flex justify-content-around mx-auto" style={{paddingTop: "1vh", height: "22vh", width: "80%"}}>
        <h1 className="text-secondary"> 
          Our Organitation <FontAwesomeIcon className="ps-1" icon={faUserGroup} />
        </h1>
        <div className="bg-secondary p-1 p-md-2 text-white">
          <p>
            We aims to orchestrate an unforgettable 
            festival experience for music lovers worldwide. 
          </p>
        </div>
      </div>

      <div className="quartotest row mx-0 cent-flex caroselheight px-1">

        <div className="d-none d-md-block col-2 p-0 scrollo position-relative" style={{ height: "100%", overflowY: "scroll" }}>
          <animated.div className="position-absolute immagine border border-3 border-secondary" 
            style={{ y: mosso.to(value => `${value}vh`) }}>
          </animated.div>

          {stato.galleria.map((cont, index)=>(
            <div className="immagine" key={index} onClick={()=> mossi(index)}>
              <div className="bassofondo" style={{backgroundImage: `URL(${cont.src})`}}></div>
            </div>
          ))}
        </div>

        <div className="col-12 col-md-9 px-2 px-sm-2">
          <div style={{width: "100%", height: "100%"}}>

            <Carousel onSelect={(e)=> mossi(e)} activeIndex={conta}>
              {stato.galleria.map((cont, index)=>(
                <Carousel.Item key={index}>
                  <div className="caroselheight" style={{width: "100%"}}>
                    <div className="maxiscreen" style={{backgroundImage: `URL(${cont.src})`}}></div>
                  </div>

                  <Carousel.Caption>
                    <p>{cont.desc}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>

          </div>
        </div>

      </div>

      <div className="d-flex d-sm-none col-11 ms-3 me-2 position-relative" style={{height: "14vh", overflowX: "scroll", marginTop: "1vh"}}>
        <animated.div className="position-absolute immagine1 border border border-3 border-secondary" 
          style={{ x: mosso.to(value => `${value*0.7}vh`) }}>
        </animated.div>

        {stato.galleria.map((cont, index)=>(
          <div className="orizontimma" key={index} onClick={()=> mossi(index)}>
            <div className="altofondo" style={{backgroundImage: `url(${cont.src})`}}></div>
          </div>
        ))}
      </div>


      <div className="cent-flex flex-column justify-content-between position-fixed w-100 text-secondary" style={{bottom: 0, height: "17vh"}}>
        <div className="text-white bg-secondary text-center" style={{ width: "82%" }}>
          <p>Team Q&A, Central Studio, 9:30 AM/ 11:15 PM/ 2:30 PM/ 5:30 PM</p>
        </div>

        <h5 className="text-white"> Join our newsletter Pickle</h5>
      </div>
    </div>
  )
}

export default Quarto;