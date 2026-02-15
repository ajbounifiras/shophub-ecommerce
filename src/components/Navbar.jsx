import React from 'react';
import { ShoppingCart } from 'lucide-react';

const Navbar = ({ cartCount }) => {
  return (
    <nav className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">ShopHub</h1>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#" className="hover:text-purple-200 transition">Home</a>
            <a href="#products" className="hover:text-purple-200 transition">Products</a>
            <a href="#about" className="hover:text-purple-200 transition">About</a>
            <a href="#contact" className="hover:text-purple-200 transition">Contact</a>
          </div>

          <div className="relative">
            <button className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full transition">
              <ShoppingCart size={20} />
              <span className="font-semibold">Cart</span>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;