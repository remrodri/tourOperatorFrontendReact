import { createBrowserRouter, Navigate } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import SecurityQuestionsPage from "../pages/SecurityQuestionsPage";
import UpdatePasswordPage from "../pages/UpdatePasswordPage";
import MainLayout from "../pages/mainLayout/MainLayout";
// import { useAuth } from "../context/AuthContext";
import Layout from "../pages/mainLayout/Dashboard";
import DashboardPage from "../pages/DashboardPage";
import PersonalPage from "../pages/PersonalPage";
import NewPersonal from "../features/personal/components/NewPersonal";
import personalShowCase from "../features/personal/components/personalShowcase";

// const ProtectedRoute = ({ element }: { element: JSX.Element }) => {
//   const { isAuthenticated } = useAuth();
//   if (!isAuthenticated) {
//     return <Navigate to="/login" replace />;
//   }
//   return element;
// };

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
    // path: "/home/:userId",
    // element: (
    //   <ProtectedRoute element={<HomePage />} />
    // ),
    path: "/home/:userId",
    Component: MainLayout,
    children: [
      {
        path: "",
        Component: Layout,
        children: [
          {
            path: "",
            Component: DashboardPage,
            children: [],
          },
          {
            path: "personal",
            Component: PersonalPage,
            children: [
              {
                path: "showcase",
                Component: personalShowCase,
              },
              {
                path: "new",
                Component: NewPersonal,
              },
            ],
          },
        ],
      },
    ],
  },
]);
