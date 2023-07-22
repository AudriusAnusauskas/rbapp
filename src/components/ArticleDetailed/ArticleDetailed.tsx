import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import "./articleDetailed.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Article } from "../../api/articles/types";
import { fetchArticle } from "../../api/articles/fetchArticle";

const ArticleDetailed = (): JSX.Element => {
  const { articleId } = useParams<{ articleId: string }>();

  const { data, isLoading, isError } = useQuery<Article>(
    ["article", articleId],
    () => fetchArticle(Number(articleId))
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  if (!data) {
    return <div>No article found.</div>;
  }

  return (
    <>
      <Navbar />
      <div className="article-container">
        <img src={data.imgUrl} alt="" />
        <p className="photo-author">Nuotrauka: {data.photoAuthor}</p>
        <div className="article-text-container">
          <h2>{data.title}</h2>
          <p className="publication">
            Publikuota{" "}
            <a className="publication-link" target="blank" href={data.url}>
              {data.publicationTitle}
            </a>
            , {data.year}
          </p>
          <p className="text article-text">{data.text}</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ArticleDetailed;
