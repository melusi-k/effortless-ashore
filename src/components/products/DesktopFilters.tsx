
import React from 'react';
import CategoryFilter from './CategoryFilter';
import PriceRangeFilter from './PriceRangeFilter';

interface DesktopFiltersProps {
  categories: string[];
  selectedCategory: string | null;
  handleCategorySelect: (category: string) => void;
  priceRange: [number, number];
  handlePriceChange: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void;
  clearFilters: () => void;
}

const DesktopFilters: React.FC<DesktopFiltersProps> = ({
  categories,
  selectedCategory,
  handleCategorySelect,
  priceRange,
  handlePriceChange,
  clearFilters
}) => {
  return (
    <div className="hidden md:block w-64 space-y-6 animate-fade-in">
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium">Filters</h3>
          <button 
            onClick={clearFilters}
            className="text-sm text-primary hover:text-primary/80"
          >
            Clear All
          </button>
        </div>

        <div className="space-y-6">
          <CategoryFilter 
            categories={categories}
            selectedCategory={selectedCategory}
            onCategorySelect={handleCategorySelect}
          />

          <PriceRangeFilter 
            priceRange={priceRange}
            onPriceChange={handlePriceChange}
          />
        </div>
      </div>
    </div>
  );
};

export default DesktopFilters;
