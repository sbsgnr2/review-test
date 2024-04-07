import { create } from 'zustand';

export const useUser: any = create((set: any, get: any) => ({
  user: null,
  getUser: () => get().users,
  setUser: (userData: any) => {
    set({ user: userData, total: userData.total })
  },
}));
