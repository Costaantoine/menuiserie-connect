import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { initDB } from './services/db';
import './i18n';
import './index.css';

const root = document.getElementById('root');

if (root) {
  // Initialiser la base de données IndexedDB
  initDB().catch(console.error);

  createRoot(root).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}