import { createBrowserRouter } from "react-router-dom";
import { Background } from "core/ui";
import {
  AgendasPage,
  ErrorPage,
  HomePage,
  GamePage,
  GoalsPage,
  NewGamePage,
  RelicsPage,
} from "./pages";

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
        path: "goals",
        element: <GoalsPage />,
      },
      {
        path: "relics",
        element: <RelicsPage />,
      },
      {
        path: "agendas",
        element: <AgendasPage />,
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
