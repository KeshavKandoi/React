import Button from '@mui/material/Button';

import './App.css'

   

  export default function app(){

 let handleClick=()=>{
  console.log("Button was clicked")
 }

  return (
    <>
    <h1> MATERIAL UI</h1>

      <Button variant="contained" onClick={handleClick}>CLICK ME1 </Button>

      <Button variant="contained" disabled >CLICK ME2 </Button>

      <Button variant="contained" color="error" onClick={handleClick}>CLICK ME2 </Button>
    </>
  )
}
