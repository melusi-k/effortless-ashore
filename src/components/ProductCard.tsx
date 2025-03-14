
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Heart } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import { useToast } from "@/hooks/use-toast";

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  description: string;
  featured?: boolean;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    addToCart({
      ...product,
      quantity: 1
    });
    
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) 
    : 0;

  return (
    <Link to={`/product/${product.id}`} className="product-card group">
      {discount > 0 && (
        <div className="absolute top-2 left-2 z-10 bg-destructive text-destructive-foreground text-xs font-medium px-2 py-1 rounded-full">
          {discount}% OFF
        </div>
      )}
      
      <div className="product-card-image-container">
        <div className={isImageLoaded ? 'hidden' : 'image-loading absolute inset-0'} />
        <img 
          src={product.image} 
          alt={product.name} 
          className="product-card-image"
          onLoad={() => setIsImageLoaded(true)}
          style={{ opacity: isImageLoaded ? 1 : 0 }}
        />
        <div className="absolute inset-0 bg-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-between">
          <button 
            onClick={handleAddToCart}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-background text-foreground shadow-md hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="Add to cart"
          >
            <ShoppingBag className="h-5 w-5" />
          </button>
          <button 
            className="flex items-center justify-center w-10 h-10 rounded-full bg-background text-foreground shadow-md hover:bg-destructive hover:text-destructive-foreground transition-colors"
            aria-label="Add to wishlist"
          >
            <Heart className="h-5 w-5" />
          </button>
        </div>
      </div>
      
      <div className="product-card-content">
        <h3 className="font-medium truncate">{product.name}</h3>
        <p className="text-sm text-muted-foreground">{product.category}</p>
        <div className="flex items-center mt-2">
          <span className="product-price">${product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="product-discount">${product.originalPrice.toFixed(2)}</span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
