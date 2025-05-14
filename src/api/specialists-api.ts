import { API_URL } from "./utils/api-url";
import { request } from './utils/http';

export class SpecialistsAPI {
  static async get() {
    const response = await request.get('/api/schedule/procedures/with-specialists');
    return response;
  }
}
