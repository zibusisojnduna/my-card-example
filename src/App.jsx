import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Div from './components/main card'
import StateVariable from './components/statevariable'

function App() {
  const [count, setCount] = useState(0)

const game ={
  title : "Uncharted 2:Among Thieves",
  year : 2010,
  system : "Playstation 3",
  modes : ["Single Player", "LAN", "Multiplayer"],
  price : 29.99,
  available : true,
}



  // localStorage.setItem();

  return (
    <>
      <Div>
        
      </Div>

      <StateVariable></StateVariable>
    </>
  )
}

export default App
