import { create } from 'zustand';

export const useLocations: any = create((set: any, get: any) => ({
  total: 0,
  locations: null,
  getLocations: () => get().locations,
  getTotal: () => get().total,
  setTotal: (total: number) => {set({ total })},
  setLocations: (locationsData: any) => {
    set({ locations: locationsData, total: locationsData.total })
  },
}));
