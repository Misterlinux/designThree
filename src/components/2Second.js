import { useRef, useEffect } from "react";
import { useStato, useStatoset } from "../data/Context";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

function Secondo(){

  let stato = useStato()
  let dispatch = useStatoset()


  //so unlike sticky we can use the height 100% with the offset height set
  return(
    <div >

      <h1>Costa </h1>

    </div>
  )
}

export default Secondo;