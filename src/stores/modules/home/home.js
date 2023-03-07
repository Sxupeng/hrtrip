import { defineStore } from "pinia";
import { getHomeCategories, getHomeHouselist, getHotSuggests } from "@/service";

const useHomeList = defineStore("home", {
  state: () => ({
    hotSUggests: [],
    stateDate: null,
    endDate: null,
    categories: [],
    houselist: [],
    page: 1,
  }),
  actions: {
    async getSuggests() {
      let { data: res } = await getHotSuggests();
      // console.log(res);
      this.hotSUggests = res;
    },
    async getCategories() {
      let { data: res } = await getHomeCategories();
      // console.log(res);
      this.categories = res;
    },
    async getHouselist() {
      let { data: res } = await getHomeHouselist(this.page);
      // console.log(res);
      // console.log(res);
      this.houselist.push(...res);
    },
  },
});
export default useHomeList;