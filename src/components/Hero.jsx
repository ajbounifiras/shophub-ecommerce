import React from 'react';

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-purple-50 to-indigo-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">ShopHub</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Discover amazing products at unbeatable prices. Your one-stop shop for electronics, fashion, and home essentials.
        </p>
        <a 
          href="#products" 
          className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:-translate-y-1 transition"
        >
          Shop Now
        </a>
      </div>
    </div>
  );
};

export default Hero;