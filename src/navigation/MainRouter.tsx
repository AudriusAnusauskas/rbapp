import React from "react";
import { Route, Routes } from "react-router-dom";
import ArticlesList from "../components/ArticlesList/ArticlesList";

import { routes } from "./routes";
import Layout from "../components/Layout/Layout";

const MainRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />} path={routes.Index} />
      <Route element={<ArticlesList />} path={routes.Articles} />
    </Routes>
  );
};

export default MainRouter;
