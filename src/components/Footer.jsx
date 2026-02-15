import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">ShopHub</h3>
            <p className="text-gray-400">
              Your trusted online shopping destination for quality products at great prices.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-purple-400 transition">About Us</a></li>
              <li><a href="#" className="hover:text-purple-400 transition">Contact</a></li>
              <li><a href="#" className="hover:text-purple-400 transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-purple-400 transition">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
            <div className="flex gap-4">
              <a href="https://github.com/ajbounifiras" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-full hover:bg-purple-600 transition">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/ajbouni-firas" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-full hover:bg-purple-600 transition">
                <Linkedin size={20} />
              </a>
              <a href="mailto:ajbounifiras@gmail.com" className="bg-white/10 p-3 rounded-full hover:bg-purple-600 transition">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© 2024 ShopHub. Built by Ajbouni Firas. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;