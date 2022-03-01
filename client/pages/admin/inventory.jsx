import React, { useState, useEffect } from 'react'
import AddProduct from '../../components/Inventory/AddProduct'
import ProductList from '../../components/Inventory/ProductList'
export default function PortalPage() {
  const [productId, setProductId] = useState('')

  const getProductHandler = (id) => {
    setProductId(id)
  }

  return (
    <div className="p-2">
      <div className="mx-2">
        <AddProduct id={productId} setProductId={setProductId} />
      </div>
      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200"></div>
        </div>
      </div>
      <div className="mx-6">
        <ProductList getProductId={getProductHandler} />
      </div>
    </div>
  )
}
