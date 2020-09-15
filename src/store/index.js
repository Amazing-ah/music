import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import home from "./modules/Home";
import hotSong from "./modules/HotSong";
import search from "./modules/Search";
// import { reqBannerAction } from "./Modules/Home";
// 创建根reduce
const reducer = combineReducers({
  home,
  hotSong,
  search,
});
// 创建仓库
const store = createStore(reducer, applyMiddleware(thunk));

// 测试请求
// store.dispatch(reqBannerAction());

// 监听
// store.subscribe(() => {
//   console.log(store.getState());
// });
export default store;
