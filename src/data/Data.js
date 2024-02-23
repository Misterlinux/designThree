import { useEffect } from "react"
import build from "../imma/building.jpg"
import bus from "../imma/bus.jpg"
import stage from "../imma/stage.jpg"
import team from "../imma/team.jpg"
import sign from "../imma/sign.jpg"

import basso from "../imma/basso.jpg"
import basso1 from "../imma/basso1.jpg"
import basso2 from "../imma/basso2.jpg"
import basso3 from "../imma/basso3.jpg"

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

export let band = [
  {
    src: basso,
    marginTop: ["0vh", "0vh"]
  },
  {
    src: basso1,
    marginTop: ["5vh", "4vh"]
  },
  {
    src: basso2,
    marginTop: ["10vh", "36vh"]
  },
  {
    src: basso3,
    marginTop: ["15vh", "40vh"]
  }
]




