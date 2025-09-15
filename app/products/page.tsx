import Products from '@/components/Products';
import React from 'react';

const Page = async () => {
  const res = await fetch(
    'https://lucent-is.com/assets/data/products.json',
    { cache: 'no-store' } // <— Avoid static caching
  );

  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }

  const products = await res.json();

  return (
    <div>
      <Products products={products} />
    </div>
  );
};

export default Page;
