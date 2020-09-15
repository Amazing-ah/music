import React, { Component } from "react";
import { connect } from "react-redux";
import HotSongList from "./components/HotSongList";
import HotSongImg from "./components/HotSongImg";
import { hotSongList, reqHotSongAction } from "../../store/modules/HotSong";
class HotSong extends Component {
  componentDidMount() {
    const { reqHotSong } = this.props;
    reqHotSong();
  }
  render() {
    const { hotSongList } = this.props;
    return (
      <div>
        <HotSongImg></HotSongImg>
        {hotSongList.length > 0 ? (
          <HotSongList hotSongList={hotSongList}></HotSongList>
        ) : null}
      </div>
    );
  }
}

const mapGet = (state) => {
  return {
    hotSongList: hotSongList(state),
  };
};

const mapActions = (dispatch) => {
  return {
    reqHotSong: () => dispatch(reqHotSongAction()),
  };
};

export default connect(mapGet, mapActions)(HotSong);
