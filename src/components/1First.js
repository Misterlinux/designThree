import { useRef, useEffect } from "react";
import { useStato, useStatoset } from "../data/Context";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function Primo(){

  let stato = useStato()
  let dispatch = useStatoset()

  return(
    <div>
      <h1>This is the first element</h1>

      <div className="bg-success" style={{ height: "80vh" }}>
        Insomma siamo qui
      </div>

    </div>
  )
}

export default Primo;