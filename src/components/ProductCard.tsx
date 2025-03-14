
import React from 'react';
import { Link } from 'react-router-dom';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  image?: string;  // Added for backward compatibility
  category: string;
  rating: number;
  featured: boolean;
  inStock: boolean;
  originalPrice?: number;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // Use imageUrl as fallback for image if the latter is not available
  const productImage = product.image || product.imageUrl;
  
  return (
    <div className="product-card animate-scale-in group rounded-lg border border-border/30 hover:border-border hover:shadow-md transition-all duration-200">
      <Link to={`/products/${product.id}`} className="block h-full">
        <div className="product-card-image-container overflow-hidden rounded-t-lg">
          <img 
            src={productImage} 
            alt={product.name} 
            className="product-card-image h-60 w-full object-cover object-center group-hover:scale-105 transition-transform duration-300" 
          />
        </div>
        <div className="product-card-content p-4">
          <h3 className="text-lg font-medium">{product.name}</h3>
          <p className="text-muted-foreground text-sm mt-1">{product.description.substring(0, 50)}...</p>
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-medium">${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">${product.originalPrice.toFixed(2)}</span>
              )}
            </div>
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
