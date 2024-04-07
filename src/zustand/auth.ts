import { create } from 'zustand';
import jwt from 'jsonwebtoken';
import axios from 'axios';

export const useStore = create((set: any, get: any) => ({
  isAuthenticated: false,
  token: null,
  user: null,
  getUser: () => get().user,
  login: (token: string | null) => set({ isAuthenticated: true, token }),
  setUser: (userData: any) => set({ user: userData }),
  logout: () => set({ isAuthenticated: false, token: null }),
  initializeStore: async () => {
    const token = await axios.get('/api/cookies/getCookie')
    const user = jwt.decode(token?.data?.data || '')
    if (token) {
      set({ isAuthenticated: true, token, user });
    }
  },
}));
