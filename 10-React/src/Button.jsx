
function PrintHello(){
  console.log("hello")
}

function bye(){
  console.log("Bye!")
}


export default function(){
  return (
  <div>
    <button onClick={PrintHello}>CLICK ME</button>
    <p onClick={bye}>THIS IS A PARAGRAPH</p>
  </div>
  )
}