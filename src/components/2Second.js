import { useRef, useEffect, useState } from "react";
import { useStato, useStatoset } from "../data/Context";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { animated, useSprings, to as interpolate, useTrail, useResize} from '@react-spring/web'

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
      return {x: ((x%2)) ? "38vw" : "0vw" }
    }else{
      return {x: 18 * (3-x)  + "vw"}
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
      x: "0vw" ,
    },
    to: reve ? axis(i) : "0vw",
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
  return(
    <div style={{height: "100vh"}} ref={tutto}>

      <div style={{paddingTop: "4.5vh", width: "75%"}}>
        <h1>The Beatniks</h1>
        <p className="px-1">
          They tour the nation with their soulful blend 
          of blues and rock, driven by a passionate tight-knit group of musicians.
        </p>
      </div>

      <div className="pt-2" style={{width: "72%"}}>
        <div className="row col-12 mx-0 position-relative">
            
          {stato.band.map((cont, index)=> (
            
            <animated.div className="col-6 col-md-3 position-absolute carta" key={index}
              style={{
                x: pre[piccolo.current ? index : (stato.band.length-1)-index].x, 
                marginTop: cont.marginTop[piccolo.current ? 1 : 0]  
              }}>
              <div className="bg-danger position-relative" style={{height: "100%", width: "100%"}}>
                <div className="position-absolute present" style={{backgroundImage: `url(${cont.src})`}}></div>

                <div className="position-relative text-white">
                  <p>Mickaela Noin</p>
                  <p>Drumminst</p>
                  <p>I played the drum while everyone told be to play music</p>
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