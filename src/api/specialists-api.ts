import { request } from './utils/http';

export class SpecialistsAPI {
  static async get() {
    const response = await request.get('/api/schedule/procedures/with-specialists');
    return response.flatMap(({ specialists, ...procedure }) => specialists.map((specialist) => ({...specialist, procedure })));
  }
}
