import React, { useEffect, useState } from 'react'
import { products } from '../../products'
import { useParams } from "react-router-dom"
import ProductDetail from '../ProductDetail/ProductDetail'

const ProductDetailContainer = () => {

    const [product, setProduct] = useState({})
    const {id} = useParams()

    useEffect(() => {

        const productSelected = products.find(item => item.id === parseInt(id))
        setProduct(productSelected)

    }, [id])

    return (
        <div>
            <ProductDetail product={product} />
        </div>
    )
}

export default ProductDetailContainer