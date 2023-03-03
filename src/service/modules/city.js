import myAxios from "../requst";

// 获取全部城市信息
export let getCityAll = () =>
  myAxios.get({
    url: "/city/all",
  });