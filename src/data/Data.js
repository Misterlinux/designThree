import { useEffect } from "react"
import build from "../imma/building.jpg"
import bus from "../imma/bus.jpg"
import stage from "../imma/stage.jpg"
import team from "../imma/team.jpg"
import sign from "../imma/sign.jpg"

export let galleria = [
  {
    src: team,
    desc: "How we provide the group"
  },
  {
    src: build,
    desc: "How we provide the place"
  },
  {
    src: bus,
    desc: "How we provide the means"
  },
  {
    src: stage,
    desc: "how we provide the experience"
  },
  {
    src: sign,
    desc: "How we provide the fans"
  }
]

export let micro = "biologico"

export const useMount = (callback) =>{
  useEffect(() => {
    callback();
  }, [callback]); 
} 
