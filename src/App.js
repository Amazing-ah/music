import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// 懒加载
import asyncC from "./utils/asyncComponent";
const Index = asyncC(() => import("./pages/index/Index")); //首页
const SongMenuList = asyncC(() => import("./pages/songMenu/SongMenu")); //推荐歌单详情
const SongPlay = asyncC(() => import("./pages/songPlay/SongPlay")); //音乐播放;
function App() {
  return (
    <div>
      <Switch>
        <Route path="/index" component={Index}></Route>
        <Route path="/songmenulist/:id" component={SongMenuList}></Route>

        <Route path="/play/:id" component={SongPlay}></Route>
        <Redirect to="/index"></Redirect>
      </Switch>
    </div>
  );
}

export default App;
