import "./ProductListContainer.css"
import {products} from "../../products"
import ProductList from "../ProductList/ProductList"
import LinearColor from "../Progress/Progress"

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
      }, 2000)
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
    <div>

      { items.length > 0 ? <ProductList items={items} /> : <LinearColor color="success" />}

    </div>
  )
}

export default ProductListContainer
