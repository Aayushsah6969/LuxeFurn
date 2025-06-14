import { create } from 'zustand';
import { CartItem, Product, User } from '../types';
import toast from 'react-hot-toast';

interface StoreState {
  cart: CartItem[];
  user: User | null;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name: string) => Promise<void>;
  logout: () => Promise<void>;
}

// Mock user data for demonstration
const mockUsers = [
  { email: 'test@example.com', password: 'password123', name: 'Test User' }
];

export const useStore = create<StoreState>((set) => ({
  cart: [],
  user: null,
  addToCart: (product) => {
    set((state) => {
      const existingItem = state.cart.find((item) => item.product.id === product.id);
      if (existingItem) {
        toast.success('Item quantity updated in cart');
        return {
          cart: state.cart.map((item) =>
            item.product.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      toast.success('Item added to cart');
      return { cart: [...state.cart, { product, quantity: 1 }] };
    });
  },
  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.product.id !== productId),
    })),
  updateQuantity: (productId, quantity) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      ),
    })),
  clearCart: () => set({ cart: [] }),
  login: async (email: string, password: string) => {
    // Mock login logic
    const user = mockUsers.find(u => u.email === email && u.password === password);
    if (user) {
      set({ user: { id: '1', email: user.email } });
    } else {
      throw new Error('Invalid credentials');
    }
  },
  signup: async (email: string, password: string, name: string) => {
    // Mock signup logic
    mockUsers.push({ email, password, name });
    return Promise.resolve();
  },
  logout: async () => {
    set({ user: null });
    toast.success('Logged out successfully');
  },
}));