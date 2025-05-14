import { create } from 'zustand';

import { PatientsAPI } from '../api';

export const usePatientsStore = create((set) => ({
  patients: [],
  fetch: async () => {
    const patients = await PatientsAPI.get();
    set({ patients });
  },
  create: async (patient) => {
    const response = await PatientsAPI.post(patient);
    set((state) => ({ patients: [...state.patients, response] }));
  },
}));
