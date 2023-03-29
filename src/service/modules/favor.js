import myAxios from "../requst";

export let getFavorList = () =>
		myAxios.get({
			url: "/favor/list",
		});
export let getFavorHistory = () =>
		myAxios.get({
			url: "/favor/history",
		});