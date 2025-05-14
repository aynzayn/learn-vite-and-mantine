import { create } from 'zustand';

import { AdmissionPeriodAPI } from '../api';

export const useAdmissAdmissionStore = create((set) => ({
  periods: [],
  fetch: async () => {
    const periods = await AdmissionPeriodAPI.get();
    set({ periods });
  },
}));
