import { useEffect, useRef } from "react";
import { useStato, useStatoset } from "../data/Context";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'


function Terzo(){

  function alterna(){
    console.log( "allocazione" )
  }


  return(   
    <div>
      <h2>I get this to stick with some</h2>
      <div>
        <button className="btn btn-primary" onClick={alterna}>
          Vantage
        </button>
      </div>
    </div>
  )
}

export default Terzo;