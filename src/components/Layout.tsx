
import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import { Toaster } from '@/components/ui/toaster';

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
                <li><a href="/products" className="text-sm text-muted-foreground hover:text-foreground">All Products</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Featured</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">New Arrivals</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">About Us</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Contact</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Careers</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">FAQ</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Shipping</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Returns</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Newsletter</h3>
              <p className="text-sm text-muted-foreground">Subscribe to our newsletter for updates</p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <button className="button-primary">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Store. All rights reserved.
          </div>
        </div>
      </footer>
      <Toaster />
    </div>
  );
};

export default Layout;
