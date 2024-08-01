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
  nameOfRealtor : "Daniella Spoletti",
  numberOfRealtor: "+39 63 786 4509",
}

let housesForSale = [
  {
  id : 1,
  image:"./src/assets/beach.jpg",
  typeOfHouse : "Beachside Bungalo",
  ageOfHouse : 8,
  priceOfHouse : "$525,000",
  addressOfHouse : "12 Coral Street",
  numberOfBedrooms : 2,
  numberOfBathrooms : 1,
  nameOfRealtor : "Georgina Johnson",
  numberOfRealtor: "+63 69 125 9234",

  },

  {
  id : 2,
  image:"./src/assets/apartment.jpg",
  typeOfHouse : "Uptown Apartment",
  ageOfHouse : 2,
  priceOfHouse : "$4000 per month",
  addressOfHouse : "No. 8, 45 Blossom Street",
  numberOfBedrooms : 2,
  numberOfBathrooms : 2,
  nameOfRealtor : "Eleanor Young",
  numberOfRealtor: "+23 78 458 0091",
  },

  {
  id : 3,
  image:"./src/assets/townhouse.jpg",
  typeOfHouse : "Stone Townhouse",
  ageOfHouse : 32,
  priceOfHouse : "$450,000",
  addressOfHouse : "8 Clemson Drive",
  numberOfBedrooms : 3,
  numberOfBathrooms : 2,
  nameOfRealtor : "Isabell West",
  numberOfRealtor: "+24 33 109 6712",
  }
]


  // localStorage.setItem();

  return (
    <>
    <section id="main">
      <Div accommodation={house}/>
      <Div accommodation={housesForSale[0]}/>
      <Div accommodation={housesForSale[1]}/>
      <Div accommodation={housesForSale[2]}/>
    </section>
      
      
        
      
{/* 
      <div style={{display:"flex"}}>
        {housesForSale.map((items, index) => (
          <Div name={items} key={index}/>
        ))}
      </div> */}


  
    </>
  )
}

export default App
