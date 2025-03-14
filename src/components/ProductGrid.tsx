
import React from 'react';
import ProductCard, { Product } from './ProductCard';

interface ProductGridProps {
  products: Product[];
  columns?: number;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, columns = 4 }) => {
  let gridColumns: string;
  
  switch (columns) {
    case 1:
      gridColumns = 'grid-cols-1';
      break;
    case 2:
      gridColumns = 'grid-cols-1 sm:grid-cols-2';
      break;
    case 3:
      gridColumns = 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';
      break;
    case 4:
    default:
      gridColumns = 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4';
  }
  
  return (
    <div className={`grid ${gridColumns} gap-6 animate-fade-in`}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
