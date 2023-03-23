import myAjax from "../requst";
// 获取tabs信息
export let getSearchTop = () => myAjax.get({ url: "/search/top" });
// 获取优惠信息
export let getSearchResult = () => myAjax.get({ url: "/search/result" });