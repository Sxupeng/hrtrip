import myAjax from "../requst";

export let getOrderListAll = () =>
		myAjax.get({
			url: "/order/list?type=all",
		});