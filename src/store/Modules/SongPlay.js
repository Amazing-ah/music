import { reqLrc, reqUrl } from "../../utils/request";

// 初始化数据
const initState = {
  lrc: [],
  isPlay: false,
  url: "",
};
// reducer
const reducer = (state = initState, action) => {
  switch (action.type) {
    case "changeLrc":
      return {
        ...state,
        lrc: action.lrc,
      };
    case "changeIsPlay":
      return {
        ...state,
        isPlay: action.isPlay,
      };

    case "changeUrl":
      return {
        ...state,
        url: action.url,
      };

    default:
      return state;
  }
};

// action

export const changeLrcAction = (lrc) => {
  return {
    type: "changeLrc",
    lrc,
  };
};
export const changeIsPlayAction = (isPlay) => {
  return {
    type: "changeIsPlay",
    isPlay,
  };
};
export const changeUrlAction = (url) => {
  return {
    type: "changeUrl",
    url,
  };
};
// 组件触发请求
export const reqLrcAction = (id) => {
  return (dispatch, getState) => {
    reqLrc(id).then((res) => {
      let lrc = res.data.lrc.lyric;
      let arr = lrc.split("[").slice(1);

      let lrcArr = [];
      arr.forEach((item) => {
        let tempArr = item.split("]");
        lrcArr.push({
          time: tempArr[0].slice(0, 5),
          lrc: tempArr[1],
        });
      });
      let a = lrcArr.filter((item) => item.lrc !== "\n");
      console.log(a);
      dispatch(changeLrcAction(a));
    });
  };
};

export const reqUrlAction = (id) => {
  return (dispatch, getState) => {
    reqUrl(id).then((res) => {
      //   console.log(res.data.data);
      dispatch(changeUrlAction(res.data.data[0].url));
    });
  };
};

// 导出数据
export const lrc = (state) => state.songPlay.lrc;
export const isPlay = (state) => state.songPlay.isPlay;
export const url = (state) => state.songPlay.url;
export default reducer;
