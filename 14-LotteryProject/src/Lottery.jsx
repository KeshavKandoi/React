import { useState } from "react";
import { genTicket,sum} from "./helper";
import Ticket from "./Ticket";



export default function Lottery({n,winCondition}){
  let [ticket,setTicket]=useState(genTicket(n));
  let isWinning=winCondition(ticket);
  let buyTicket=()=>{
    setTicket(genTicket(n));
  }

  return(
    <div>
   
 <h1>LOTTERY GAME</h1>

<div className="ticket">
  <Ticket ticket={ticket}/>
</div>
<br/><br/><br/>
<button onClick={buyTicket}>Buy New TICKET</button>
<h3>{isWinning && "congratulation,you won!"}</h3>
    </div>
  )
}  