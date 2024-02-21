import { useEffect, useRef } from "react";
import { useStato, useStatoset } from "../data/Context";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'


function Terzo(){


  //THE COL-12 will cover the 100% of the current aviable space, 
  return(   
    <div style={{marginLeft: "32%"}}>

      <div style={{marginTop: "5vh"}}>
        <h1>This is the duo</h1>
      </div>

      <div className="d-flex justify-content-center row mx-0 col-12">

        <div className="col-10 row mx-0" style={{height: "30vh"}}>
          <div className="col-4">
            Imma
          </div>
          <div className="col-8">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi voluptatibus excepturi 
            amet itaque ipsum ab sint harum ipsam pariatur, neque incidunt numquam, debitis dolores 
            natus, fugiat asperiores temporibus quaerat similique.
          </div>
        </div>

        <div className="col-10 row mx-0 mt-3" style={{height: "30vh"}}>
          <div className="col-8">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi voluptatibus excepturi 
            amet itaque ipsum ab sint harum ipsam pariatur, neque incidunt numquam, debitis dolores 
            natus, fugiat asperiores temporibus quaerat similique.
          </div>
          <div className="col-4">
            Imma
          </div>
        </div>

      </div>

    </div>
  )
}

export default Terzo;