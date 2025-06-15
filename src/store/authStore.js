import { create } from 'zustand';

export const useAuthStore = create((set) => ({
  user: null,
  cart: [],
  userType: null,
  login: (userData) => set({ user: userData, userType: userData.role }),
  logout: () => set({ user: null, userType: null, cart: [] }),
  addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
}));