import"./Product.css"
import Price from "./Price"
function Product({title,idx}) {
  let oldPrices=["12,453","11,322","12,543","5,422"]
  let newPrices=["10,453","9,322","8,543","3,422"]
  let description=[["8,000 DPI","Programmable buttons"],["intutive surface","Ipad pro"],["designed for ipad Pro","initutive surface"],["Wireless","optical orientation"]]

  return(
    <div className="Product" >
     <h4>{title}</h4>
     <p>{description[idx][0]}</p>
     <p>{description[idx][1]}</p>
     <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
    </div>
  )
}
 export default Product;  