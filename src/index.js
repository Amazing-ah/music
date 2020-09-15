import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// 引入重制样式，rem
import "./assets/css/reset.css";
import "./assets/js/rem";

// UI 框架
import "antd-mobile/dist/antd-mobile.css";

// store
import { Provider } from "react-redux";
import store from "./store";

// 路由模式
import { HashRouter } from "react-router-dom";
ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);
