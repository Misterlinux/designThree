import { useRef, useEffect } from "react";
import { useStato, useStatoset } from "../data/Context";

function Secondo(){

  let stato = useStato()
  let dispatch = useStatoset()

  function contest(){
    console.log( "altrimenti" )

    dispatch({
      type: "colore",
      base: stato.base/2
    })

  }

  let volta = useRef();

  useEffect(()=>{

    let option={
      rootMargin: "0px 0px -100% 0px",
      threshold: 0
    }

    function inside(entry){
      console.log("margine passato")
      console.log( stato.base )
      console.log( entry[0].isIntersecting)

      if(entry[0].isIntersecting){

        dispatch({
          type: "colore",
          base: 180
        })
      }

    }

    let observer = new IntersectionObserver(inside, option)

    observer.observe(volta.current)

  }, [])


  return(
    <div ref={volta} className="bg-danger" style={{ width: "100%", height: "100vh"}}>
      <h1>Level being {stato.base}</h1>

      <div className="text-center">

        <button className="btn btn-danger" onClick={contest}>
          context 
        </button>
      </div>
    </div>
  )
}

export default Secondo;