
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Layout from '../components/Layout';
import ProductGrid from '../components/ProductGrid';
import { Product } from '../components/ProductCard';
import { mockProducts } from '../data/mockData';

const Index = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [newArrivals, setNewArrivals] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    setTimeout(() => {
      setFeaturedProducts(mockProducts.filter(p => p.featured).slice(0, 4));
      setNewArrivals(mockProducts.slice(0, 4));
      setIsLoading(false);
    }, 800);
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-accent/20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background to-transparent z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" 
          alt="Hero background" 
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48 relative z-20">
          <div className="max-w-xl animate-fade-in">
            <span className="inline-block bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full mb-4">
              New Collection
            </span>
            <h1 className="text-5xl md:text-6xl font-medium text-foreground tracking-tight mb-6">
              Discover Our Premium Products
            </h1>
            <p className="text-lg text-foreground/80 mb-8">
              Explore our curated collection of high-quality products designed with elegance and functionality in mind.
            </p>
            <div className="flex space-x-4">
              <Link to="/products" className="button-primary py-3 px-8 text-base">
                Shop Now
              </Link>
              <Link to="#" className="button-outline py-3 px-8 text-base">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div className="animate-slide-in">
              <span className="inline-block text-sm text-primary font-medium mb-2">
                Featured Collection
              </span>
              <h2 className="text-3xl font-medium">
                Our Best Sellers
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
            <ProductGrid products={featuredProducts} />
          )}
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-in">
            <span className="inline-block text-sm text-primary font-medium mb-2">
              Categories
            </span>
            <h2 className="text-3xl font-medium">
              Shop By Category
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CategoryCard 
              title="Electronics" 
              image="https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
              link="/products?category=electronics"
            />
            <CategoryCard 
              title="Clothing" 
              image="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
              link="/products?category=clothing"
            />
            <CategoryCard 
              title="Home" 
              image="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
              link="/products?category=home"
            />
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div className="animate-slide-in">
              <span className="inline-block text-sm text-primary font-medium mb-2">
                Just Landed
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
            <ProductGrid products={newArrivals} />
          )}
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-20 bg-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-in">
            <span className="inline-block text-sm text-primary font-medium mb-2">
              Why Choose Us
            </span>
            <h2 className="text-3xl font-medium">
              Our Commitment to You
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              title="Premium Quality" 
              description="Every product is crafted with the highest quality materials and attention to detail."
              icon={<QualityIcon />}
            />
            <FeatureCard 
              title="Free Shipping" 
              description="Enjoy free shipping on all orders, no minimum purchase required."
              icon={<ShippingIcon />}
            />
            <FeatureCard 
              title="24/7 Support" 
              description="Our dedicated support team is here to help you whenever you need assistance."
              icon={<SupportIcon />}
            />
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-20 bg-foreground text-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto animate-fade-in">
            <h2 className="text-3xl font-medium mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-background/80 mb-8">
              Stay updated with our latest products, promotions, and exclusive offers.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex h-12 flex-1 rounded-md border-0 bg-white/10 backdrop-blur-sm px-4 py-2 text-background ring-1 ring-background/20 placeholder:text-background/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              />
              <button className="h-12 rounded-md bg-background text-foreground px-8 py-2 text-sm font-medium hover:bg-background/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background/40 focus-visible:ring-offset-2 focus-visible:ring-offset-foreground">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

interface CategoryCardProps {
  title: string;
  image: string;
  link: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, image, link }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  
  return (
    <Link to={link} className="group relative overflow-hidden rounded-lg aspect-[3/2] animate-scale-in">
      <div className={isImageLoaded ? 'hidden' : 'image-loading absolute inset-0'} />
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        onLoad={() => setIsImageLoaded(true)}
        style={{ opacity: isImageLoaded ? 1 : 0 }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-xl font-medium text-background">{title}</h3>
        <p className="text-background/80 mt-1 flex items-center">
          Shop Now <ArrowRight className="h-4 w-4 ml-2" />
        </p>
      </div>
    </Link>
  );
};

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-card rounded-lg p-6 border border-border/50 hover:border-border transition-all duration-300 hover:shadow-md animate-scale-in">
      <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const QualityIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const ShippingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
  </svg>
);

const SupportIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

export default Index;
