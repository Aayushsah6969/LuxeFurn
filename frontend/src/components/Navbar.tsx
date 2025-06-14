import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ShoppingCart, Menu, User, X } from 'lucide-react';
import { useStore } from '../store/useStore';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cart = useStore((state) => state.cart);
  const user = useStore((state) => state.user);
  const logout = useStore((state) => state.logout);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleLogout = () => {
    logout();
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="bg-white shadow-lg relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <button
                onClick={() => setIsMenuOpen(true)}
                className="text-gray-700 hover:text-gray-900 sm:hidden"
              >
                <Menu className="h-6 w-6" />
              </button>
              <NavLink to="/" className="flex-shrink-0 flex items-center ml-4 sm:ml-0">
                <h1 className="text-2xl font-bold text-gray-800">LuxeFurn</h1>
              </NavLink>
            </div>

            <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-8">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-gray-700 px-3 py-2 rounded-md ${isActive ? 'bg-gray-200' : 'hover:bg-gray-100'}`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/shop"
                className={({ isActive }) =>
                  `text-gray-700 px-3 py-2 rounded-md ${isActive ? 'bg-gray-200' : 'hover:bg-gray-100'}`
                }
              >
                Shop
              </NavLink>
              <NavLink
                to="/sales"
                className={({ isActive }) =>
                  `text-gray-700 px-3 py-2 rounded-md ${isActive ? 'bg-gray-200' : 'hover:bg-gray-100'}`
                }
              >
                Sales
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `text-gray-700 px-3 py-2 rounded-md ${isActive ? 'bg-gray-200' : 'hover:bg-gray-100'}`
                }
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `text-gray-700 px-3 py-2 rounded-md ${isActive ? 'bg-gray-200' : 'hover:bg-gray-100'}`
                }
              >
                Contact
              </NavLink>
            </div>

            <div className="flex items-center space-x-4">
              <NavLink to="/cart" className="relative text-gray-700 hover:text-gray-900">
                <ShoppingCart className="h-6 w-6" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                    {totalItems}
                  </span>
                )}
              </NavLink>
              {user ? (
                <NavLink to="/account" className="text-gray-700 hover:text-gray-900">
                  <User className="h-6 w-6" />
                </NavLink>
              ) : (
                <NavLink
                  to="/login"
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md bg-gray-100 hover:bg-gray-200"
                >
                  Login
                </NavLink>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div
          className={`fixed inset-y-0 left-0 w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Menu</h2>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-600 hover:text-gray-900"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="space-y-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block text-gray-700 py-2 rounded-md ${isActive ? 'bg-gray-200' : 'hover:bg-gray-100'}`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/shop"
                className={({ isActive }) =>
                  `block text-gray-700 py-2 rounded-md ${isActive ? 'bg-gray-200' : 'hover:bg-gray-100'}`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </NavLink>
              <NavLink
                to="/sales"
                className={({ isActive }) =>
                  `block text-gray-700 py-2 rounded-md ${isActive ? 'bg-gray-200' : 'hover:bg-gray-100'}`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Sales
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `block text-gray-700 py-2 rounded-md ${isActive ? 'bg-gray-200' : 'hover:bg-gray-100'}`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `block text-gray-700 py-2 rounded-md ${isActive ? 'bg-gray-200' : 'hover:bg-gray-100'}`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </NavLink>
              {user ? (
                <>
                  <NavLink
                    to="/account"
                    className={({ isActive }) =>
                      `block text-gray-700 py-2 rounded-md ${isActive ? 'bg-gray-200' : 'hover:bg-gray-100'}`
                    }
                    onClick={() => setIsMenuOpen(false)}
                  >
                    My Account
                  </NavLink>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left text-red-600 hover:text-red-700 py-2 bg-gray-100 hover:bg-gray-200 rounded-md"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    `block text-gray-700 py-2 rounded-md ${isActive ? 'bg-gray-200' : 'hover:bg-gray-100'}`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </NavLink>
              )}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};