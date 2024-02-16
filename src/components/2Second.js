import { useRef, useEffect } from "react";
import { useStato, useStatoset } from "../data/Context";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

function Secondo(){

  let stato = useStato()
  let dispatch = useStatoset()


  function doing(){
    console.log("ok wo how do we do?")
  }

  //so unlike sticky we can use the height 100% with the offset height set
  return(
    <div style={{backgroundColor: "lightblue" }}>

      <div style={{ height: "20%" }}>
        <h4>Siamo circolari</h4>

      </div>

      <div style={{ height: "30%", backgroundColor: "red", width: "50%"}}>
        Andiamo
      </div>

      <div style={{ height: "50%", backgroundColor: "lightcoral" }}>
        <p>Altri circoli</p>

        <button className="btn btn-primary" onClick={() => doing()}>
          Click Child
        </button>
      </div>
    </div>
  )
}

export default Secondo;