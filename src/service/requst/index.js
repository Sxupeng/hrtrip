import axios from "axios";
import { BASE_URL, TIMEOUT } from "@/service/requst/config";
import useMainStore from "@/stores/modules/main";

const mainStore = useMainStore();

class myAxios {
	constructor(baseURL, timeout) {
		this.instance = axios.create({
			baseURL,
			timeout,
		});
		// 拦截器
		// 请求拦截器
		this.instance.interceptors.request.use(
				(congig) => {
					mainStore.isLoading = true;
					return congig;
				},
				(error) => {
					return error;
				}
		);
		// 响应拦截器
		this.instance.interceptors.response.use(
				(res) => {
					mainStore.isLoading = false;
					return res;
				},
				(error) => {
					mainStore.isLoading = false;
					return error;
				}
		);
	}
	
	request(config) {
		// mainStore.isLoading = true;
		return new Promise((resolve, reject) => {
			this.instance
					.request(config)
					.then((res) => {
						resolve(res.data);
						// mainStore.isLoading = false;
					})
					.catch((err) => {
						reject(err);
						// mainStore.isLoading = false;
					});
		});
	}
	
	get(config) {
		return this.request({ ...config, method: "get" });
	}
	
	post(config) {
		return this.request({ ...config, method: "post" });
	}
}

export default new myAxios(BASE_URL, TIMEOUT);