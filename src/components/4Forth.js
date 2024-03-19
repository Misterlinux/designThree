import { useEffect, useRef, useState } from "react";
import { useStato, useStatoset } from "../data/Context";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { animated, useSpring, useInView, useTransition, useSpringValue} from '@react-spring/web'

import Carousel from 'react-bootstrap/Carousel';
import intro from "../imma/intro.jpg";
import build from "../imma/building.jpg"
import logo from "../imma/logo.png"
import camera from "../imma/fotoicon.svg";

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
    <div ref={cart}>
      <div className="text-center text-secondary" style={{paddingTop: "4em", backgroundColor: `hsla(calc(${parseInt(stato.base) + 20}), 100%, 20%, 1)`}}>
        <h3>The organitation {stato.base} </h3>
      </div>

      <div className="quartotest row mx-0 caroselheight">

        <div className="d-none d-md-block col-3 p-0 scrollo position-relative" style={{ height: "100%", overflowY: "scroll" }}>
          <animated.div className="position-absolute immagine" style={{border: "3px solid red", 
            y: mosso.to(value => `${value}vh`) }}>
          </animated.div>

          {stato.galleria.map((cont, index)=>(
            <div className="immagine" key={index} onClick={()=> mossi(index)}>
              <div className="bassofondo" style={{backgroundImage: `URL(${cont.src})`}}></div>
            </div>
          ))}
        </div>

        <div className="col-12 col-md-8 px-2 px-sm-3">
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

      <div className="d-flex d-sm-none col-11 ms-3 me-2 position-relative" style={{height: "14vh", overflowX: "scroll", marginTop: "2vh"}}>
        <animated.div className="position-absolute immagine1" style={{border: "3px solid red", 
        x: mosso.to(value => `${value*0.7}vh`) }}>
        </animated.div>

        {stato.galleria.map((cont, index)=>(
          <div className="orizontimma" key={index} onClick={()=> mossi(index)}>
            <div className="altofondo" style={{backgroundImage: `url(${cont.src})`}}></div>
          </div>
        ))}
      </div>


      <div className="mx-auto position-fixed w-100" style={{bottom: 0}}>
        <h5 className="text-center"> Sign in to the newsletter </h5>
      </div>
    </div>
  )
}

export default Quarto;