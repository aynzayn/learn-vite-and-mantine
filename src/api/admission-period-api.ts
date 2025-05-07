import { API_URL } from "./utils/api-url";
import { request } from './utils/http';

export class AdmissionPeriodAPI {
  static async get() {
    return request.get('/api/schedule/admission-periods');
  }
}
