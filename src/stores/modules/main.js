import { defineStore } from "pinia";
// 初始化数据
const stateDate = new Date();
const endDate = new Date().setDate(new Date().getDate() + 1);
const useMainStore = defineStore("main", {
	state: () => ({
		stateDate: stateDate,
		endDate: endDate,
		isLoading: true,
	}),
});
export default useMainStore;