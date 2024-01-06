import React from "react";
import { useRoutes, useLocation } from "react-router-dom";
import Layout from "../layout/PageLayout";
import { ROUTES } from "./routes";

const RouteWrapper = () => {
  const routes = useRoutes(ROUTES);
  return routes;
};

const Pages = () => {
  const location = useLocation();
  return (
    <Layout>
      <RouteWrapper key={location.pathname} />
    </Layout>
  );
};

export default Pages;
