import React, { useState } from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ products, onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', ...new Set(products.map(p => p.category))];
  
  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div id="products" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto mb-8"></div>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;