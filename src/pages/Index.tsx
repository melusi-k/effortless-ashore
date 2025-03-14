
import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { mockProducts } from '../data/mockData';
import HeroSection from '../components/home/HeroSection';
import FeaturedProducts from '../components/home/FeaturedProducts';
import CategorySection from '../components/home/CategorySection';
import NewArrivals from '../components/home/NewArrivals';
import FeaturesSection from '../components/home/FeaturesSection';
import NewsletterSection from '../components/home/NewsletterSection';

const Index = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);
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
      <HeroSection />
      <FeaturedProducts isLoading={isLoading} products={featuredProducts} />
      <CategorySection />
      <NewArrivals isLoading={isLoading} products={newArrivals} />
      <FeaturesSection />
      <NewsletterSection />
    </Layout>
  );
};

export default Index;
