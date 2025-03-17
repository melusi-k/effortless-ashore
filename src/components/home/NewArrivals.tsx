
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProductGrid from '../ProductGrid';
import { Product } from '../ProductCard';

interface NewArrivalsProps {
  isLoading: boolean;
  products: Product[];
}

const NewArrivals: React.FC<NewArrivalsProps> = ({ isLoading, products }) => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div className="animate-slide-in">
            <span className="inline-block text-sm text-primary font-medium mb-2">
              Fresh Fragrances
            </span>
            <h2 className="text-3xl font-medium">
              New Arrivals
            </h2>
          </div>
          <Link to="/products" className="button-link flex items-center">
            View All <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </div>
        
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="product-card animate-pulse">
                <div className="product-card-image-container bg-muted"></div>
                <div className="product-card-content">
                  <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
                  <div className="h-3 bg-muted rounded w-1/2 mb-4"></div>
                  <div className="h-5 bg-muted rounded w-1/4"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <ProductGrid products={products} />
        )}
      </div>
    </section>
  );
};

export default NewArrivals;
