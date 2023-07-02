import React, { useEffect, useState } from "react";
import "./articles.css";
import { articles } from "../../data/articles";
import ArticleCard from "../ArticleCard/ArticleCard";

function extractFirstTwoSentences(text: string) {
  const sentences = text.split(".").map((sentence) => sentence.trim() + ".");

  let selectedSentences = "";
  let sentenceCount = 0;

  for (const sentence of sentences) {
    if (sentenceCount >= 2) {
      break;
    }

    selectedSentences += sentence + " ";
    sentenceCount++;
  }

  const displaySentences = selectedSentences.trim();

  return displaySentences;
}

const Articles = () => {
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
    <section className="articles-container">
      <h2>Straipsniai</h2>
      <div className="articles">
        {articles.slice(sliceValue).map((e) => (
          <ArticleCard
            key={e.id}
            title={e.title}
            imgUrl={e.imgUrl}
            year={e.year}
            text={extractFirstTwoSentences(e.text)}
          />
        ))}
      </div>
      <div className="more">
        <a href="/">
          <p>DAUGIAU STRAIPSNIŲ...</p>
        </a>
      </div>
    </section>
  );
};

export default Articles;
