import { createBrowserRouter, Navigate } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import SecurityQuestionsPage from "../pages/SecurityQuestionsPage";

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
    path: "/first-login/:userId",
    element: <SecurityQuestionsPage />,
  },
]);
