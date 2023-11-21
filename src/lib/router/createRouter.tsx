import { createBrowserRouter } from "react-router-dom";

import { Home } from "../../pages/Home";


export const createRouter = (
  createRouterFn = createBrowserRouter
) =>
  createRouterFn([
    {
      path: "/",
      element: <Home />,
    },
  ]);

export type AppRouter = ReturnType<typeof createRouter>;
