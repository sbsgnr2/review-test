import { create } from 'zustand';

export const useCompanies = create((set: any, get: any) => ({
  total: 0,
  reviews: null,
  getReviews: () => get().reviews,
  getTotal: () => get().total,
  setReviews: (reviewsData: any) => {
    set({ reviews: reviewsData, total: reviewsData.total })
  },
}));
