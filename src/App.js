import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// 懒加载
import asyncC from "./utils/asyncComponent";
const Index = asyncC(() => import("./pages/Index/Index")); //首页
function App() {
  return (
    <div>
      <Switch>
        <Route path="/index" component={Index}></Route>
        <Redirect to="/index"></Redirect>
      </Switch>
    </div>
  );
}

export default App;
