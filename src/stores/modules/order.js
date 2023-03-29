import { getOrderList } from "@/service/modules/order";
import { defineStore } from "pinia";

const useOrder = defineStore("order", {
	state: () => ({
		list: "all",
		orderList: [],
	}),
	actions: {
		async getList() {
			let { data: res } = await getOrderList(this.list);
			console.log(res.data.orders);
			this.orderList = res.data.orders;
		},
	},
});
export default useOrder;