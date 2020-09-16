import { reqSongMenuList } from "../../utils/request";
// 初始化数据
const initState = {
  songMenuList: {},
};
// reducer
const reducer = (state = initState, action) => {
  switch (action.type) {
    case "changeSongMenuList":
      return {
        ...state,
        songMenuList: action.songMenuList,
      };

    default:
      return state;
  }
};

// action

export const changeSongMenuListAction = (songMenuList) => {
  return {
    type: "changeSongMenuList",
    songMenuList,
  };
};

// 组件触发请求
export const reqSongMenuListAction = (id) => {
  return (dispatch, getState) => {
    reqSongMenuList(id).then((res) => {
      dispatch(changeSongMenuListAction(res.data));
      // .playlist.tracks
    });
  };
};

// 导出数据
export const songMenuList = (state) => state.songMenu.songMenuList;
export const bgc = (state) =>
  state.songMenu.songMenuList.playlist
    ? state.songMenu.songMenuList.playlist.coverImgUrl
    : "";
export const name = (state) =>
  state.songMenu.songMenuList.playlist
    ? state.songMenu.songMenuList.playlist.name
    : "";
export const list = (state) =>
  state.songMenu.songMenuList.playlist
    ? state.songMenu.songMenuList.playlist.tracks
    : [];

export default reducer;
