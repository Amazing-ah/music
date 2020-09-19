import axios from "axios";

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
export const reqBanner = () => {
  return axios({
    url: "/banner?type=2",
    method: "get",
  });
};
// 推荐歌单
export const reqSongMenuLike = () => {
  return axios({
    url: "/personalized?limit=6",
    method: "get",
  });
};

// 最新音乐
export const reqSongNew = () => {
  return axios({
    url: "/personalized/newsong",
    method: "get",
  });
};

// 获取排行榜
export const reqHotSong = () => {
  return axios({
    url: "/top/list?id=3778678",
    method: "get",
  });
};
// 默认搜索关键词
export const reqSearchButton = () => {
  return axios({
    url: "/search/hot/detail",
    method: "get",
  });
};

// 搜索匹配
export const reqSearchList = (keywords) => {
  return axios({
    url: "/search",
    method: "get",
    params: { keywords: keywords },
  });
};
//榜单详情

export const reqSongMenuList = (id) => {
  return axios({
    url: "/playlist/detail",
    method: "get",
    params: { id: id },
  });
};
// 获取音乐 url
export const reqUrl = (id) => {
  return axios({
    url: "/song/url",
    method: "get",
    params: { id: id },
  });
};
// 歌词请求
export const reqLrc = (id) => {
  return axios({
    url: "/lyric",
    method: "get",
    params: { id: id },
  });
};
