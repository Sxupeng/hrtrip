import myAxios from "../requst";

export let getHotSuggests = () => myAxios.get({ url: "/home/hotSuggests" });