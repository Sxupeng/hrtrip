import { defineStore } from "pinia";
import { getCityAll } from "@/service";

const useCity = defineStore("city", {
	state: () => ({
		// 搜索框功能
		searchValue: null,
		allCity: {},
		currentCity: { cityName: "郑州" },
	}),
	actions: {
		async getCityAll() {
			let { data: res } = await getCityAll();
			// console.log(cityGroup);
			// console.log(cityGroupOverSea);
			// console.log(res);
			this.allCity = res;
		},
	},
});
export default useCity;