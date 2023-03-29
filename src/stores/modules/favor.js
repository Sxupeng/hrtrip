import { getFavorHistory, getFavorList } from "@/service";
import { defineStore } from "pinia";

const useFavor = defineStore("favor", {
	state: () => ({
		favorList: [],
		favorHistory: [],
	}),
	actions: {
		async getList() {
			let { data: res } = await getFavorList();
			console.log(res.data.items);
			this.favorList = res.data.items;
		},
		async getHistory() {
			let { data: res } = await getFavorHistory();
			console.log(res.data.items);
			this.favorHistory = res.data.items;
		},
	},
});
export default useFavor;