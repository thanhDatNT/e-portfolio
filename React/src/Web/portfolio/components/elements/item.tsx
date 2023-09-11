import { IProduct } from "@/types/IProduct"

export interface IProductItem {
    product: IProduct;
    onClick: (p: IProduct) => void;
}

export default function ProductItem(props : IProductItem) {
    const {product, onClick} = props

    return (
        <div className="group flex flex-col justify-between cursor-pointer" onClick={() => onClick(product)}>
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                src={product.image}
                alt={product.title}
                className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
            </div>
            <div className="">
                <h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
            </div>
        </div>
    )
}