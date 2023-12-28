import { useState,useEffect } from 'react'
import useStorage from '../src/useStorage'
import './App.css'

function App() {

  const[value,setValue] = useState("")
  useEffect(() => {
    setValue(localStorage.getItem("Value"))
  },[])
  useStorage(value)

  return (
    <div>
      <input type="text" onChange={(e) => setValue(e.target.value)} value={value}/>
    </div>
  )
}

export default App