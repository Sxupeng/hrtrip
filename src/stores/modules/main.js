import { defineStore } from "pinia";
// 初始化数据
const stateDate = new Date();
const endDate = new Date().setDate(new Date().getDate() + 1);
const useMainStore = defineStore("main", {
	state: () => ({
		stateDate: stateDate,
		endDate: endDate,
		isLoading: true,
		isShowTab: true,
	}),
	// 开启数据缓存
	// persist: {
	// 	enabled: true,
	// 	strategies: [
	// 		{
	// 			paths: ["isShowTab"],
	// 		},
	// 	],
	// },
});
export default useMainStore;