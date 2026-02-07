
function genTicket(n){
 let arr=new Array(n)

 for(let i=0;i<n;i++){
  arr[i]=Math.floor(Math.random()*10)
 }
return arr;
}


function sum(arr){
return arr.reduce((total,num)=>total+num,0); //sum lene k liye reduce use karte hai 

}
export {genTicket,sum}