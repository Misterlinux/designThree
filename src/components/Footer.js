import { useEffect, useRef, useState } from "react";
import { useStato, useStatoset } from "../data/Context";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faMapLocationDot, faEnvelope} from "@fortawesome/free-solid-svg-icons";

function Footer({forwardedRef}){

  //let [base, setBase] = useState(0)

  //console.log( forwardedRef.current )

  /*
  function upper(){
    console.log("Maybe we can find a solution to this")
    setBase(1)

    window.scrollTo({ bottom: 0, behavior: 'smooth' });
    //forwardedRef.current.scrollTo(4)
  }

  //console.log( "------YYY---------" )

  function segna(e){
    e.preventDefault()
    //forwardedRef.current.scrollTo(4)

    //maybe we can just add the element to it
    console.log(e)

    alert("Alright, we will send an email to " + testo + " eventually")
  }
  */

  let [testo, setTesto] = useState("")

  //Footer, lets try to fix the on FORM re-size of the entire vindow and forced translateY of the page
  //I didn't manage to fix the mobile keyboard height vh shrink and empty white space on the bottom
  //So I just added an email button, even importing the parallax Ref and scroollTo () didnt work
  return(
    <div className="px-0">
      <div className="row col-12 mx-0 px-0 d-flex justify-content-center justify-content-sm-around">

        <div className="d-none d-sm-block col-sm-3 col-md-3">
          <h5 style={{width: "120%"}}>About TuneFuse</h5>
          <p className="mt-1 mt-md-4" style={{fontSize: "0.8em", width: "135%"}}>
            Tunefuse pioneers mind-controlled music creation, 
            letting users compose and perform using only their thoughts.
          </p>
        </div>


        <div className="row col-12 col-sm-6 col-md-6 px-0 py-0 d-flex justify-content-center">
          <div style={{width: "5vh"}} className="sini px-0 bg-main">
          </div>  

          {/* for some reason if we use d-flex it shortens the space on desktop */}
          <div className="col-9 col-sm-9 col-md-8 taglio d-flex justify-content-around cent-flex px-0 py-1 py-md-2 bg-main text-white">
            <div>
              <FontAwesomeIcon style={{animationDuration: "5s"}} icon={faEnvelope} className="ps-1 text-secondary fs-2" beatFade/>
            </div>

            <h2 style={{ fontSize: "2.5em" }}>
              <a className="text-center text-secondary text-decoration-none" href="mailto:tuneFuse@example.com">
                Contact Us
              </a>
            </h2>

            <div>
              <FontAwesomeIcon style={{animationDuration: "5s"}} icon={faEnvelope} className="ps-1 text-secondary fs-2" beatFade/>
            </div>
            {/*col-3 col-sm-4 col-md-3 px-0 text-end*/}
            {/*
            <form className="row mx-0 d-flex justify-content-center">
              <div className="col-8 col-md-7 px-0">
                <input type="text" className="form-control w-100" name="indi" 
                  value={testo} onChange={(e)=> setTesto(e.target.value)} />
              </div>
              <div className="col-auto px-0"> 
                <button className="btn btn-sm py-2 btn-success">
                  Sign-in 
                </button>
              </div>
            </form>
            */}
          </div>

          <div style={{width: "5vh"}} className="des bg-main">
          </div>

          <div className="d-flex justify-content-around col-9 col-md-8 pt-2">
            <div className="d-flex justify-content-center align-items-center">
              <FontAwesomeIcon className="p-3 bg-secondary text-white rounded-circle" style={{fontSize: "1em"}} icon={faFacebook} />
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <FontAwesomeIcon className="p-3 bg-secondary text-white rounded-circle" style={{fontSize: "1em"}} icon={faTwitter} />
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <FontAwesomeIcon className="p-3 bg-secondary text-white rounded-circle" style={{fontSize: "1em"}} icon={faFacebook} />
            </div>
          </div>

          <div className="text-white d-flex d-sm-none justify-content-around row col-12 px-0 pt-2">
            <div className="col-6 row px-0">
              <div className="col-3 col-md-2 pe-0 align-self-center text-end">
                <FontAwesomeIcon icon={faMapLocationDot} />
              </div>
              <div className="col-9 col-md-10 ps-1">
                St. Lorem, ipsum
              </div>
            </div>
            <div className="col-6 row px-0">
              <div className="col-3 col-md-2 pe-0 align-self-center text-end">
                <FontAwesomeIcon icon={faPhone} /> 
              </div>
              <div className="col-9 col-md-10 ps-1 pe-0 text-break">
                1234567890
              </div>
            </div>
          </div>

        </div>



        <div className="d-none d-sm-block col-sm-3 col-md-3 px-0">
          <h4 className="text-center">Contact Us</h4>

          <div className="row col-12 mx-0 py-1">
            <div className="col-3 col-md-2 pe-0 align-self-center">
              <FontAwesomeIcon icon={faMapLocationDot} />
            </div>
            <div className="col-9 col-md-10 ps-1">
              St. Lorem, ipsum
            </div>
          </div>

          <div className="row col-12 mx-0 py-1">
            <div className="col-3 col-md-2 pe-0 align-self-center">
              <FontAwesomeIcon icon={faPhone} /> 
            </div>
            <div className="col-9 col-md-10 ps-1 pe-0 text-break">
              1234567890
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Footer;