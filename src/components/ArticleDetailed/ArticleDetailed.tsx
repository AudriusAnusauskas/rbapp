import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getArticle } from "../../api/articles/getArticle";
import "./articleDetailed.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const ArticleDetailed = (): JSX.Element => {
  const routeParams = useParams<"id">();
  const id = routeParams.id ? parseInt(routeParams.id) : 1;
  const data = useQuery("article", () => getArticle(id));
  console.log(data.data);

  return (
    <>
      <Navbar />
      <div className="article-container">
        <img src={data.data?.imgUrl} alt="" />
        <p className="photo-author">Nuotrauka: {data.data?.photoAuthor}</p>
        <div className="article-text-container">
          <h2>{data.data?.title}</h2>
          <p className="publication">
            Publikuota{" "}
            <a
              className="publication-link"
              target="blank"
              href={data.data?.url}
            >
              {data.data?.publicationTitle}
            </a>
            , {data.data?.year}
          </p>
          <p className="text article-text">{data.data?.text}</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ArticleDetailed;
