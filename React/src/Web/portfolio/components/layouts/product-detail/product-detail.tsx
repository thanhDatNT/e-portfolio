import { IProduct } from "@/types/IProduct";
import Image from "next/image";

export interface IProductDetail {
    product: IProduct | null
}

export default function ProductDetail({product}: IProductDetail) {
  return (
    <div className="w-full max-w-sm">
        <img src={product?.image ?? ''} alt={product?.title ?? ''} className="w-full px-12"/>
        <div className="my-8">
            <h1 className="text-lg"><b>{product?.title}</b></h1>
            <h2 className="text-xl font-bold my-2 italic">$ {product?.price}</h2>
            <span className="text-justify">{product?.description}</span>
            <div className="flex justify-between">
                <p>Category: </p>
                <span className="font-bold italic">{product?.category}</span>
            </div>
            <div className="px-4 py-3 my-8 sm:flex sm:flex-row-reverse sm:px-6">
                <button type="button" className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">Buy</button>
                <button type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Add to cart</button>
            </div>
        </div>
    </div>
  )
} 