import { useState } from "react";
import { Article } from "../api/articles/types";

const usePagination = (itemsPerPage: number, data: Article[]) => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / itemsPerPage);

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

  return {
    currentPage,
    currentItems,
    totalPages,
    handleFirstPage,
    handleNextPage,
    handlePreviousPage,
    handleLastPage,
  };
};

export default usePagination;
