import { create } from 'zustand';

import { ProcedureAPI, SpecialistsAPI } from '../api';

export const useSpecialistsStore = create((set) => ({
  specialists: [],
  procedures: [],

  fetch: async () => {
    const [specialists, procedures]= await Promise.all([SpecialistsAPI.get(), ProcedureAPI.get()]);
    set({ specialists, procedures});
  },

  create: async (specialist) => {
    const response = await SpecialistsAPI.post(specialist);
    set((state) => ({ specialists: [...state.specialists, response] }));
  },

  addProcedure: async (specialist) => {
    await Promise.all(specialist.procedures.map((procedureId) => SpecialistsAPI.addProcedure(
      {
        specialistId: specialist.id,
        procedureId,
      }
    )));
  },
}));
