import { API_URL } from './api-url';

/**
 * Класс для выполнения произвольных http-запросов
 */
export class Http {
  private _apiBaseUrl: string = null;
  /**
   * Конструктор класса Http
   * @param apiBaseUrl URL до endpoint-а API-сервиса
   */
  public constructor(apiBaseUrl: string = API_URL) {
    this._apiBaseUrl = apiBaseUrl;
  }

  public async get<TData>(url: string): Promise<TData> {
    const response = await fetch(`${this._apiBaseUrl}${url}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    };

    return data;
  }

  public async post<TData = any, TBody = any>(url: string, body: TBody): Promise<TData> {
    const response = await fetch(`${this._apiBaseUrl}${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    };

    return data;
  }
}

export const request = new Http();
