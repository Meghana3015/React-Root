import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowLeft, CreditCard } from 'lucide-react';
import { useAppSelector } from '../hooks/redux';
import CartItem from './CartItem';

const Cart: React.FC = () => {
  const { items, totalItems, totalPrice } = useAppSelector(state => state.cart);
  
  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-16">
            <ShoppingBag className="w-24 h-24 text-gray-300 mx-auto mb-8" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
            <p className="text-xl text-gray-600 mb-8">Discover our amazing plants and start building your collection!</p>
            <Link 
              to="/products"
              className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Shopping Cart</h1>
          <p className="text-gray-600">
            {totalItems} {totalItems === 1 ? 'plant' : 'plants'} in your cart
          </p>
        </div>
        
        <div className="space-y-6 mb-8">
          {items.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        
        {/* Cart Summary */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="border-b pb-4 mb-4">
            <div className="flex justify-between items-center text-lg">
              <span className="font-medium text-gray-700">Total Plants:</span>
              <span className="font-bold text-gray-900">{totalItems}</span>
            </div>
            <div className="flex justify-between items-center text-xl mt-2">
              <span className="font-semibold text-gray-900">Total Cost:</span>
              <span className="font-bold text-green-600 text-2xl">${totalPrice.toFixed(2)}</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/products"
              className="flex items-center justify-center px-6 py-3 border-2 border-green-600 text-green-600 font-semibold rounded-full hover:bg-green-50 transition-colors flex-1"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Continue Shopping
            </Link>
            
            <button 
              onClick={() => alert('Coming Soon! Checkout functionality will be available soon.')}
              className="flex items-center justify-center px-6 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-colors flex-1"
            >
              <CreditCard className="w-5 h-5 mr-2" />
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;