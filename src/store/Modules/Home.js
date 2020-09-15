import { reqBanner, reqSongMenuLike, reqSongNew } from "../../utils/request";
// 初始化数据
const initState = {
  banner: [], //轮播图
  menuList: [], //推荐歌单
  songList: [], //最新音乐
};
//reducer
const reducer = (state = initState, action) => {
  switch (action.type) {
    case "changeBanner":
      return {
        ...state,
        banner: action.banner,
      };
    case "changeMenuList":
      return {
        ...state,
        menuList: action.menuList,
      };
    case "changeSongList":
      return {
        ...state,
        songList: action.songList,
      };

    default:
      return state;
  }
};
// action
export const changeBannerAction = (banner) => {
  return { type: "changeBanner", banner };
};
export const changeMenuListAction = (menuList) => {
  return { type: "changeMenuList", menuList };
};
export const changeSongListAction = (songList) => {
  return { type: "changeSongList", songList };
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

export const reqMenuListAction = () => {
  return (dispatch, getState) => {
    const { menuList } = getState().home;
    if (menuList.length > 0) {
      return;
    }
    reqSongMenuLike().then((res) =>
      dispatch(changeMenuListAction(res.data.result))
    );
  };
};

export const reqSongNewAction = () => {
  return (dispatch, getState) => {
    const { songList } = getState().home;
    if (songList.length > 0) {
      return;
    }
    reqSongNew().then((res) => {
      dispatch(changeSongListAction(res.data.result));
    });
  };
};
// 导出数据
export const banner = (state) => state.home.banner;
export const menuList = (state) => state.home.menuList;
export const songList = (state) => state.home.songList;
export default reducer;
