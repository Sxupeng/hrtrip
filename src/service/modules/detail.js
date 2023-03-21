import myAxios from "../requst";

export let getDetailInfos = (id) =>
		myAxios.get({
			url: "/detail/infos?houseId=" + id,
		});