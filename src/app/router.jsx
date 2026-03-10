import { createBrowserRouter } from "react-router-dom";
import Background from "core/ui/Background";
import GamePage from "./pages/GamePage/GamePage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage/HomePage";
import NewGamePage from "./pages/NewGamePage";
import ObjectivesPage from "./pages/ObjectivesPage";
import RelicsPage from "./pages/RelicsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Background />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "objectives",
        element: <ObjectivesPage />,
      },
      {
        path: "relics",
        element: <RelicsPage />,
      },
      {
        path: "newGame",
        element: <NewGamePage />,
      },
      {
        path: "game",
        element: <GamePage />,
      },
    ],
  },
]);
