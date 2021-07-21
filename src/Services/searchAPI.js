import axios from "axios";
const BASE_URL = "https://pixabay.com/api/";
const KEY = "21742684-2124d89228f195892f61b714b";

axios.defaults.baseURL = BASE_URL;

axios.defaults.params = {
  key: KEY,
  image_type: "photo",
  orientation: "horizontal",
  per_page: 12,
};

const fetchImage = async (keyword = "", page) => {
  try {
    const { data } = await axios.get("", {
      params: { q: keyword, page: page },
    });
    return data.hits;
  } catch (error) {
    console.log("error", { error });
    return [];
  }
};

export default fetchImage;
