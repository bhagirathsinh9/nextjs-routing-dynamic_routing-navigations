
import { products } from '@/data/products'
import Image from 'next/image';
import Link from 'next/link';
import { IoMdArrowRoundBack } from "react-icons/io";

const ProductDetails = async ({ params }) => {
  const { id } = await params   // ✅ must await params

  const product = products.find(p => p.id === id)

  if (!product) {
    return <h1 className="p-6">Product not found</h1>
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
        <div >
           <Link href='/product' className='flex items-center gap-2 hover:underline'><IoMdArrowRoundBack/> Go Back</Link>
        </div>
      <Image
        src={product.image}
        alt={product.name}
        width={500}
        height={100}
        className="w-full h-64 object-contain rounded"
      />

      <h1 className="text-3xl font-bold mt-4">
        {product.name}
      </h1>

      <p className="text-gray-500 mt-2">
        {product.category}
      </p>

      <p className="text-xl font-bold text-blue-600 mt-2">
        ₹{product.price}
      </p>

      <p className="mt-4">
        {product.description}
      </p>
    </div>
  )
}

export default ProductDetails
