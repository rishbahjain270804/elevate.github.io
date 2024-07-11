import React from 'react';
import ProductList from '../components/ProductList';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import ProductModal from './ProductModel';

const Homepage = () => {
  const [selectedProduct, setSelectedProduct] = React.useState(null);

  const handleProductClick = (product) => {
    console.log('Product clicked:', product);
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    console.log('Closing modal');
    setSelectedProduct(null);
  };

  console.log('selectedProduct:', selectedProduct);

  return (
    <div
      style={{
        maxWidth: '95%',
        margin: '20px auto',
        padding: '5px',
        boxSizing: 'border-box',
        '@media (max-width: 768px)': {
          padding: '10px',
        },
        '@media (max-width: 480px)': {
          padding: '5px',
        },
      }}
    >
      <Navbar />
      <HeroSection />
      <h1 className="container">Our Products</h1>
      <ProductList onProductClick={handleProductClick} />
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={handleCloseModal}
        >
          <div>Modal content</div>
        </ProductModal>
      )}
    </div>
  );
};

export default Homepage;