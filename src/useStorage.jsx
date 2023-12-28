import {useEffect} from 'react'

function useStorage(value) {
  useEffect(() => {
    if(value){
        localStorage.setItem("Value",value)
    }
  },[value])
}

export default useStorage