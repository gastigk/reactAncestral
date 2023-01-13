import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import ItemList from "./ItemList"
import LinearColor from "../Progress/Progress"
import Footer  from "../footer/Footer"
import Box from '@mui/material/Box'
import { getDocs, collection, query, where } from "firebase/firestore"
import { db } from "../../firebaseConfig"

const ItemListContainer = () => {
  const { categoryName } = useParams()

  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)

    const itemCollection = collection(db, "products")

    if (categoryName) {
      const q = query(itemCollection, where("category", "==", categoryName))
      getDocs(q)
        .then((res) => {
          const products = res.docs.map((product) => {
            return {
              ...product.data(),
              id: product.id,
            }
          })

          setItems(products)
        })
        .catch((err) => console.log(err))
    } else {
      getDocs(itemCollection)
        .then((res) => {
          const products = res.docs.map((product) => {
            return {
              ...product.data(),
              id: product.id,
            }
          })

          setItems(products)
        })
        .catch((err) => console.log(err))
    }

    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }, [categoryName])

  return (
    <div>
      {isLoading ? (
        <LinearColor color="success" />
      ) : (
        <Box>
        <ItemList items={items} />
        <Footer/>
        </Box>
      )}

    </div>
  )
}

export default ItemListContainer