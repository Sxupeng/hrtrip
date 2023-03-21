import { defineStore } from "pinia";
import { getDetailInfos } from "@/service";

const useDetail = defineStore("detail", {
	state: () => ({
		id: "",
		detailItem: [],
	}),
	actions: {
		async getDetailItem() {
			let { data: res } = await getDetailInfos(this.id);
			// console.log(res);
			this.detailItem = res;
		},
	},
});
export default useDetail;