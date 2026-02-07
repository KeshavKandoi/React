// part1

// import"./Product.css"

// function Product({title,price,features=[]}){
//   const list=features.map((feature)=><li>{feature}</li>)
//   return(
//     <div className="Product">
//       <h3>{title}</h3>
//       <h5>price:{price}</h5>
//       <p>{list}</p>
//     </div>
//   )
// }
//  export default Product; 


// // PART2

// import"./Product.css"

// function Product({title,price,features=[]}){
// //  let isDiscount=price>10000 ?"Discount of 5%" : "";
//   return(
//     <div className="Product">
//       <h3>{title}</h3>
//       <h5>price:{price}</h5>
//       {price>10000 ? <p>"Discount of 5%"   </p>:null}
//     </div>
//   )
// }
//  export default Product; 


// part3

// PART2

import"./Product.css"

function Product({title,price,features=[]}){
  let style={backgroundColor:price>10000 ? "pink":""};
  return(
    <div className="Product" style={style}>
      <h3>{title}</h3>
      <h5>price:{price}</h5>
      {price>10000 ? <p>"Discount of 5%"   </p>:null}
    </div>
  )
}
 export default Product; 