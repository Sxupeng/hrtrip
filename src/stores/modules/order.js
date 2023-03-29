import { getOrderListAll } from "@/service/modules/order";
import { defineStore } from "pinia";

const useOrder = defineStore("order", {
	state: () => ({
		allList: [],
	}),
	actions: {
		async getAllList() {
			let { data: res } = await getOrderListAll();
			console.log(res.data.orders);
		},
	},
});
export default useOrder;