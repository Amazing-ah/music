import { reqSearchButton, reqSearchList } from "../../utils/request";
// 初始化数据
const initState = {
  searchButton: [],
  searchList: [],
  keywords: "",
};
// reducer
const reducer = (state = initState, action) => {
  switch (action.type) {
    case "changeSearchButton":
      return {
        ...state,
        searchButton: action.searchButton,
      };
    case "changeSearchList":
      return {
        ...state,
        searchList: action.searchList,
      };
    case "changeKeyWords":
      return {
        ...state,
        keywords: action.keywords,
      };

    default:
      return state;
  }
};

// action

export const changeSearchButtonAction = (searchButton) => {
  return {
    type: "changeSearchButton",
    searchButton,
  };
};

export const changeSearchListAction = (searchList) => {
  return {
    type: "changeSearchList",
    searchList,
  };
};

export const changeKeyWordsAction = (keywords) => {
  return {
    type: "changeKeyWords",
    keywords,
  };
};

// 组件触发请求
export const reqSearchButtonAction = () => {
  return (dispatch, getState) => {
    const { searchButton } = getState().search;
    if (searchButton.length > 0) {
      return;
    }
    reqSearchButton().then((res) => {
      dispatch(changeSearchButtonAction(res.data.data));
    });
  };
};
export const reqSearchListAction = () => {
  return (dispatch, getState) => {
    const { keywords } = getState().search;
    reqSearchList(keywords).then((res) => {
      dispatch(changeSearchListAction(res.data.result.songs));
    });
  };
};

// 导出数据
export const searchButton = (state) => state.search.searchButton;
export const searchList = (state) => state.search.searchList;
export const keywords = (state) => state.search.keywords;

export default reducer;
