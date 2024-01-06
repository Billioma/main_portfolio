import { lazy } from "react";
import WithSuspense from "../components/Loaders/WithSuspense";
import { PATHS } from "./constants";
import { Navigate } from "react-router-dom";

const { MAIN } = PATHS;

const Main = WithSuspense(lazy(() => import("../pages/Main")));

export const ROUTES = [
  { path: MAIN, element: <Main /> },
  { path: "*", element: <Navigate to="/" replace /> },
];
