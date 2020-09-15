import { reqBanner } from "../../utils/request";
// 初始化数据
const initState = {
  banner: [],
};
//reducer
const reducer = (state = initState, action) => {
  switch (action.type) {
    case "changeBanner":
      return {
        // ...this.state,
        banner: action.banner,
      };

    default:
      return state;
  }
};
// action
export const changeBannerAction = (banner) => {
  return { type: "changeBanner", banner };
};
// 组件触发请求
export const reqBannerAction = () => {
  return (dispatch, getState) => {
    const { banner } = getState().home;
    if (banner.length > 0) {
      return;
    }
    reqBanner().then((res) => dispatch(changeBannerAction(res.data.banners)));
  };
};
// 导出数据
export const banner = (state) => state.home.banner;
export default reducer;
