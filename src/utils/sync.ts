import { apiService } from '../services/api';
import { getAllClients, getAllProjects, putClient, putProject } from '../services/db';

export async function syncData() {
  try {
    // Synchroniser les clients
    const localClients = await getAllClients();
    const serverClients = await apiService.get('clients');
    
    for (const client of serverClients) {
      await putClient(client);
    }

    // Synchroniser les projets
    const localProjects = await getAllProjects();
    const serverProjects = await apiService.get('projects');
    
    for (const project of serverProjects) {
      await putProject(project);
    }

    // Envoyer les données locales non synchronisées
    for (const client of localClients) {
      if (!client.synced) {
        await apiService.post('clients', client);
        await putClient({ ...client, synced: true });
      }
    }

    for (const project of localProjects) {
      if (!project.synced) {
        await apiService.post('projects', project);
        await putProject({ ...project, synced: true });
      }
    }

    return true;
  } catch (error) {
    console.error('Erreur de synchronisation:', error);
    return false;
  }
}