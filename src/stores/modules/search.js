import { defineStore } from "pinia";
import { getSearchResult, getSearchTop } from "@/service";

const useSearch = defineStore("search", {
	state: () => ({
		searchTopList: [],
		searchResult: [],
		housePicture: [],
		searchTopList0: [],
		isShowHot: true,
		indexs: -1,
	}),
	actions: {
		async getSearchTop() {
			let { data: res } = await getSearchTop();
			this.searchTopList = res.data.allConditions;
			console.log(res.data.allConditions);
		},
		async getSearchResult() {
			let { data: res } = await getSearchResult();
			// console.log(res.data.items);
			this.searchResult = res.data.hotFilters;
			this.housePicture = res.data.items;
		},
	},
});
export default useSearch;