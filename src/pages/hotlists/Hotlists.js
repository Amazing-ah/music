import React, { Component } from "react";
import { connect } from "react-redux";
import {
  banner,
  reqBannerAction,
  reqMenuListAction,
  menuList,
  songList,
  reqSongNewAction,
} from "../../store/modules/Home";
import Banner from "./components/Banner";
import SongMenuLike from "./components/SongMenuLike";
import SongNew from "./components/SongNew";
class HotLists extends Component {
  componentDidMount() {
    const { reqBanner, reqSongMenuLike, reqSongNew } = this.props;
    reqBanner();
    reqSongMenuLike();
    reqSongNew();
  }
  // 热门歌单  点击  获取id  id SongMenuList 中取
  //跳转  songMenu?id   --->设置动态路由
  getSongMenuid(id) {
    let sId = id;
    this.props.history.push("/songmenulist/" + sId);
  }

  render() {
    const { banner, menuList, songList } = this.props;
    return (
      <div>
        {banner.length > 0 ? <Banner banner={banner}></Banner> : null}
        {menuList.length > 0 ? (
          <SongMenuLike
            menuList={menuList}
            getSongMenuid={(id) => this.getSongMenuid(id)}
          ></SongMenuLike>
        ) : null}
        {songList.length > 0 ? <SongNew songList={songList}></SongNew> : null}
      </div>
    );
  }
}

const mapGet = (state) => {
  return {
    banner: banner(state),
    menuList: menuList(state),
    songList: songList(state),
  };
};

const mapActions = (dispatch) => {
  return {
    reqBanner: () => dispatch(reqBannerAction()),
    reqSongMenuLike: () => dispatch(reqMenuListAction()),
    reqSongNew: () => dispatch(reqSongNewAction()),
  };
};

export default connect(mapGet, mapActions)(HotLists);
