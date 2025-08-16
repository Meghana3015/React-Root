import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '../types';
import { useAppDispatch } from '../hooks/redux';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../store/cartSlice';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const dispatch = useAppDispatch();
  
  const handleIncrease = () => {
    dispatch(increaseQuantity(item.id));
  };
  
  const handleDecrease = () => {
    dispatch(decreaseQuantity(item.id));
  };
  
  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center space-x-6">
        <img 
          src={item.image} 
          alt={item.name}
          className="w-20 h-20 object-cover rounded-lg"
        />
        
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.name}</h3>
          <p className="text-sm text-gray-600 mb-2">{item.category} Plant</p>
          <p className="text-xl font-bold text-green-600">${item.price.toFixed(2)}</p>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-3 bg-gray-100 rounded-full p-1">
            <button
              onClick={handleDecrease}
              disabled={item.quantity <= 1}
              className={`p-2 rounded-full transition-colors ${
                item.quantity <= 1
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-gray-600 hover:bg-gray-200'
              }`}
            >
              <Minus className="w-4 h-4" />
            </button>
            
            <span className="text-lg font-semibold text-gray-900 min-w-[2rem] text-center">
              {item.quantity}
            </span>
            
            <button
              onClick={handleIncrease}
              className="p-2 rounded-full text-gray-600 hover:bg-gray-200 transition-colors"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
          
          <button
            onClick={handleRemove}
            className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;