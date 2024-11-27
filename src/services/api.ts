import { API_CONFIG } from '../config/api';

class ApiService {
  private static instance: ApiService;
  private baseUrl: string;

  private constructor() {
    this.baseUrl = API_CONFIG.baseUrl;
  }

  public static getInstance(): ApiService {
    if (!ApiService.instance) {
      ApiService.instance = new ApiService();
    }
    return ApiService.instance;
  }

  async get<T>(endpoint: string): Promise<T> {
    const response = await fetch(this.getUrl(endpoint));
    if (!response.ok) {
      throw new Error(`Erreur API: ${response.statusText}`);
    }
    return response.json();
  }

  async post<T>(endpoint: string, data: any): Promise<T> {
    const response = await fetch(this.getUrl(endpoint), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`Erreur API: ${response.statusText}`);
    }
    return response.json();
  }

  private getUrl(endpoint: string): string {
    return `${this.baseUrl}/api/${API_CONFIG.version}/${endpoint}`;
  }
}

export const apiService = ApiService.getInstance();