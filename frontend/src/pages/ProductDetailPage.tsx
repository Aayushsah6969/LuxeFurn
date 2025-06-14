import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, Truck, Shield, ArrowLeft, ShoppingCart } from 'lucide-react';
import { useStore } from '../store/useStore';
import { products } from '../data/products';
import toast from 'react-hot-toast';

export const ProductDetailPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const addToCart = useStore((state) => state.addToCart);
  const user = useStore((state) => state.user);
  
  // Find product from mock data
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Product not found</h2>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    toast.success('Added to cart!');
  };

  const handleBuyNow = () => {
    if (!user) {
      toast.error('Please sign in to continue with purchase');
      navigate('/signup');
      return;
    }
    navigate('/payment', { state: { total: product.price } });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <button 
        onClick={() => window.history.back()}
        className="flex items-center text-gray-600 hover:text-gray-900 mb-8"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Shop
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="aspect-square overflow-hidden rounded-lg">
          <img
            src={product.image_url}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
            <p className="text-lg text-gray-500">{product.category}</p>
          </div>

          <div className="flex items-center">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < Math.floor(product.rating)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="ml-2 text-gray-600">
              ({product.reviews} reviews)
            </span>
          </div>

          <div className="border-t border-b border-gray-200 py-4">
            <div className="flex items-baseline">
              <span className="text-3xl font-bold text-gray-900">
                ${product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <span className="ml-4 text-lg text-gray-500 line-through">
                  ${product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-gray-700">
              {product.description || 'A beautiful piece of furniture that combines style, comfort, and durability. Perfect for any modern home.'}
            </p>

            <div className="space-y-2">
              <div className="flex items-center text-gray-600">
                <Truck className="w-5 h-5 mr-2" />
                <span>Free delivery on orders over $999</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Shield className="w-5 h-5 mr-2" />
                <span>2-year warranty included</span>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center"
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              Add to Cart
            </button>
            <button
              onClick={handleBuyNow}
              className="flex-1 bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};