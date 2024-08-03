// This comment is just for practice
import React from 'react';
import { createRoot } from "react-dom/client";
import './styles/index.css';
import Dashboard from './screens/Dashboard';
import Login from './screens/Login';
import Register from './screens/Register.js'
import VideoPage from './screens/VideoPage'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />
  },
  {
    path: "login",
    element: <Login />
  },
  {
    path: "register",
    element: <Register />
  },
  {
    path: "video",
    element: <VideoPage />
  }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
