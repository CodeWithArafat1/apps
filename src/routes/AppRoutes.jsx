import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import LoginPage from "../pages/LoginPage";
import Root from "../layouts/Root";
import SignupPage from "../pages/SignupPage";
import AllGames from "../pages/AllGames";
import Hero from "../pages/Hero";
import NotFound from "../pages/NotFound";
import ViewDetails from "../pages/ViewDetails";
import Profile from "../pages/UpdateProfile";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import ViewProfile from "../pages/ViewProfile";
import ForgotPassword from "../pages/ForgotPassword";
const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Hero,
      },
      {
        path: "/all-games",
        Component: AllGames,
      },
      {
        path: "/update-profile",
        element: (
          <PrivetRoute>
            <Profile />
          </PrivetRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivetRoute>
            <ViewProfile />
          </PrivetRoute>
        ),
      },
    ],
  },
  {
    path: "/auth/login",
    Component: LoginPage,
  },
  {
    path: "/auth/signup",
    Component: SignupPage,
  },
  {
    path: "*",
    Component: NotFound,
  },
  {
    path: "/viewDetails/:id",
    element: (
      <PrivetRoute>
        <ViewDetails />
      </PrivetRoute>
    ),
  },
  {
    path: '/auth/forgot-password',
    Component: ForgotPassword
  }
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
