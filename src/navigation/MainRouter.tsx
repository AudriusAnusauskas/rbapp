import React from "react";
import { Route, Routes } from "react-router-dom";
import ArticlesList from "../components/ArticlesList/ArticlesList";

import { routes } from "./routes";
import Layout from "../components/Layout/Layout";
import ArticleDetailed from "../components/ArticleDetailed/ArticleDetailed";

const MainRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />} path={routes.Index} />
      <Route element={<ArticlesList />} path={routes.Articles} />
      <Route element={<ArticleDetailed />} path={routes.Article} />
    </Routes>
  );
};

export default MainRouter;
