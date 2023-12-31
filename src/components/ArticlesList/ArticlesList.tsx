import React, { useState } from "react";
import ArticleCard from "../ArticleCard/ArticleCard";
import { Link } from "react-router-dom";
import { articlesReversed } from "../../helpers/reverse";
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

const ArticlesList = (): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);

  const indexOfLastArticle = currentPage * itemsPerPage;
  const indexOfFirstArticle = indexOfLastArticle - itemsPerPage;

  const currentArticles = articlesReversed.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  const totalPages = Math.ceil(articlesReversed.length / itemsPerPage);

  const handleFirstPage = () => {
    setCurrentPage(1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleLastPage = () => {
    setCurrentPage(totalPages);
  };

  return (
    <div>
      <Navbar />
      <section className="articles-list-container">
        <h2>Straipsniai</h2>
        <div className="articles-list">
          {currentArticles.map((article) => (
            <Link
              className="article-card"
              key={article.id}
              to={`/article/${article.id}`}
            >
              <ArticleCard
                key={article.id}
                title={article.title}
                imgUrl={article.imgUrl}
                year={article.year}
                text={extractFirstTwoSentences(article.text)}
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
