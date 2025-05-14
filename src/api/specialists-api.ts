import { request } from './utils/http';

export class SpecialistsAPI {
  static async get() {
    const [specialists, procedures] = await Promise.all([request.get('/api/schedule/specialists'), request.get('/api/schedule/procedures/with-specialists')]);
    return specialists.map((s) => ({...s, procedures: procedures.filter((p) => p.specialists.find(({ id }) => id === s.id )).map((p) => ({ id: p.id, name: p.name}))}));
  }

  static async post(body) {
    return await request.post('/api/schedule/specialists', body);
  }

  static async addProcedure(body) {
    return await request.post('/api/schedule/specialists/add-procedure', body);
  }
}
