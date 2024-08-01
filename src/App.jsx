import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Div from './components/main card'
// import StateVariable from './components/statevariable'

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

let house = {
  image : "./src/assets/house3.jpg",
  typeOfHouse : 'Italian Villa',
  ageOfHouse : 50,
  priceOfHouse : "$875,000",
  addressOfHouse : "199 Margerita Avenue",
  numberOfBedrooms : 4,
  numberOfBathrooms : 3,
  nameOfRealtor : "Joel Spoletti",
  numberOfRealtor: "+39 63 786 4509",
}



  // localStorage.setItem();

  return (
    <>
      <Div>
        
      </Div>

     
    </>
  )
}

export default App
