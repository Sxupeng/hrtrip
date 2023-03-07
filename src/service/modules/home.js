import myAxios from "../requst";

export let getHotSuggests = () => myAxios.get({ url: "/home/hotSuggests" });
export let getHomeCategories = () => myAxios.get({ url: "/home/categories" });
export let getHomeHouselist = (page) =>
  myAxios.get({
    url: "/home/houselist",
    params: {
      page,
    },
  });