import { useRef, useEffect, useState } from "react";
import { useStato, useStatoset } from "../data/Context";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { animated, useSprings, to as interpolate, useTrail, useResize} from '@react-spring/web'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandsClapping } from "@fortawesome/free-solid-svg-icons";

import basso from "../imma/basso.jpg"

function Secondo(){

  let stato = useStato()
  let dispatch = useStatoset()

  let tutto = useRef()

  let piccolo = useRef( false )

  const { width, height } = useResize({
    container: tutto,
    onChange: ({value: {width, height} })=> {

      if( width < 500 ){
        piccolo.current = true
      }else{
        piccolo.current = false
      }
    }
  })

  useEffect(()=>{
    piccolo.current = width.animation.to < 500 ? true : false
  }, [width])


  //so, The order of animations 
  function axis(x){

    if( piccolo.current ){
      return {x: ((x%2)) ? "50%" : "0%" }
    }else{
      return {x: 25 * (3-x)  + "%"}
    }
  }

  let [reve, setReve] = useState(false)

  //Lets try a local Intersect for this one
  let questua = document.getElementById("questo")

  useEffect(()=>{
    let options = {
      root: questua,
      rootMargin: "0px",
      threshold: 0.2
    }

    function passa(entry){
      //console.log( entry )

      if(entry[0].isIntersecting){
        setReve(true)
      }else{
        setReve(false)
      }
    }

    let observer = new IntersectionObserver(passa, options)
    observer.observe(tutto.current)
  }, [])


  //Remember that the useSprings starts from 0, no matter the number
  let [pre, preApi] = useSprings(4, i => {{
    
    return {
      from: {
        x: "0%" ,
      },
      to: reve ? axis(i) : "0%",
      delay: 500 * i,
    }
  } }, [reve])


  function clusta(){
    console.log( "Allevatori" )
    setReve((x)=> !x )
  }

  //so unlike sticky we can use the height 100% with the offset height set
  //We can use 100vh and the %

  //also remember that length is +1 of index array 

  //remember that when using d-flex to justify and align multiple elements you need the container to re-set
  //it to 100% for its height and width

  console.log( stato.band )
  return(
    <div style={{height: "100vh"}} ref={tutto}>

      <div className="flex-column cent-flex pt-md-4" style={{width: "80%", height: "15vh"}}>
        <div className="secondTitle flex-column cent-flex">
          <h1 className="text-secondary text-center p-1">
            The Beatniks <FontAwesomeIcon className="px-1" icon={faHandsClapping} />
          </h1>
          <div className="p-1 p-md-2 text-white bg-secondary" style={{ width: "100%" }}>
            {/*They tour the nation with their soulful blend 
            of blues and rock, driven by a passionate tight-knit group of musicians.*/}
            <p><b>Central Music park/ 1600 seats</b></p>
            <p><b> 12:00 AM/ 8:30 PM </b></p>
          </div>
        </div>
      </div>

      <div className="pt-2 pt-md-2" style={{width: "80%"}}>
        <div className="row col-12 mx-0 position-relative">
            
          {stato.band.map((cont, index)=> (
            
            <animated.div className="col-6 col-md-3 position-absolute carta" key={index}
              style={{
                //x: pre[piccolo.current ? index : (stato.band.length-1)-index].x, 
                left: pre[piccolo.current ? index : (stato.band.length-1)-index].x,
                marginTop: cont.marginTop[piccolo.current ? 1 : 0]  
              }}>
              <div className="bg-primary position-relative" style={{height: "100%", width: "100%"}}>
                <div className="position-absolute present" style={{backgroundImage: `url(${cont.src})`}}></div>

                <div className="position-relative text-white p-2 d-flex flex-column justify-content-between"
                  style={{ height: "100%" }}>
                  <div className="text-center text-md-start">
                    <h3 className=""> {cont.name} </h3>
                    <p className="d-none d-md-flex"> {cont.title} </p>
                    <p className="d-none d-md-flex"><b> {cont.play} </b></p>
                  </div>
                  <div className="text-center text-md-start" >
                    <p className="d-none d-md-flex"> {cont.desc} </p>
                    <p className="d-block mx-auto d-md-none"> {cont.title} 
                      <FontAwesomeIcon className="ps-1" icon={cont.icon} />
                    </p>
                    <p className="d-block mx-auto d-md-none text-wrap"><b> {cont.play} </b></p>
                  </div>
                </div>
              </div>
            </animated.div>
          ))}

        </div>
      </div>

    </div>
  )
}

export default Secondo;