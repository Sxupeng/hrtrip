import { defineStore } from "pinia";
import { getHotSuggests } from "@/service";

const useHomeList = defineStore("home", {
  state: () => ({
    hotSUggests: [],
  }),
  actions: {
    async getSuggests() {
      let { data: res } = await getHotSuggests();
      // console.log(res);
      this.hotSUggests = res;
    },
  },
});
export default useHomeList;