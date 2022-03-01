import React, { useEffect, useState } from 'react'
import ProductDataService from '../../services/product.services'

import TableBody from './TableBody'
import TableHeader from './TableHeader'

import { useRouter } from 'next/router'

export default function Inventory() {
  const [products, setProducts] = useState([])
  const router = useRouter()

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = async () => {
    const data = await ProductDataService.getAllProducts()
    setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  }

  const getProductIdHandler = async (id) => {
    console.log('Document to be edit: ', id)
    router.push(`/admin/edit/${id}`)
  }

  const deleteHandler = async (id) => {
    await ProductDataService.deleteProduct(id)
    getProducts()
  }

  return (
    <div className="flex flex-col">
      <div className="mb-4 mx-2">
        <button
          onClick={getProducts}
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Refresh List
        </button>
      </div>
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <TableHeader />
              </thead>
              <TableBody
                products={products}
                editHandler={getProductIdHandler}
                deleteHandler={deleteHandler}
              />
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
