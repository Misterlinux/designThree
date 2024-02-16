import { useEffect, useRef } from "react";
import { useStato, useStatoset } from "../data/Context";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

function Quarto(){

  let stato = useStato();
  let dispatch = useStatoset()

  function myself(){
    console.log( "aspetta solo che ti vedano" )
  }

  return(
    <div>
      <h1>Gia c'era stato {stato.base}</h1>

      <div>
        <button className="btn btn-primary" onClick={myself}>
          Vantagge
        </button>
      </div>

      <div style={{ height: "100vh", border: "solid 2px brown" }}>
        Lorem ipsum dolor sit amet.
      </div>
    </div>
  )
}

export default Quarto;