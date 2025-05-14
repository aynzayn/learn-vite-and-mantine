import { request } from './utils/http';

export class ProcedureAPI {
  static async get() {
    return await request.get('/api/schedule/procedures/with-specialists');
  }
}
