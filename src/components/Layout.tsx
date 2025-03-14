import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import { Toaster } from '@/components/ui/toaster';
import { Link } from 'react-router-dom';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow animate-fade-in">
        {children}
      </main>
      <footer className="py-8 px-4 border-t border-border/40">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Shop</h3>
              <ul className="space-y-2">
                <li><Link to="/products" className="text-sm text-muted-foreground hover:text-foreground">All Products</Link></li>
                <li><Link to="/products?category=Fragrances" className="text-sm text-muted-foreground hover:text-foreground">Fragrances</Link></li>
                <li><Link to="/products" className="text-sm text-muted-foreground hover:text-foreground">New Arrivals</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Company</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-sm text-muted-foreground hover:text-foreground">About Us</Link></li>
                <li><Link to="/about#locations" className="text-sm text-muted-foreground hover:text-foreground">Locations</Link></li>
                <li><Link to="/about" className="text-sm text-muted-foreground hover:text-foreground">Contact</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Support</h3>
              <ul className="space-y-2">
                <li><Link to="/about#faq" className="text-sm text-muted-foreground hover:text-foreground">FAQ</Link></li>
                <li><Link to="/about#shipping" className="text-sm text-muted-foreground hover:text-foreground">Shipping</Link></li>
                <li><Link to="/about#returns" className="text-sm text-muted-foreground hover:text-foreground">Returns</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Legal</h3>
              <ul className="space-y-2">
                <li><Link to="/about#privacy" className="text-sm text-muted-foreground hover:text-foreground">Privacy Policy</Link></li>
                <li><Link to="/about#terms" className="text-sm text-muted-foreground hover:text-foreground">Terms of Service</Link></li>
                <li><Link to="/about#returns" className="text-sm text-muted-foreground hover:text-foreground">Return Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Shop by Sparkles. All rights reserved.</p>
          </div>
        </div>
      </footer>
      <Toaster />
    </div>
  );
};

export default Layout;
