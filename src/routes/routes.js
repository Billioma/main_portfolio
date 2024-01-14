import { lazy } from "react";
import WithSuspense from "../components/Loaders/WithSuspense";
import { PATHS } from "./constants";
import { Navigate } from "react-router-dom";

const { MAIN, CONTACT } = PATHS;

const Main = WithSuspense(lazy(() => import("../pages/Main")));
const Contact = WithSuspense(lazy(() => import("../pages/Contact")));

export const ROUTES = [
  { path: MAIN, element: <Main /> },
  { path: CONTACT, element: <Contact /> },
  { path: "*", element: <Navigate to="/" replace /> },
];
