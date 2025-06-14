import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Truck, Shield, Clock, Phone } from 'lucide-react';

const featuredProducts = [
  {
    id: '1',
    name: 'Modern Leather Sofa',
    price: 1299,
    image_url: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    category: 'Sofas'
  },
  {
    id: '2',
    name: 'Minimalist Dining Table',
    price: 899,
    image_url: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    category: 'Tables'
  },
  {
    id: '3',
    name: 'Scandinavian Armchair',
    price: 599,
    image_url: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    category: 'Chairs'
  }
];

const categories = [
  { name: 'Living Room', image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80' },
  { name: 'Bedroom', image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80' },
  { name: 'Dining', image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80' },
  { name: 'Office', image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80' },
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Interior Designer',
    content: 'The quality of furniture from LuxeFurn is exceptional. My clients are always impressed with the pieces I source from here.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Michael Chen',
    role: 'Home Owner',
    content: 'Outstanding customer service and beautiful furniture. The delivery was prompt and the assembly service was excellent.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Architect',
    content: 'LuxeFurn has been my go-to for both personal and professional projects. Their attention to detail is unmatched.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  }
];

const services = [
  {
    icon: <Truck className="h-8 w-8" />,
    title: 'Free Delivery',
    description: 'Free shipping on all orders over $999'
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: 'Quality Guarantee',
    description: '2-year warranty on all products'
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: 'Easy Returns',
    description: '30-day return policy'
  },
  {
    icon: <Phone className="h-8 w-8" />,
    title: '24/7 Support',
    description: 'Expert assistance anytime'
  }
];

const bestSellers = [
  {
    id: '4',
    name: 'Velvet Accent Chair',
    price: 499,
    image_url: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    category: 'Chairs',
    rating: 4.9,
    reviews: 128
  },
  {
    id: '5',
    name: 'Modern Coffee Table',
    price: 299,
    image_url: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    category: 'Tables',
    rating: 4.8,
    reviews: 95
  },
  {
    id: '6',
    name: 'King Size Bed Frame',
    price: 899,
    image_url: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    category: 'Beds',
    rating: 4.9,
    reviews: 156
  }
];

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="relative h-[600px] sm:h-[700px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80"
            alt="Modern living room"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Elevate Your Space with Timeless Elegance
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Discover our curated collection of premium furniture designed to transform your home.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center px-6 py-3 text-lg font-medium text-gray-900 bg-white rounded-lg hover:bg-gray-50 transition-colors"
            >
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-gray-800 mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Browse by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={`/shop?category=${category.name.toLowerCase()}`}
              className="group relative h-64 overflow-hidden rounded-lg"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-opacity" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Best Sellers</h2>
          <Link
            to="/shop"
            className="text-lg font-medium text-gray-600 hover:text-gray-900 flex items-center"
          >
            View All
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bestSellers.map((product) => (
            <Link
              key={product.id}
              to={`/shop/${product.id}`}
              className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image_url}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 group-hover:text-gray-600">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-500">{product.category}</p>
                  </div>
                  <p className="text-lg font-medium text-gray-900">
                    ${product.price.toLocaleString()}
                  </p>
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
                    ({product.reviews} reviews)
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
          <Link
            to="/shop"
            className="text-lg font-medium text-gray-600 hover:text-gray-900 flex items-center"
          >
            View All
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <Link
              key={product.id}
              to={`/shop/${product.id}`}
              className="group"
            >
              <div className="relative aspect-square overflow-hidden rounded-lg mb-4">
                <img
                  src={product.image_url}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 group-hover:text-gray-600">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-500">{product.category}</p>
                </div>
                <p className="text-lg font-medium text-gray-900">
                  ${product.price.toLocaleString()}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Join Our Newsletter
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Subscribe to receive updates about new products, special offers, and design inspiration.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12">
            <div>
              <h3 className="text-white text-lg font-bold mb-4">About LuxeFurn</h3>
              <p className="text-gray-400">
                Crafting exceptional furniture pieces that blend style, comfort, and functionality since 2010.
              </p>
            </div>
            <div>
              <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/shop" className="hover:text-white transition-colors">Shop</Link></li>
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link to="/sales" className="hover:text-white transition-colors">Sales</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-lg font-bold mb-4">Customer Service</h3>
              <ul className="space-y-2">
                <li><Link to="/shipping" className="hover:text-white transition-colors">Shipping Info</Link></li>
                <li><Link to="/returns" className="hover:text-white transition-colors">Returns</Link></li>
                <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
                <li><Link to="/warranty" className="hover:text-white transition-colors">Warranty</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-lg font-bold mb-4">Contact Us</h3>
              <ul className="space-y-2 text-gray-400">
                <li>1234 Furniture Lane</li>
                <li>San Francisco, CA 94110</li>
                <li>Phone: (555) 123-4567</li>
                <li>Email: info@luxefurn.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 py-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} LuxeFurn. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};