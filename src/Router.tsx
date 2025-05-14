import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import { AdmissionPeriodsPage } from './pages/admission-periods.page';
import { SpecialistsPage } from './pages/specialists';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/periods',
    element: <AdmissionPeriodsPage />,
  },
  {
    path: '/specialists',
    element: <SpecialistsPage />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
