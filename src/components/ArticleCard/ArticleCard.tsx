import React from "react";
import { Article } from "../../api/articles/types";
import "./articleCard.css";

const ArticleCard = ({ title, imgUrl, year, text }: Article): JSX.Element => {
  return (
    <div className="article-card">
      <img src={imgUrl} alt={title} />
      <div className="article-card-text">
        <h3>{title}</h3>
        <p className="date">{year}</p>
        <p className="text">
          {text} <span className="read-more">...</span>
        </p>
      </div>
    </div>
  );
};

export default ArticleCard;
