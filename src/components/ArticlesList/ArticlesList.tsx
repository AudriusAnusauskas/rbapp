import ArticleCard from "../ArticleCard/ArticleCard";
import { Link } from "react-router-dom";
import { extractFirstTwoSentences } from "../../helpers/extractFirstTwoSentences";
import Navbar from "../Navbar/Navbar";
import "./articlesList.css";
import Footer from "../Footer/Footer";
import {
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiChevronDoubleLeft,
  HiChevronDoubleRight,
} from "react-icons/hi";
import useArticleData from "../../Hooks/useArticleData";
import usePagination from "../../Hooks/usePagination";
import { Article } from "../../api/articles/types";
import { useEffect, useState } from "react";

const ArticlesList = (): JSX.Element => {
  const initialArticles = useArticleData();

  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    if (initialArticles) {
      const reversedData = initialArticles.slice().reverse();
      setArticles(reversedData);
    }
  }, [initialArticles]);

  const {
    currentPage,
    currentItems,
    totalPages,
    handleFirstPage,
    handleNextPage,
    handlePreviousPage,
    handleLastPage,
  } = usePagination(12, articles);

  return (
    <div>
      <Navbar />
      <section className="articles-list-container">
        <h2>Straipsniai</h2>
        <div className="articles-list">
          {currentItems.map((article: Article) => (
            <Link
              className="article-card"
              key={article.articleId}
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
        <div className="pagination">
          <button onClick={handleFirstPage} disabled={currentPage === 1}>
            <HiChevronDoubleLeft />
          </button>
          <button onClick={handlePreviousPage} disabled={currentPage === 1}>
            <HiOutlineChevronLeft />
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            <HiOutlineChevronRight />
          </button>
          <button
            onClick={handleLastPage}
            disabled={currentPage === totalPages}
          >
            <HiChevronDoubleRight />
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ArticlesList;
