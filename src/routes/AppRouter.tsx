
import { createBrowserRouter, Navigate } from 'react-router-dom';
import LoginPage from '../features/auth/pages/LoginPage';
import FirstLoginPage from '../features/auth/pages/FirstLoginPage';


export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/first-login",
    element:<FirstLoginPage/>
  }
]);
