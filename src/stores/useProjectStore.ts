import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Project, JoineryItem } from '../types';

interface ProjectState {
  currentProject: Project | null;
  projects: Project[];
  setCurrentProject: (project: Project | null) => void;
  addProject: (project: Project) => void;
  updateProject: (project: Project) => void;
  addJoineryItem: (projectId: string, item: JoineryItem) => void;
}

export const useProjectStore = create<ProjectState>()(
  persist(
    (set) => ({
      currentProject: null,
      projects: [],
      setCurrentProject: (project) => set({ currentProject: project }),
      addProject: (project) =>
        set((state) => ({ projects: [...state.projects, project] })),
      updateProject: (project) =>
        set((state) => ({
          projects: state.projects.map((p) =>
            p.id === project.id ? project : p
          ),
        })),
      addJoineryItem: (projectId, item) =>
        set((state) => ({
          projects: state.projects.map((p) =>
            p.id === projectId
              ? { ...p, items: [...p.items, item] }
              : p
          ),
        })),
    }),
    {
      name: 'project-storage',
    }
  )
);