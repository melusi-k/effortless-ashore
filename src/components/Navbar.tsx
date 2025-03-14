import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, User } from 'lucide-react';
import Cart from './Cart';
import CartButton from './CartButton';
import CollectionsMenu from './CollectionsMenu';

const categories = [
  {
    title: 'Electronics',
    description: 'Discover our range of cutting-edge electronics and gadgets.',
    path: '/products?category=Electronics'
  },
  {
    title: 'Home',
    description: 'Find beautiful items to enhance your living space.',
    path: '/products?category=Home'
  },
  {
    title: 'Clothing',
    description: 'Explore our collection of stylish and comfortable clothing.',
    path: '/products?category=Clothing'
  },
  {
    title: 'Accessories',
    description: 'Complete your look with our curated accessories.',
    path: '/products?category=Accessories'
  },
  {
    title: 'Fragrances',
    description: 'Experience our luxurious collection of perfumes and fragrances.',
    path: '/products?category=Fragrances'
  }
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleCart = () => setIsCartOpen(!isCartOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close menu when route changes
  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`navbar ${scrolled ? 'shadow-sm' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-inner">
          {/* Logo */}
          <Link to="/" className="navbar-logo">
            STORE
          </Link>

          {/* Desktop Navigation */}
          <nav className="navbar-nav">
            <Link to="/" className={`navbar-link ${isActive('/') ? 'active' : ''}`}>
              Home
            </Link>
            <Link to="/products" className={`navbar-link ${isActive('/products') ? 'active' : ''}`}>
              Shop
            </Link>
            <div className="navbar-link">
              <CollectionsMenu />
            </div>
            <Link to="/about" className={`navbar-link ${isActive('/about') ? 'active' : ''}`}>
              About
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Link to="/account" className="hidden md:flex items-center justify-center w-10 h-10 rounded-full hover:bg-secondary transition-colors">
              <User className="h-5 w-5" />
            </Link>
            <CartButton onClick={toggleCart} />
            <button 
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-secondary transition-colors" 
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="flex justify-between items-center">
          <Link to="/" className="navbar-logo">
            STORE
          </Link>
          <button 
            onClick={toggleMenu}
            aria-label="Close menu"
            className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-secondary transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="mobile-nav">
          <Link to="/" className={`mobile-link ${isActive('/') ? 'active' : ''}`}>
            Home
          </Link>
          <Link to="/products" className={`mobile-link ${isActive('/products') ? 'active' : ''}`}>
            Shop
          </Link>
          {categories.map((category) => (
            <Link
              key={category.title}
              to={`/products?category=${category.title}`}
              className="mobile-link"
              onClick={closeMenu}
            >
              {category.title}
            </Link>
          ))}
          <Link to="/about" className={`mobile-link ${isActive('/about') ? 'active' : ''}`}>
            About
          </Link>
          <Link to="/account" className="mobile-link">
            Account
          </Link>
        </nav>
      </div>

      {/* Cart */}
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  );
};

export default Navbar;
