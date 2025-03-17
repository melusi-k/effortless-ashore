
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '../components/Layout';
import ProductGrid from '../components/ProductGrid';
import { Product } from '../components/ProductCard';
import { SlidersHorizontal } from 'lucide-react';
import { mockProducts } from '../data/mockData';

// Import the new components
import SearchBar from '../components/products/SearchBar';
import DesktopFilters from '../components/products/DesktopFilters';
import MobileFilters from '../components/products/MobileFilters';
import ActiveFilters from '../components/products/ActiveFilters';
import NoProductsFound from '../components/products/NoProductsFound';
import ProductsLoading from '../components/products/ProductsLoading';

const Products = () => {
  const location = useLocation();
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 3000]);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  
  const categories = ['All', 'Oud Collection', 'Premium Collection', 'Musk Collection', 'Amber Collection', 'Floral Collection', 'Niche Perfumes'];

  // Get category from URL query params
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get('category');
    if (categoryParam) {
      setSelectedCategory(categoryParam.charAt(0).toUpperCase() + categoryParam.slice(1));
    }
  }, [location.search]);

  // Fetch products
  useEffect(() => {
    // Simulate data loading
    setTimeout(() => {
      setProducts(mockProducts);
      setFilteredProducts(mockProducts);
      setIsLoading(false);
    }, 800);
  }, []);

  // Apply filters
  useEffect(() => {
    let result = [...products];
    
    // Apply category filter
    if (selectedCategory && selectedCategory !== 'All') {
      result = result.filter(product => 
        product.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }
    
    // Apply price filter
    result = result.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(product => 
        product.name.toLowerCase().includes(query) || 
        product.description.toLowerCase().includes(query)
      );
    }
    
    setFilteredProducts(result);
  }, [products, selectedCategory, priceRange, searchQuery]);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category === 'All' ? null : category);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newRange = [...priceRange] as [number, number];
    newRange[index] = Number(e.target.value);
    setPriceRange(newRange);
  };

  const clearFilters = () => {
    setSelectedCategory(null);
    setPriceRange([0, 3000]);
    setSearchQuery('');
  };

  const toggleMobileFilters = () => {
    setShowMobileFilters(!showMobileFilters);
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <h1 className="text-3xl font-medium mb-4 md:mb-0">Luxury Arabian Perfumes</h1>
          
          <div className="flex w-full md:w-auto items-center space-x-2">
            <SearchBar 
              searchQuery={searchQuery}
              onSearchChange={handleSearchChange}
            />
            <button 
              className="md:hidden flex items-center justify-center h-10 px-4 rounded-md border border-input bg-background text-sm hover:bg-accent"
              onClick={toggleMobileFilters}
            >
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              Filters
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters - Desktop */}
          <DesktopFilters 
            categories={categories}
            selectedCategory={selectedCategory}
            handleCategorySelect={handleCategorySelect}
            priceRange={priceRange}
            handlePriceChange={handlePriceChange}
            clearFilters={clearFilters}
          />

          {/* Filters - Mobile */}
          <MobileFilters 
            showMobileFilters={showMobileFilters}
            toggleMobileFilters={toggleMobileFilters}
            categories={categories}
            selectedCategory={selectedCategory}
            handleCategorySelect={handleCategorySelect}
            priceRange={priceRange}
            handlePriceChange={handlePriceChange}
            clearFilters={clearFilters}
          />

          {/* Products */}
          <div className="flex-1 animate-fade-in">
            <ActiveFilters 
              selectedCategory={selectedCategory}
              priceRange={priceRange}
              searchQuery={searchQuery}
              onClearCategory={() => setSelectedCategory(null)}
              onClearPriceRange={() => setPriceRange([0, 3000])}
              onClearSearch={() => setSearchQuery('')}
              onClearAll={clearFilters}
            />

            {isLoading ? (
              <ProductsLoading />
            ) : filteredProducts.length > 0 ? (
              <ProductGrid products={filteredProducts} columns={3} />
            ) : (
              <NoProductsFound clearFilters={clearFilters} />
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
