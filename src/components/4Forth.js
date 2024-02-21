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
    mosso.start( e*20 + "vh" )
    setConta(e)
  }
    
  let mosso = useSpringValue("0vh", {config: {duration: 500}})

  return(
    <div ref={cart}>
      <div className="text-center" style={{paddingTop: "4em"}}>
        <h3>The organitation</h3>
      </div>

      <div className="d-flex justify-content-start col-12 row mx-0 ps-2" style={{width: "82%", height: "65vh"}}>

        <div className="col-3 d-none d-sm-block p-0 scrollo position-relative" style={{ height: "100%", overflowY: "scroll" }}>

          <animated.div className="position-absolute immagine" style={{border: "3px solid red", y: mosso }}>
          </animated.div>

          {stato.galleria.map((cont, index)=>(
            <div className="immagine" key={index} onClick={()=> mossi(index)}>
              <div className="bassofondo" style={{backgroundImage: `URL(${cont.src})`}}></div>
            </div>
          ))}

        </div>

        <div className="col-sm-8 col-11 px-3">
          <div style={{width: "100%", height: "100%"}}>

          <Carousel onSelect={(e)=> mossi(e)} activeIndex={conta}>
            {stato.galleria.map((cont, index)=>(
              <Carousel.Item key={index}>
                <div style={{width: "100%", height: "65vh"}}>
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

        <div className="d-flex d-sm-none col-11 px-3 position-relative" style={{ width: "100%", height: "20vh", overflowX: "scroll" }}>
          <div className="orizontimma">
            <div className="altofondo" style={{backgroundImage: `url(${stato.galleria[0].src})`}}></div>
          </div>

          <div className="orizontimma">
            <div className="altofondo" style={{backgroundImage: `url(${stato.galleria[0].src})`}}></div>
          </div>

          <div className="orizontimma">
            <div className="altofondo" style={{backgroundImage: `url(${stato.galleria[0].src})`}}></div>
          </div>

          <div className="orizontimma">
            <div className="altofondo" style={{backgroundImage: `url(${stato.galleria[0].src})`}}></div>
          </div>
        </div>


      </div>

    </div>
  )
}

export default Quarto;