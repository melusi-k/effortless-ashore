
import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative bg-accent/20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-background to-transparent z-10"></div>
      <img 
        src="https://images.unsplash.com/photo-1592914610604-903eb7cde851?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" 
        alt="Hero background - Arabian perfumes" 
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48 relative z-20">
        <div className="max-w-xl animate-fade-in">
          <span className="inline-block bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full mb-4">
            Luxury Arabian Perfumes
          </span>
          <h1 className="text-5xl md:text-6xl font-medium text-foreground tracking-tight mb-6">
            Discover the Essence of Arabia
          </h1>
          <p className="text-lg text-foreground/80 mb-8">
            Explore our exclusive collection of premium Arabian perfumes and attars, crafted with the finest ingredients from the Middle East.
          </p>
          <div className="flex space-x-4">
            <Link to="/products" className="button-primary py-3 px-8 text-base">
              Shop Now
            </Link>
            <Link to="#" className="button-outline py-3 px-8 text-base">
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
