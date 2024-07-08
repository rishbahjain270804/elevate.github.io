import React from 'react';
import '../global.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="image-container 1">
        <img src={product.dimage} alt={product.name} className="dimage" />
      </div>
    </div>
  );
};

export default ProductCard;