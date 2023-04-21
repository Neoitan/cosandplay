import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Homepage from "./pages/homepage/Homepage";
import Activities from "./pages/activities/Activities";
import Error from "./pages/error/Error";

import "./main.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <Error />,
  },
  {
    path: "/activities",
    element: <Activities />,
    errorElement: <Error />,
  },

  // {
  //   path: "/admin",
  //   element: <AdminPanel />,
  //   errorElement: <ErrorPage />,
  // },

  // {
  //   path: "/test",
  //   element: <Test />,
  //   errorElement: <ErrorPage />,
  // },
]);

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
