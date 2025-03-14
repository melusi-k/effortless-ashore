
import React from 'react';
import { X } from 'lucide-react';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string | null;
  onCategorySelect: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ 
  categories, 
  selectedCategory, 
  onCategorySelect 
}) => {
  return (
    <div>
      <h4 className="text-sm font-medium mb-3">Categories</h4>
      <div className="space-y-2">
        {categories.map((category) => (
          <div key={category} className="flex items-center">
            <button
              onClick={() => onCategorySelect(category)}
              className={`text-sm hover:text-foreground transition-colors ${
                (category === 'All' && !selectedCategory) || selectedCategory === category
                  ? 'text-foreground font-medium'
                  : 'text-muted-foreground'
              }`}
            >
              {category}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
