import type { IProduct } from "../Interface"
import { txtSlicer } from "../utils/functions"
import Image from "./Image"
import Button from "./UI/Button"

interface IProps {
  product: IProduct
}

const ProductCard = ({product} : IProps) => {
  const {title, description, imageUrl} = product

  return (
    <div className="max-w-sm md:max-w-md lg:max-w-lg mx-auto flex flex-col border border-gray-200 p-3 rounded-md  shadow-md">
      <Image imageURL={imageUrl} alt="Product Card" className="rounded-md h-64 object-cover"/>

      <h3 className="font-semibold text-lg mt-2">{title}</h3>
      <p className="text-sm">{txtSlicer(description, 100)}</p>
      
      <div className="flex gap-2 my-2">
        <span className="w-5 h-5 bg-blue-400 rounded-full"></span>
        <span className="w-5 h-5 bg-red-400 rounded-full"></span>
        <span className="w-5 h-5 bg-yellow-400 rounded-full"></span>
      </div>

      <div className="flex justify-between items-center">
        <span>${product.price}</span>
        <Image imageURL={product.category.imageUrl} alt="Product Card" className="rounded-full w-10 h-10 object-cover" />

      </div>

      <div className="flex justify-between items-center my-2 space-x-2">
        <Button className="bg-indigo-400" width="w-full" onClick={() => console.log('clicked')}>Edit</Button>
        <Button className="bg-red-400" width="w-full">Delete</Button>
      </div>
    </div>
  )
}

export default ProductCard