import { Navigate, useRoutes } from "react-router-dom";
// layouts
import DashboardLayout from "./Admin/layouts";
import SimpleLayout from "./Admin/layouts/simple";
//
import EventPage from "./Admin/pages/EventPage";
import UserPage from "./Admin/pages/UserPage";
import LoginPage from "./Admin/pages/LoginPage";
import Page404 from "./Admin/pages/Page404";
import SessionsPage from "./Admin/pages/SessionsPage";
import DashboardAppPage from "./Admin/pages/DashboardAppPage";
import AddUserPage from "./Admin/pages/AddUserPage";
import Profile from "./Admin/pages/Profile";
import BlogPage from "./Admin/pages/BlogPage";
import Blog from "./Admin/pages/Blog";

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: "",
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to='/app' /> },
        
      ],
    },
    {
      path: "Admin/loginAdmin",
      element: <LoginPage />,
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to='/loginAdmin' /> },
        { element: <Navigate to='/app' /> },
      ],
    },
  ]);

  return routes;
}
