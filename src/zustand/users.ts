import { create } from 'zustand';

export const useUsers: any = create((set: any, get: any) => ({
  total: 0,
  users: null,
  getUsers: () => get().users,
  getTotal: () => get().total,
  setTotal: (total: number) => {set({ total })},
  setUsers: (usersData: any) => {
    set({ users: usersData, total: usersData.total })
  },
}));
