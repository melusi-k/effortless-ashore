
import React, { useEffect } from 'react';
import { X, Trash2, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity, clearCart, total } = useCart();

  // Prevent body scrolling when cart is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close cart when clicking outside
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return (
    <>
      <div 
        className={`cart-overlay ${isOpen ? 'open' : ''}`} 
        onClick={onClose}
        aria-hidden="true"
      />
      <div className={`cart-container ${isOpen ? 'open' : ''}`}>
        <div className="flex justify-between items-center p-4 border-b border-border">
          <h2 className="text-lg font-medium">Your Cart</h2>
          <button 
            onClick={onClose}
            aria-label="Close cart"
            className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-secondary transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-grow overflow-y-auto p-4 space-y-4">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
              <ShoppingBagIcon className="h-16 w-16 text-muted-foreground/50" />
              <p className="text-muted-foreground">Your cart is empty</p>
              <button 
                onClick={onClose}
                className="button-primary"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center space-x-4 py-4 border-b border-border/50 animate-fade-in">
                  <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-border/50">
                    <img
                      src={item.image || item.imageUrl}
                      alt={item.name}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium">{item.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      ${item.price.toFixed(2)}
                    </p>
                    <div className="flex items-center mt-2">
                      <button 
                        onClick={() => decreaseQuantity(item.id)}
                        className="flex items-center justify-center w-6 h-6 rounded-full border border-border hover:bg-secondary transition-colors"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="mx-3 text-sm">{item.quantity}</span>
                      <button 
                        onClick={() => increaseQuantity(item.id)}
                        className="flex items-center justify-center w-6 h-6 rounded-full border border-border hover:bg-secondary transition-colors"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-secondary transition-colors"
                    aria-label="Remove item"
                  >
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </button>
                </div>
              ))}
            </>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="p-4 border-t border-border">
            <div className="flex justify-between text-base font-medium mb-4">
              <p>Subtotal</p>
              <p>${total.toFixed(2)}</p>
            </div>
            <div className="space-y-2">
              <Link 
                to="/checkout" 
                className="w-full button-primary py-3"
                onClick={onClose}
              >
                Checkout
              </Link>
              <button 
                onClick={clearCart}
                className="w-full button-outline py-3"
              >
                Clear Cart
              </button>
            </div>
            <p className="mt-4 text-center text-sm text-muted-foreground">
              Free shipping on all orders
            </p>
          </div>
        )}
      </div>
    </>
  );
};

const ShoppingBagIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"></path>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <path d="M16 10a4 4 0 01-8 0"></path>
  </svg>
);

export default Cart;
