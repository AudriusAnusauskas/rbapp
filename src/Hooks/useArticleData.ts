import { useEffect, useState } from "react";
import { Article } from "../api/articles/types";
import { fetchArticlesData } from "../api/shared/methods";

const useArticleData = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchArticlesData("api/v1/articles");
        setArticles(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return articles;
};

export default useArticleData;
