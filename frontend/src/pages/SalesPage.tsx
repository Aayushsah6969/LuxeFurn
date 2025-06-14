import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Timer } from 'lucide-react';

// Mock data for demonstration
const salesProducts = [
  {
    id: 'sale-1',
    name: 'Luxury Sectional Sofa',
    originalPrice: 2499,
    salePrice: 1699,
    discount: 32,
    image_url: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    category: 'Sofas',
    rating: 4.8,
    reviews: 156,
    endDate: '2024-04-15',
  },
  {
    id: 'sale-2',
    name: 'Designer Coffee Table',
    originalPrice: 899,
    salePrice: 499,
    discount: 44,
    image_url: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    category: 'Tables',
    rating: 4.9,
    reviews: 89,
    endDate: '2024-04-10',
  },
  {
    id: 'sale-3',
    name: 'Premium Dining Set',
    originalPrice: 3299,
    salePrice: 1999,
    discount: 39,
    image_url: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    category: 'Dining',
    rating: 4.7,
    reviews: 124,
    endDate: '2024-04-20',
  },
  {
    id: 'sale-4',
    name: 'Ergonomic Office Chair',
    originalPrice: 799,
    salePrice: 399,
    discount: 50,
    image_url: 'https://images.unsplash.com/photo-1505797149-35ebcb05a6fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    category: 'Office',
    rating: 4.9,
    reviews: 203,
    endDate: '2024-04-12',
  },
  {
    id: 'sale-5',
    name: 'Modern Bed Frame',
    originalPrice: 1599,
    salePrice: 899,
    discount: 44,
    image_url: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    category: 'Bedroom',
    rating: 4.8,
    reviews: 167,
    endDate: '2024-04-18',
  },
  {
    id: 'sale-6',
    name: 'Accent Armchair',
    originalPrice: 699,
    salePrice: 399,
    discount: 43,
    image_url: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    category: 'Chairs',
    rating: 4.7,
    reviews: 92,
    endDate: '2024-04-15',
  },
];

const sortOptions = [
  { label: 'Biggest Discount', value: 'discount' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
  { label: 'Ending Soon', value: 'ending' },
];

export const SalesPage: React.FC = () => {
  const [sortBy, setSortBy] = useState('discount');

  // Sort products based on selected criteria
  const sortedProducts = [...salesProducts].sort((a, b) => {
    switch (sortBy) {
      case 'discount':
        return b.discount - a.discount;
      case 'price-asc':
        return a.salePrice - b.salePrice;
      case 'price-desc':
        return b.salePrice - a.salePrice;
      case 'rating':
        return b.rating - a.rating;
      case 'ending':
        return new Date(a.endDate).getTime() - new Date(b.endDate).getTime();
      default:
        return 0;
    }
  });

  const calculateDaysLeft = (endDate: string) => {
    const days = Math.ceil(
      (new Date(endDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
    );
    return days;
  };

  return (
    <div className="bg-gray-50">
      {/* Sale Banner */}
      <div className="bg-gradient-to-r from-red-600 to-red-800 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Spring Clearance Sale</h1>
            <p className="text-xl md:text-2xl mb-6">Up to 50% off on selected furniture</p>
            <div className="inline-flex items-center bg-white text-red-600 px-6 py-3 rounded-full font-semibold">
              <Timer className="w-5 h-5 mr-2" />
              Limited Time Offer
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Sort Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 bg-white p-4 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 sm:mb-0">
            {sortedProducts.length} Items on Sale
          </h2>
          <div className="flex items-center space-x-4">
            <label htmlFor="sort" className="text-gray-600">
              Sort by:
            </label>
            <select
              id="sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedProducts.map((product) => (
            <Link
              key={product.id}
              to={`/shop/${product.id}`}
              className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Discount Badge */}
              <div className="relative">
                <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {product.discount}% OFF
                </div>
                <div className="absolute top-4 right-4 bg-white bg-opacity-90 text-red-600 px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                  <Timer className="w-4 h-4 mr-1" />
                  {calculateDaysLeft(product.endDate)} days left
                </div>
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image_url}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              <div className="p-4">
                <div className="mb-2">
                  <h3 className="text-lg font-medium text-gray-900 group-hover:text-gray-600">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-500">{product.category}</p>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <span className="text-2xl font-bold text-red-600">
                      ${product.salePrice.toLocaleString()}
                    </span>
                    <span className="ml-2 text-sm text-gray-500 line-through">
                      ${product.originalPrice.toLocaleString()}
                    </span>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">
                    ({product.reviews})
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};