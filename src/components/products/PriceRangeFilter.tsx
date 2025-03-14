
import React from 'react';

interface PriceRangeFilterProps {
  priceRange: [number, number];
  onPriceChange: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void;
}

const PriceRangeFilter: React.FC<PriceRangeFilterProps> = ({ priceRange, onPriceChange }) => {
  return (
    <div>
      <h4 className="text-sm font-medium mb-3">Price Range</h4>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">${priceRange[0]}</span>
          <span className="text-sm text-muted-foreground">${priceRange[1]}</span>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="min-price" className="sr-only">Minimum Price</label>
            <input
              type="range"
              id="min-price"
              min={0}
              max={1000}
              value={priceRange[0]}
              onChange={(e) => onPriceChange(e, 0)}
              className="w-full"
            />
          </div>
          <div>
            <label htmlFor="max-price" className="sr-only">Maximum Price</label>
            <input
              type="range"
              id="max-price"
              min={0}
              max={1000}
              value={priceRange[1]}
              onChange={(e) => onPriceChange(e, 1)}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceRangeFilter;
