import axios from "axios";
import api from "../../api/axiosConfig";
import { BASE_API_URL } from "../shared/constants";

export const fetchArticle = async (articleId: number) => {
  const apiUrl = `${BASE_API_URL}/api/v1/articles/${articleId}`;
  const response = await axios.get(apiUrl);

  return response.data;
};
