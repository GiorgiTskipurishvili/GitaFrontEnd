import Link from 'next/link';
import React from 'react'

const products = [
  { id: 1, name: "iPhone" },
  { id: 2, name: "Samsung" },
  { id: 3, name: "MacBook" },
];


export default function Products() {
  return (
  <>
    <div className='m-auto'>
      <h1 className="text-5xl">Products</h1>

      {products.map((product) => (
        <div  key={product.id}>
          <Link className='text-white text-2xl hover:bg-blue-200' href={`/products/${product.id}`}>
            {product.name}
          </Link>
        </div>
      ))}
    </div>
  </>
  )
}
