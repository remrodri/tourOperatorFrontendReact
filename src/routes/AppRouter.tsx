import { createBrowserRouter, Navigate } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import SecurityQuestionsPage from "../pages/SecurityQuestionsPage";
import UpdatePasswordPage from "../pages/UpdatePasswordPage";
import { HomePage } from "../pages/HomePage";

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  // {
  //   path: "/first-login/:userId",
  //   element: <SecurityQuestionsPage />,
  // },
  {
    path: "/first-login",
    // element:<Navigate to="/:userId"/>
    children: [
      {
        path: ":userId",
        element: <SecurityQuestionsPage />,
      },
      {
        path: "password/:userId",
        element: <UpdatePasswordPage />,
      },
    ],
  },
  {
    path: "/home/:userId",
    element: <HomePage />,
  },
]);
