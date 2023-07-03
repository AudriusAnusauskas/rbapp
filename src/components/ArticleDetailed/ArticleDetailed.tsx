import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getArticle } from "../../api/articles/getArticle";
import "./articleDetailed.css";

const ArticleDetailed = (): JSX.Element => {
  const routeParams = useParams<"id">();
  const id = routeParams.id ? parseInt(routeParams.id) : 1;
  const data = useQuery("article", () => getArticle(id));
  console.log(data.data);

  return (
    <>
      <h3>{data.data?.title}</h3>;<p>{data.data?.text}</p>
    </>
  );
};

export default ArticleDetailed;
