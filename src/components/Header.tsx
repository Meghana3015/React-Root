import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Leaf } from 'lucide-react';
import { useAppSelector } from '../hooks/redux';

const Header: React.FC = () => {
  const location = useLocation();
  const totalItems = useAppSelector(state => state.cart.totalItems);
  
  // Don't show header on landing page
  if (location.pathname === '/') {
    return null;
  }

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <Leaf className="w-8 h-8 text-green-600" />
            <span className="text-xl font-bold text-gray-900">PlantParadise</span>
          </Link>
          
          <nav className="flex items-center space-x-6">
            <Link 
              to="/products" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === '/products' 
                  ? 'bg-green-100 text-green-700' 
                  : 'text-gray-700 hover:text-green-600'
              }`}
            >
              Shop Plants
            </Link>
            
            <Link 
              to="/cart" 
              className="relative flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-green-600 transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;