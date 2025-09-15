import Products from '@/components/Products'
import React from 'react'


const page = async () => {
    const products = await fetch('http://localhost:3000/assets/data/products.json').then(res => res.json());
  return (
    <div>
      <Products products={products} />
    </div>
  )
}

export default page
