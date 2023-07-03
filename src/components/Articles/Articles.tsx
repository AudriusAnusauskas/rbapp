import React, { useEffect, useState } from "react";
import "./articles.css";
import { articles } from "../../data/articles";
import ArticleCard from "../ArticleCard/ArticleCard";
import { extractFirstTwoSentences } from "../../helpers/extractFirstTwoSentences";

const Articles = (): JSX.Element => {
  const [sliceValue, setSliceValue] = useState(-3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 660) {
        setSliceValue(-4);
      } else if (window.innerWidth < 1200) {
        setSliceValue(-4);
      } else {
        setSliceValue(-3);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <section className="articles-container" id="articles">
      <h2>Straipsniai</h2>
      <div className="articles">
        {articles
          .slice(sliceValue)
          .reverse()
          .map((atricle) => (
            <ArticleCard
              key={atricle.id}
              title={atricle.title}
              imgUrl={atricle.imgUrl}
              year={atricle.year}
              text={extractFirstTwoSentences(atricle.text)}
            />
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
