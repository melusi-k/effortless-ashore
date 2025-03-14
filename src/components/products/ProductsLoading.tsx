
import React from 'react';

interface ProductsLoadingProps {
  count?: number;
}

const ProductsLoading: React.FC<ProductsLoadingProps> = ({ count = 6 }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="product-card animate-pulse">
          <div className="product-card-image-container bg-muted"></div>
          <div className="product-card-content">
            <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
            <div className="h-3 bg-muted rounded w-1/2 mb-4"></div>
            <div className="h-5 bg-muted rounded w-1/4"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsLoading;
