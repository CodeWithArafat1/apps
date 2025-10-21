import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import LoginPage from "../pages/LoginPage";
import Root from "../layouts/Root";
import SignupPage from "../pages/SignupPage";
import AllGames from "../pages/AllGames";
import Hero from "../pages/Hero";
import NotFound from "../pages/NotFound";
import ViewDetails from "../pages/ViewDetails";
import Profile from "../pages/Profile";
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
        path: "/profile",
        Component: Profile,
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
    Component: ViewDetails,
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
