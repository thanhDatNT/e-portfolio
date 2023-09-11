"use client"

import ProductItem from "@/components/elements/item"
import { IProduct } from "@/types/IProduct"
import { headers } from "@/utils/header-config"
import { useEffect, useState } from "react"
import { useRouter } from 'next/navigation'
import ProductDetail from "@/components/layouts/product-detail/product-detail"

export default function Shopping() {
  const router = useRouter()
  const [preview, setPreview] = useState(false)
  const [products, setProducts] = useState([])
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null)

  const onProductClicked = (p: IProduct) => {
    setSelectedProduct(p)
    setPreview(true)
  }

  useEffect(() => {
    let subscribe = true

    fetch('https://fakestoreapi.com/products',{ cache: 'force-cache' })
    .then(res => res.json())
    .then(result => {subscribe && setProducts(result)})

    return () => {
      subscribe = false
    }
  },[])

  return (
    <div className="bg-white flex min-h-full flex-1 flex-row justify-center px-2 py-8 lg:px-8">
      <div className={`${preview ? 'w-3/5' : 'mx-auto max-w-2xl'} px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8`}>
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product: IProduct) => <ProductItem key={product.id} product={product} onClick={onProductClicked}/>)}
        </div>
      </div>
      {preview && 
      <div className="w-2/5 max-w-sm text-gray-700 pl-8">
       <ProductDetail product={selectedProduct}/>
      </div>}
    </div>
  )
}