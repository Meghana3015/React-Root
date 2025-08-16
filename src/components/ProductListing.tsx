import React, { useState } from 'react';
import { Filter } from 'lucide-react';
import { plants, categories } from '../data/plantsData';
import ProductCard from './ProductCard';

const ProductListing: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  
  const filteredPlants = selectedCategory === 'All' 
    ? plants 
    : plants.filter(plant => plant.category === selectedCategory);
  
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Premium Plant Collection</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our carefully selected houseplants, perfect for creating your indoor oasis
          </p>
        </div>
        
        {/* Category Filter */}
        <div className="mb-8 flex flex-wrap items-center justify-center gap-4">
          <div className="flex items-center space-x-2 text-gray-700">
            <Filter className="w-5 h-5" />
            <span className="font-medium">Filter by category:</span>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === 'All'
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-green-50 hover:text-green-600'
              }`}
            >
              All Plants
            </button>
            
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-green-50 hover:text-green-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPlants.map(plant => (
            <ProductCard key={plant.id} plant={plant} />
          ))}
        </div>
        
        {filteredPlants.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-gray-500">No plants found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductListing;