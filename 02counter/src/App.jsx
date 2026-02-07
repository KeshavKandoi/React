
import { useState } from 'react'// ye hook hai jo import ho rha hai
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // hook value/ui ko update karata hai bahut sare hook hote h like useState 

  let  [counter,setCounter] = useState(15)
  
//let counter=15

const addValue=() =>{

  if(counter<20){
 
  counter=counter+1;
  setCounter(counter) // hook hai
  console.log("clicked",counter);
}
}

const removeValue=() =>{
  if(counter>0){
  setCounter(counter-1)
}
}

  return (
    <>
    <h1> chai aur react </h1>
    <h2> Counter value:{counter}</h2>

    <button
     onClick={addValue}
    > Add value {counter}
    </button>

    <br/>
    <button
    onClick={removeValue}
    > remove value{counter}</button>
     
    
    </>
  )
}

export default App
