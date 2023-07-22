import { BASE_API_URL } from "./constants";

export const fetchArticlesData = async (endpointUrl: string) => {
  try {
    const response = await fetch(`${BASE_API_URL}/${endpointUrl}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
