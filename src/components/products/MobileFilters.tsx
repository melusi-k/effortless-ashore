
import React from 'react';
import { X } from 'lucide-react';
import CategoryFilter from './CategoryFilter';
import PriceRangeFilter from './PriceRangeFilter';

interface MobileFiltersProps {
  showMobileFilters: boolean;
  toggleMobileFilters: () => void;
  categories: string[];
  selectedCategory: string | null;
  handleCategorySelect: (category: string) => void;
  priceRange: [number, number];
  handlePriceChange: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void;
  clearFilters: () => void;
}

const MobileFilters: React.FC<MobileFiltersProps> = ({
  showMobileFilters,
  toggleMobileFilters,
  categories,
  selectedCategory,
  handleCategorySelect,
  priceRange,
  handlePriceChange,
  clearFilters
}) => {
  if (!showMobileFilters) return null;

  return (
    <div className="fixed inset-0 z-50 bg-background p-6 md:hidden transform transition-transform duration-300 ease-in-out translate-x-0">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-medium">Filters</h3>
        <button 
          onClick={toggleMobileFilters}
          className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-accent"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="space-y-6">
        <CategoryFilter 
          categories={categories} 
          selectedCategory={selectedCategory}
          onCategorySelect={(category) => {
            handleCategorySelect(category);
            toggleMobileFilters();
          }}
        />

        <PriceRangeFilter 
          priceRange={priceRange}
          onPriceChange={handlePriceChange}
        />

        <div className="pt-4 border-t border-border/40">
          <button 
            onClick={() => {
              clearFilters();
              toggleMobileFilters();
            }}
            className="w-full button-outline"
          >
            Clear All Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileFilters;
