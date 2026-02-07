// import { useState } from "react";

// export default function Counter(){

//   let[count,setCount]=useState(0);

// let incCount=()=>{
//   setCount(count+1)
// };

// return(
//   <div>
//     <h3>Count={count}</h3>
//     <button onClick={incCount}>INCREASE COUNT</button>
//   </div>
// )






// }



import { useState } from "react";

export default function Counter(){

  let[count,setCount]=useState(0);

let incCount=()=>{
  
  setCount((currCount)=>{
    return currCount+1;
  });
  setCount((currCount)=>{
    return currCount+1;
  });

};

return(
  <div>
    <h3>Count={count}</h3>
    <button onClick={incCount}>INCREASE COUNT</button>
  </div>
)






}