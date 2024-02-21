import { useRef, useEffect } from "react";
import { useStato, useStatoset } from "../data/Context";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

function Secondo(){

  let stato = useStato()
  let dispatch = useStatoset()


  //so unlike sticky we can use the height 100% with the offset height set
  //We can use 100vh and the %
  return(
    <div style={{height: "100vh"}}>

      <div style={{marginTop: "10vh"}}>
        <h1>Costa </h1>
      </div>

      <div style={{width: "68%"}}>
        <div className="row col-12 mx-0">
          <div className="col-3" style={{height: "35vh" }}>
            <div className="px 2 bg-danger" style={{height: "100%", width: "100%"}}></div>
          </div>
          <div className="col-3" style={{height: "35vh", marginTop: "10vh"}}>
            <div className="px 2 bg-danger" style={{height: "100%", width: "100%"}}></div>
          </div>
          <div className="col-3" style={{height: "35vh", marginTop: "20vh"}}>
            <div className="px 2 bg-danger" style={{height: "100%", width: "100%"}}></div>
          </div>
          <div className="col-3" style={{height: "35vh", marginTop: "30vh" }}>
            <div className="px 2 bg-danger" style={{height: "100%", width: "100%"}}></div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Secondo;