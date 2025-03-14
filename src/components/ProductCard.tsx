import React from 'react';
import { Link } from 'react-router-dom';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  rating: number;
  featured: boolean;
  inStock: boolean;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="product-card animate-scale-in">
      <Link to={`/products/${product.id}`}>
        <div className="product-card-image-container">
          <img src={product.imageUrl} alt={product.name} className="product-card-image" />
        </div>
        <div className="product-card-content">
          <h3 className="text-lg font-medium">{product.name}</h3>
          <p className="text-muted-foreground text-sm">{product.description.substring(0, 50)}...</p>
          <div className="flex items-center justify-between">
            <span className="text-xl font-medium">${product.price.toFixed(2)}</span>
            {product.featured && (
              <span className="inline-block bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded-full">
                Featured
              </span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
