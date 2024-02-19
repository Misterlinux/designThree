import { useReducer, useContext, createContext} from 'react';
import { animated, useTransition, useScroll, useSpringValue} from '@react-spring/web'
import { micro } from './Data';
import { passo } from '../components/Home';

let Stato = createContext(null)
let StatoSet = createContext(null)
    
document.documentElement.style.setProperty("--primo", "brown")
document.documentElement.style.setProperty("--base", 250)

export default function Task({children}){

  function reducer(state, action) {

    switch(action.type){
      case "colore": {
        document.documentElement.style.setProperty("--base", action.base)

        state.base = action.base
        return{
          ...state
        }
      }
    }

    throw Error('Unknown action: ' + action.type);
  }

  const initial = { base: 120, springa: useSpringValue("17%",{ config:{ mass: 3, tension: 400, friction: 40 }} ) }
  const [instate, dispatch] = useReducer(reducer, initial);

  return(
    <div>
      
    <Stato.Provider value={instate}>
      <StatoSet.Provider value={dispatch} >
        {children}
      </StatoSet.Provider>
    </Stato.Provider>

    </div>
  )
}

export function useStato() {
  return useContext(Stato)
}

export function useStatoset() {
  return useContext(StatoSet)
}