import React from 'react';
import { ShoppingCart, Eye } from 'lucide-react';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition duration-300">
      <div className="relative overflow-hidden group">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-4">
          <button className="bg-white text-gray-900 p-3 rounded-full hover:bg-purple-600 hover:text-white transition">
            <Eye size={20} />
          </button>
        </div>
        <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {product.category}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{product.description}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-purple-600">${product.price}</span>
          <button 
            onClick={() => onAddToCart(product)}
            className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:shadow-lg transform hover:-translate-y-1 transition"
          >
            <ShoppingCart size={18} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;