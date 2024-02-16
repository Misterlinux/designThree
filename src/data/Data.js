import { useEffect } from "react"

export let micro = "biologico"

export const useMount = (callback) =>{
  useEffect(() => {
    callback();
  }, [callback]); 
} 
