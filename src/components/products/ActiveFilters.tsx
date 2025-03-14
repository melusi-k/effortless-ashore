import React from 'react';
import { X } from 'lucide-react';

interface ActiveFiltersProps {
  selectedCategory: string | null;
  priceRange: [number, number];
  searchQuery: string;
  onClearCategory: () => void;
  onClearPriceRange: () => void;
  onClearSearch: () => void;
  onClearAll: () => void;
}

const ActiveFilters: React.FC<ActiveFiltersProps> = ({
  selectedCategory,
  priceRange,
  searchQuery,
  onClearCategory,
  onClearPriceRange,
  onClearSearch,
  onClearAll
}) => {
  const hasActiveFilters = selectedCategory || priceRange[0] > 0 || priceRange[1] < 1000 || searchQuery;

  if (!hasActiveFilters) return null;

  return (
    <div className="mb-6">
      <div className="flex flex-wrap gap-2">
        {selectedCategory && (
          <div className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-sm">
            {selectedCategory}
            <button
              onClick={onClearCategory}
              className="ml-2 h-4 w-4 rounded-full text-muted-foreground hover:text-foreground"
            >
              <X className="h-3 w-3" />
            </button>
          </div>
        )}
        {(priceRange[0] > 0 || priceRange[1] < 1000) && (
          <div className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-sm">
            R{priceRange[0]} - R{priceRange[1]}
            <button
              onClick={onClearPriceRange}
              className="ml-2 h-4 w-4 rounded-full text-muted-foreground hover:text-foreground"
            >
              <X className="h-3 w-3" />
            </button>
          </div>
        )}
        {searchQuery && (
          <div className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-sm">
            "{searchQuery}"
            <button
              onClick={onClearSearch}
              className="ml-2 h-4 w-4 rounded-full text-muted-foreground hover:text-foreground"
            >
              <X className="h-3 w-3" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ActiveFilters;
