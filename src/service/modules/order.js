import myAjax from "../requst";

export let getOrderList = (list) =>
		myAjax.get({
			url: "/order/list?type=" + list,
		});