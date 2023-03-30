import { getOrderList } from "@/service/modules/order";
import { defineStore } from "pinia";

const useOrder = defineStore("order", {
	state: () => ({
		list: "all",
		orderList: [],
		tabs: [
			{ title: "全部订单", name: "all" },
			{ title: "近期订单", name: "recent" },
			{ title: "待支付", name: "pend" },
		],
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