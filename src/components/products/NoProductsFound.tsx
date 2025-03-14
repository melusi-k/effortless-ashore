
import React from 'react';
import { Search } from 'lucide-react';

interface NoProductsFoundProps {
  clearFilters: () => void;
}

const NoProductsFound: React.FC<NoProductsFoundProps> = ({ clearFilters }) => {
  return (
    <div className="text-center py-12">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
        <Search className="h-8 w-8 text-muted-foreground" />
      </div>
      <h3 className="text-lg font-medium mb-2">No products found</h3>
      <p className="text-muted-foreground mb-6">
        Try adjusting your search or filter criteria.
      </p>
      <button 
        onClick={clearFilters}
        className="button-outline"
      >
        Clear All Filters
      </button>
    </div>
  );
};

export default NoProductsFound;
