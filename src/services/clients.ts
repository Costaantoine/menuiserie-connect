import { apiService } from './api';
import { Client } from '../types';

export const clientsService = {
  async getClients(): Promise<Client[]> {
    return apiService.get<Client[]>('clients');
  },

  async createClient(client: Omit<Client, 'id'>): Promise<Client> {
    return apiService.post<Client>('clients', client);
  },

  async getClient(id: string): Promise<Client> {
    return apiService.get<Client>(`clients/${id}`);
  },
};