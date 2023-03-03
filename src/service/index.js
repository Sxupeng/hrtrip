import axios from "axios";

class myAxios {
  constructor(baseURL, headers) {
    this.instance = axios.create({
      baseURL,
      headers,
    });
  }

  request(config) {
    return new Promise((resolve, reject) => {
      this.instance
        .request(config)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
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

export default new myAxios(
  " https://api.tf2sc.cn/api/tfcar/car",
  "PlatformType: h5"
);