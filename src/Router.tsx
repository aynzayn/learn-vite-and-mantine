import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import { AdmissionPeriodsPage } from './pages/admission-periods.page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/periods',
    element: <AdmissionPeriodsPage />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
