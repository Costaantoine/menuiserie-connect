import { openDB, DBSchema, IDBPDatabase } from 'idb';

interface MenuiserieDB extends DBSchema {
  clients: {
    key: string;
    value: {
      id: string;
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      mainAddress: {
        street: string;
        city: string;
        postalCode: string;
        country: string;
      };
      siteAddress: {
        street: string;
        city: string;
        postalCode: string;
        country: string;
      };
    };
  };
  projects: {
    key: string;
    value: {
      id: string;
      clientId: string;
      status: 'draft' | 'pending' | 'approved' | 'in_progress' | 'completed';
      items: Array<{
        id: string;
        type: string;
        measurements: {
          width: { top: number; bottom: number; final: number };
          height: { left: number; right: number; final: number };
          diagonals: { d1: number; d2: number };
        };
        colors: { interior: string; exterior: string };
        options: Array<{ id: string; name: string; price: number }>;
        photos: string[];
        voiceNotes: string[];
      }>;
      createdAt: Date;
      updatedAt: Date;
    };
  };
}

let db: IDBPDatabase<MenuiserieDB>;

export async function initDB() {
  db = await openDB<MenuiserieDB>('menuiserie-db', 1, {
    upgrade(db) {
      db.createObjectStore('clients', { keyPath: 'id' });
      db.createObjectStore('projects', { keyPath: 'id' });
    },
  });
}

export async function getClient(id: string) {
  return db.get('clients', id);
}

export async function getAllClients() {
  return db.getAll('clients');
}

export async function putClient(client: MenuiserieDB['clients']['value']) {
  return db.put('clients', client);
}

export async function getProject(id: string) {
  return db.get('projects', id);
}

export async function getAllProjects() {
  return db.getAll('projects');
}

export async function putProject(project: MenuiserieDB['projects']['value']) {
  return db.put('projects', project);
}