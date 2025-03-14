
import React, { useState } from 'react';
import { ShoppingBag, Heart, ChevronRight, Check } from 'lucide-react';
import { Product } from './ProductCard';
import { useCart } from '../hooks/useCart';
import { useToast } from "@/hooks/use-toast";

interface ProductDetailProps {
  product: Product;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity
    });
    
    toast({
      title: "Added to cart",
      description: `${product.name} (x${quantity}) has been added to your cart.`,
    });
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setQuantity(parseInt(e.target.value));
  };

  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) 
    : 0;

  // Use imageUrl as fallback for image if the latter is not available
  const productImage = product.image || product.imageUrl;

  return (
    <div className="product-detail-container animate-fade-in">
      <div className="flex items-center text-sm text-muted-foreground mb-6">
        <a href="/" className="hover:text-foreground">Home</a>
        <ChevronRight className="h-4 w-4 mx-2" />
        <a href="/products" className="hover:text-foreground">Products</a>
        <ChevronRight className="h-4 w-4 mx-2" />
        <span className="text-foreground">{product.name}</span>
      </div>

      <div className="product-detail-grid">
        <div className="product-detail-image-container">
          <div className={isImageLoaded ? 'hidden' : 'image-loading absolute inset-0'} />
          <img 
            src={productImage} 
            alt={product.name} 
            className="product-detail-image"
            onLoad={() => setIsImageLoaded(true)}
            style={{ opacity: isImageLoaded ? 1 : 0 }}
          />
          {discount > 0 && (
            <div className="absolute top-4 left-4 bg-destructive text-destructive-foreground text-sm font-medium px-3 py-1 rounded-full">
              {discount}% OFF
            </div>
          )}
        </div>
        
        <div className="product-detail-content">
          <h1 className="text-3xl font-medium">{product.name}</h1>
          <p className="text-lg text-muted-foreground mt-2">{product.category}</p>
          
          <div className="flex items-center mt-6">
            <span className="text-2xl font-medium">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="product-discount ml-3">${product.originalPrice.toFixed(2)}</span>
            )}
          </div>
          
          <div className="border-t border-border/40 my-6"></div>
          
          <p className="text-muted-foreground">{product.description}</p>
          
          <div className="mt-8 space-y-4">
            <div className="flex items-center">
              <div className="w-24 text-sm">Quantity</div>
              <select 
                value={quantity} 
                onChange={handleQuantityChange}
                className="flex h-10 w-24 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="mt-8 flex space-x-4">
            <button 
              onClick={handleAddToCart}
              className="flex-1 button-primary py-3 text-base"
            >
              <ShoppingBag className="h-5 w-5 mr-2" />
              Add to Cart
            </button>
            <button className="button-outline py-3 px-4">
              <Heart className="h-5 w-5" />
            </button>
          </div>
          
          <div className="mt-8 space-y-4">
            <div className="flex items-start">
              <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
              <div>
                <span className="text-sm font-medium">Free shipping</span>
                <p className="text-sm text-muted-foreground">On all orders</p>
              </div>
            </div>
            <div className="flex items-start">
              <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
              <div>
                <span className="text-sm font-medium">30-day returns</span>
                <p className="text-sm text-muted-foreground">No questions asked</p>
              </div>
            </div>
            <div className="flex items-start">
              <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
              <div>
                <span className="text-sm font-medium">Secure checkout</span>
                <p className="text-sm text-muted-foreground">SSL/TLS encryption</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
