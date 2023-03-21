import { defineStore } from "pinia";
import { getHomeCategories, getHomeHouselist, getHotSuggests } from "@/service";

const useHomeList = defineStore("home", {
	state: () => ({
		hotSUggests: [],
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
			// console.log(this.page);
			let { data: res } = await getHomeHouselist(this.page);
			// console.log(res);
			// this.page++;
			if (this.page === 1) {
				this.houselist = res;
			} else {
				this.houselist.push(...res);
			}
		},
	},
	// 开启数据缓存
	persist: {
		enabled: true,
	},
});

export default useHomeList;