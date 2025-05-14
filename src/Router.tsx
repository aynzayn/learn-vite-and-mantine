import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { AdmissionPeriodsPage } from './pages/admission-periods.page';
import { HomePage } from './pages/Home.page';
import { PatientsPage } from './pages/patients';
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
  {
    path: '/patients',
    element: <PatientsPage />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
