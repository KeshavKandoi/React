// PART1

// import Product from "./Product";

// function ProductTab(){
//   // let options=[<li>"HIGHTECH"</li>,<li>"DURABLE"</li>,<li>"TRANSPORTABLE"</li>]
//   let options=["HIGHTECH","DURABLE","TRANSPORTABLE"]
//   return(
   
//     <>
//    <Product title="phone" price={10000} />
//    <Product  title="laptop" price={20000} features={options}/>
//    <Product   title="Mouse" price={3000}/>
//     </>
//   )
// }
 
// export default ProductTab; 


// PART 2,3


import Product from "./Product";

function ProductTab(){
  return(
   
    <>
   <Product title="phone" price={10000} />
   <Product  title="laptop" price={20000} />
   <Product   title="Mouse" price={3000}/>
    </>
  )
}
 
export default ProductTab; 