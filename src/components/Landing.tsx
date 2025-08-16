import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf } from 'lucide-react';

const Landing: React.FC = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1005058/pexels-photo-1005058.jpeg?auto=compress&cs=tinysrgb&w=1920)'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl">
          {/* Logo */}
          <div className="flex items-center justify-center space-x-3 mb-8">
            <Leaf className="w-12 h-12 text-green-400" />
            <h1 className="text-5xl sm:text-6xl font-bold text-white">PlantParadise</h1>
          </div>
          
          {/* Company Description */}
          <p className="text-xl sm:text-2xl text-gray-200 mb-12 leading-relaxed max-w-3xl mx-auto">
            Welcome to PlantParadise, your premier destination for premium houseplants and garden essentials. 
            We carefully curate the finest selection of indoor and outdoor plants to transform your space into 
            a green sanctuary. From exotic tropical varieties to low-maintenance companions, we help you 
            cultivate the perfect botanical paradise in your home and garden.
          </p>
          
          {/* Get Started Button */}
          <Link 
            to="/products"
            className="inline-flex items-center px-8 py-4 bg-green-600 text-white text-lg font-semibold rounded-full hover:bg-green-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get Started
            <ArrowRight className="w-6 h-6 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;