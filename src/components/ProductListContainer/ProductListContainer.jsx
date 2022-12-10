import "./ProductListContainer.css"
import {products} from "../../products"
import ProductList from "../ProductList/ProductList"

import {useParams} from "react-router-dom"
import {useState, useEffect} from "react"

const ProductListContainer = () => {

  const { categoryName } = useParams()
  const [items, setItems] = useState([])

  useEffect(() => {
    const productsFiltered = products.filter(
      (products) => products.category === categoryName
    )

    const getProducts = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(categoryName ? productsFiltered : products)
      }, 700)
    })

    getProducts
      .then((res) => {
        setItems(res)
      })
      .catch((err) => {
        console.log("se rechazo")
      })

  }, [categoryName])

  return (
    <div className="light">
      <ProductList items={items} />
    </div>
  )
}

export default ProductListContainer
