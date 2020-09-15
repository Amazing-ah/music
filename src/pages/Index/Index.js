import React, { Component } from "react";
import { Switch, Redirect, Route, NavLink } from "react-router-dom";
import "./Index.css";
import asyncC from "../../utils/asyncComponent";
import Header from "../../components/Header/Header";
// 二级路由
const HotList = asyncC(() => import("../hotlists/Hotlists")); //推荐
const HotSong = asyncC(() => import("../hotSong/HotSong")); //热歌榜
const Search = asyncC(() => import("../search/Search")); //搜索

export default class Index extends Component {
  render() {
    return (
      <div className="Index">
        <Header></Header>
        <div className="indexHeader">
          <div>
            <NavLink to="/index/hotlist" activeClassName="checkStyle">
              推荐
            </NavLink>
          </div>
          <div>
            <NavLink to="/index/hotsong" activeClassName="checkStyle">
              热歌榜
            </NavLink>
          </div>
          <div>
            <NavLink to="/index/search" activeClassName="checkStyle">
              搜索
            </NavLink>
          </div>
        </div>
        <Switch>
          <Route path="/index/hotlist" component={HotList}></Route>
          <Route path="/index/hotsong" component={HotSong}></Route>
          <Route path="/index/search" component={Search}></Route>
          <Redirect to="/index/hotlist"></Redirect>
        </Switch>
      </div>
    );
  }
}
