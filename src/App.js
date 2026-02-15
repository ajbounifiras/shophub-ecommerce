import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import { products } from './data/products';

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar cartCount={cart.length} />
      <Hero />
      <ProductGrid products={products} onAddToCart={handleAddToCart} />
      <Footer />
    </div>
  );
}

export default App;