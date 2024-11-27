import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { DashboardPage } from '../pages/dashboard/DashboardPage';
import { NewProjectPage } from '../pages/projects/NewProjectPage';
import { NewClientPage } from '../pages/clients/NewClientPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: 'projects/new',
        element: <NewProjectPage />,
      },
      {
        path: 'clients/new',
        element: <NewClientPage />,
      },
    ],
  },
]);