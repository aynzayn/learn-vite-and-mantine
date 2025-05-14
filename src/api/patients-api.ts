import { request } from './utils/http';

export class PatientsAPI {
  static async get() {
    return await request.get('/api/schedule/patients');
  }

  static async post(body) {
    return await request.post('/api/schedule/patients', body);
  }
}
