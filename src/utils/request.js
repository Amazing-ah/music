import axios from "axios";
import qs from "qs";
import store from "../store";

//请求拦截
axios.interceptors.request.use((config) => {
  return config;
});

//响应拦截
axios.interceptors.response.use((res) => {
  console.log(`本次请求地址是：${res.config.url}`);
  console.log(res);
  return res;
});

// 轮播图
export const reqBanner = (type) => {
  return axios({
    url: "/banner",
    method: "get",
    params: type,
  });
};
