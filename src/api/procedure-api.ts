import { API_URL } from "./utils/api-url";
import { request } from './utils/http';

export class ProcedureAPI {
  static async get(username: string, password: string) {
    const response = await request.get('/api/schedule/procedures/with-specialists');
    console.warn(response);
  }
}
