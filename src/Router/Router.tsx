import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../Components/Layouts/Layout";
import { HomeScreen } from "../Pages/HomeScreen";
import { Applications } from "../Pages/Applications";
import { Error } from "../Components/Error/Error";
import { CodeError } from "../Components/Error/CodeError";
import { ErrorBoundary } from "react-error-boundary";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ErrorBoundary FallbackComponent={CodeError}>
        <Layout />
      </ErrorBoundary>
    ),
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
      { index: true, element: <Applications />, path: "/applications/:type" },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);
