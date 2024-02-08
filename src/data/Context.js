import { useReducer, useContext, createContext, Children} from 'react';
import { micro } from './Data';

let Stato = createContext(null)
let StatoSet = createContext(null)
    
document.documentElement.style.setProperty("--primo", "brown")
document.documentElement.style.setProperty("--base", 250)

export default function Task({children}){

  function reducer(state, action) {

    switch(action.type){
      case "colore": {
        console.log( document.documentElement.style.getPropertyValue("--base") )
        console.log( action.base )
        document.documentElement.style.setProperty("--base", action.base)

        state.base = action.base
        return{
          ...state
        }
      }
    }

    throw Error('Unknown action: ' + action.type);
  }

  const initial = { base: 120 }
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