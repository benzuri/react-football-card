import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home.tsx";
import { NotFound } from "./pages/NotFound.tsx";
import { Countries } from "./pages/Countries.tsx";
import Competitions from "./pages/Competitions.tsx";
import Teams from "./pages/Teams.tsx";
import Players from "./pages/Players.tsx";
import Player from "./pages/Player.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/countries",
        element: <Countries />,
      },
      {
        path: "/competitions/:id",
        element: <Competitions />,
      },
      {
        path: "/teams/:id",
        element: <Teams />,
      },
      {
        path: "/players/:id",
        element: <Players />,
      },
      {
        path: "/player/:id",
        element: <Player />,
      },
      {
        path: "*",
        element: < NotFound />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);