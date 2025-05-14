import { create } from 'zustand';

import { SpecialistsAPI } from '../api';

export const useSpecialistsStore = create((set) => ({
  specialists: [],
  fetch: async () => {
    const specialists = await SpecialistsAPI.get();
    set({ specialists });
  },
}));
