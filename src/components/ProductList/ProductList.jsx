import React from "react"
import Product from "../Product/Product"
import "./ProductList.css"

const ProductList = ({items}) => {

  return (
    <div className="container-cards">
      {items.map((element) => {
        return <Product key={element.id} element={element} />
      })}
    </div>
  )
}

export default ProductList