import { Plant } from '../types';

export const plants: Plant[] = [
  {
    id: '1',
    name: 'Monstera Deliciosa',
    price: 45.99,
    image: 'https://images.pexels.com/photos/6208086/pexels-photo-6208086.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Indoor',
    description: 'A stunning tropical plant perfect for bright, indirect light'
  },
  {
    id: '2',
    name: 'Snake Plant',
    price: 29.99,
    image: 'https://images.pexels.com/photos/4503273/pexels-photo-4503273.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Indoor',
    description: 'Low-maintenance plant that thrives in low light conditions'
  },
  {
    id: '3',
    name: 'Fiddle Leaf Fig',
    price: 65.99,
    image: 'https://images.pexels.com/photos/4503270/pexels-photo-4503270.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Indoor',
    description: 'A dramatic statement plant with large, violin-shaped leaves'
  },
  {
    id: '4',
    name: 'Lavender',
    price: 19.99,
    image: 'https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Outdoor',
    description: 'Fragrant herb perfect for gardens and aromatherapy'
  },
  {
    id: '5',
    name: 'Rosemary',
    price: 16.99,
    image: 'https://images.pexels.com/photos/4750274/pexels-photo-4750274.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Outdoor',
    description: 'Culinary herb that adds flavor to your cooking'
  },
  {
    id: '6',
    name: 'Pothos',
    price: 22.99,
    image: 'https://images.pexels.com/photos/7194915/pexels-photo-7194915.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Hanging',
    description: 'Trailing vine perfect for hanging baskets or shelves'
  }
];

export const categories = ['Indoor', 'Outdoor', 'Hanging'];