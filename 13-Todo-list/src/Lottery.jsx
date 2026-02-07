import { useState } from "react";
import "./Lottery.css"
import { genTicket,sum} from "./helper";




export default function Lottery(){
  let [ticket,setTicket]=useState(genTicket(3));
  let isWinning=sum(ticket)===15

  let buyTicket=()=>{
    setTicket(genTicket(3));
  }

  return(
    <div>
   
 <h1>LOTTERY GAME</h1>

<div className="ticket">
  <span>{ticket[0]}</span>
  <span>{ticket[1]}</span>
  <span>{ticket[2]}</span>

</div>
<br/><br/><br/>
<button onClick={buyTicket}>Buy New TICKET</button>
<h3>{isWinning && "congratulation,you won!"}</h3>
    </div>
  )
}  