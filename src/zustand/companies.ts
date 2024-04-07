import { create } from 'zustand';

export const useCompanies = create((set: any, get: any) => ({
  total: 0,
  companies: null,
  getCompanies: () => get().companies,
  getTotal: () => get().total,
  setTotal: (total: number) => {set({ total })},
  setCompanies: (companiesData: any) => {
    set({ companies: companiesData, total: companiesData.total })
  },
}));
