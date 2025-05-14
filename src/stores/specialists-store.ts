import { create } from 'zustand';

import { SpecialistsAPI } from '../api';

export const useSpecialistsStore = create((set) => ({
  specialists: [],
  fetch: async () => {
    const periods = await SpecialistsAPI.get();
    set({ specialists });
  },
}));
