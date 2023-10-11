// import { get } from "../shared/methods";
import { articles } from "../../data/articles";
// import { Article } from "./types";

export function getArticle(id: number) {
  return articles.find((art) => art.id === id);
}
