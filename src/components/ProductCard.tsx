import React from 'react';
import { Plus } from 'lucide-react';
import { Plant } from '../types';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { addToCart } from '../store/cartSlice';

interface ProductCardProps {
  plant: Plant;
}

const ProductCard: React.FC<ProductCardProps> = ({ plant }) => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(state => state.cart.items);
  const isInCart = cartItems.some(item => item.id === plant.id);
  
  const handleAddToCart = () => {
    dispatch(addToCart(plant));
  };
  
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
      <div className="relative overflow-hidden">
        <img 
          src={plant.image} 
          alt={plant.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
          {plant.category}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{plant.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{plant.description}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-green-600">${plant.price}</span>
          
          <button
            onClick={handleAddToCart}
            disabled={isInCart}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
              isInCart 
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                : 'bg-green-600 text-white hover:bg-green-700 hover:shadow-lg transform hover:scale-105'
            }`}
          >
            <Plus className="w-4 h-4" />
            <span>{isInCart ? 'Added' : 'Add to Cart'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;