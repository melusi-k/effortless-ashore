
import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../hooks/useCart';

interface CartButtonProps {
  onClick: () => void;
}

const CartButton: React.FC<CartButtonProps> = ({ onClick }) => {
  const { cartItems } = useCart();
  const itemCount = cartItems.length;

  return (
    <button 
      className="relative flex items-center justify-center w-10 h-10 rounded-full hover:bg-secondary transition-colors" 
      onClick={onClick}
      aria-label="Open cart"
    >
      <ShoppingBag className="h-5 w-5" />
      {itemCount > 0 && (
        <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 text-xs font-medium text-white bg-primary rounded-full animate-scale-in">
          {itemCount}
        </span>
      )}
    </button>
  );
};

export default CartButton;
