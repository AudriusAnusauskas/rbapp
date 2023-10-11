// import { get } from "../shared/methods";
import { articles as data } from "../../data/articles";

export function getArticle(id: number) {
  return data.find((art) => art.id === id);
}
