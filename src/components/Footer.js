import { useEffect, useRef } from "react";
import { useStato, useStatoset } from "../data/Context";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

function Footer(){

  

  return(
    <div>
      <div className="row col-12 mx-0 d-flex justify-content-center">
        <div style={{height: "5vh", width: "5vh"}} className="sini">
        </div>
        <div className="col-4 taglio">
          Subscribe
        </div>
        <div style={{height: "5vh", width: "5vh"}} className="des">
        </div>
      </div>

      <p>This is the footer</p>
    </div>
  )
}

export default Footer;