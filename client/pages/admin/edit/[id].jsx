import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import ProductDataService from '../../../services/product.services'

export default function EditProductPage() {
  const router = useRouter()
  const [products, setProducts] = useState([])

  const [product, setProduct] = useState({})

  useEffect(() => {
    getProduct()
  }, [])

  const getProduct = async () => {
    const data = await ProductDataService.getAllProducts()

    const found = data.docs.find((el) => console.log(el))

    // setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    setProduct(found)
  }

  console.log(product)

  return <div>{router.query.id}</div>
}
