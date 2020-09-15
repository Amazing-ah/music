import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import home from "./Modules/Home";

// import { reqBannerAction } from "./Modules/Home";
// 创建根reduce
const reducer = combineReducers({
  home,
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
