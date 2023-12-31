import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../Components/Layouts/Layout";
import { HomeScreen } from "../Pages/HomeScreen";
import { Applications } from "../Pages/Applications";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
      { index: true, element: <Applications />, path: "/applications/:type" },
    ],
  },
]);
