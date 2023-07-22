import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./articles.css";
import ArticleCard from "../ArticleCard/ArticleCard";
import { extractFirstTwoSentences } from "../../helpers/extractFirstTwoSentences";
import useArticleData from "../../Hooks/useArticleData";
import { Article } from "../../api/articles/types";

const Articles = (): JSX.Element => {
  const [sliceValue, setSliceValue] = useState(3);

  const initialArticles = useArticleData();

  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    if (initialArticles) {
      const reversedData = initialArticles.slice().reverse();
      setArticles(reversedData);
    }
  }, [initialArticles]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 660) {
        setSliceValue(3);
      } else if (window.innerWidth < 1200) {
        setSliceValue(4);
      } else {
        setSliceValue(3);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="articles-container" id="articles">
      <h2>Straipsniai</h2>
      <div className="articles">
        {articles.slice(0, sliceValue).map((article) => (
          <Link
            className="article-card"
            key={article.id}
            to={`/article/${article.articleId}`}
          >
            <ArticleCard
              key={article.id}
              title={article.title}
              imgUrl={article.imgUrl}
              year={article.year}
              text={extractFirstTwoSentences(article.text as string)}
            />
          </Link>
        ))}
      </div>
      <div className="more">
        <a href="/articles">
          <p>DAUGIAU STRAIPSNIŲ...</p>
        </a>
      </div>
    </section>
  );
};

export default Articles;
