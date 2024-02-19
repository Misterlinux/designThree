import { useRef, useEffect } from "react";
import { useStato, useStatoset } from "../data/Context";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function Primo(){

  let stato = useStato()
  let dispatch = useStatoset()


  //WE can obtain the dual square effect using double position absolute on a background Relative, 
  //also if using margin only margin-left/top will work while if using 
  //position on absolute all 4 will work
  return(
    <div style={{ marginLeft: "32%" }}>
      <h1 className="text-center">Welcome first member</h1>
        
      <div className="d-flex  position-relative" style={{ height: "30vh", width: "30vh" }}>
        <div className="bg-warning position-relative" style={{ width: "100%", height: "100%" }}>

          <div className="bg-danger position-absolute" 
            style={{ height: "10vh", width: "10vh", marginLeft: "-15px",marginTop: "-15px", zIndex: -5 }}>
          </div>

          <div className="bg-success position-absolute" 
            style={{ height: "15vh", width: "15vh", zIndex: 5, bottom: "-15px", right: "-15px" }}>
          </div>

        </div>

      </div>

      <div className="pt-3">
        <h1>Joseph De Milio</h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora minus quasi nobis repudiandae. 
          Quidem, eius omnis? Voluptas exercitationem, sapiente officiis adipisci eos fugiat cupiditate ad 
          maxime ipsa. Ad, similique quas!
        </p>
      </div>

    </div>
  )
}

export default Primo;