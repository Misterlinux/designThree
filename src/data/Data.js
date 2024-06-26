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

import duo1 from "../imma/duo1.jpg"
import duo2 from "../imma/duo2.jpg"

import { faMusic, faGuitar, faDrum, faMicrophoneLines} from "@fortawesome/free-solid-svg-icons";

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

export let band = [
  {
    src: basso,
    marginTop: ["0vh", "0vh"],
    name: `John Smith`,
    title: `"The Groove Master"`,
    play: `Bass Guitar`,
    icon: faMusic,
    desc: `The backbone of The Beatnicks, 
      his groovy basslines keep the band's sound tight and infectious.`
  },
  {
    src: basso1,
    marginTop: ["5vh", "4vh"],
    name: `Alice Johnson`,
    title: `"The Shredder"`,
    play: `Lead Guitar`,
    icon: faMusic,
    desc: `She is known for her electrifying solos and 
      impressive technical prowess,which elevate the band's sound.`,
  },
  {
    src: basso2,
    marginTop: ["10vh", "36vh"],
    name: `Mark Davis`,
    title: `"The Rhythm King"`,
    play: `Drums`,
    icon: faMusic,
    desc: `The undisputed heartbeat of the Beatniks, 
      fueling the band's performance with his powerful and dynamic drumming.`
  },
  {
    src: basso3,
    marginTop: ["15vh", "40vh"],
    name: `Sarah Chang`,
    title: `"The Melody Maker"`,
    play: `Keyboard/ Synth`,
    icon: faMusic,
    desc: `She is responsible for crafting the atmospheric melodies on stage, 
      her keen sense of harmony defines the band's sound`
  }
]

/* 
-backgroundImage
-icon on desc
-nome + mini descrizione
- descript
- loading bar (%)
- vies and albums sold

*/

export let duo = [
  {
    name: "Lily Rivers",
    icon: faMusic,
    photo: duo1,
    role: "A vocational vocalist",
    desc: [
    `She mesmerizes audiences with her soulful 
    delivery and captivating stage presence.`,
    `Lily Rivers captivates with folk-inspired melodies and 
    emotive lyricism. Experience her acoustic mastery and 
    heartfelt storytelling at the festival.`],
    views: ["1.750.000", 70],
    albums: [6, 30],
  },    
  {
    name: "Max Hayes",
    icon: faGuitar,
    photo: duo2,
    role: "The IN-strumentalist",
    desc: [`Max's fingers weave intricate melodies 
    that stir the soul and ignite the imagination.`,
    `Max mesmerizes with soulful guitar riffs 
    and intricate piano melodies. Prepare for a 
    performance filled with passion and depth at 
    the festival.`
    ],
    views: ["900.000", 40],
    albums: [10, 55],
  }
]



