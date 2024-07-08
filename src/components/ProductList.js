import React from 'react';
import ProductCard from './ProductCard';
import products from '../data/products';

const ProductList = () => {
  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      '@media (min-width: 768px)': {
        flexDirection: 'row',
      },
      '@media (max-width: 480px)': {
        flexDirection: 'column',
      },
    }}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;