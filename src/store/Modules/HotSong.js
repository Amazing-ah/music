import { reqHotSong } from "../../utils/request";

const initState = {
  hotSongList: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "changeHotSongList":
      return {
        ...state,
        hotSongList: action.hotSongList,
      };

    default:
      return state;
  }
};
// action

export const changeHotSongListAction = (hotSongList) => {
  return { type: "changeHotSongList", hotSongList };
};
// 组件触发请求
export const reqHotSongAction = () => {
  return (dispatch, getState) => {
    const { hotSongList } = getState().hotSong;
    if (hotSongList.length > 0) {
      return;
    }
    reqHotSong().then((res) =>
      dispatch(changeHotSongListAction(res.data.playlist.tracks))
    );
  };
};
// 导出数据
export const hotSongList = (state) => state.hotSong.hotSongList;

export default reducer;
