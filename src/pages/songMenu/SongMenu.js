import React, { Component } from "react";
import { connect } from "react-redux";
import "./SongMenu.css";
import Title from "./components/Title";
import List from "./components/List";
import {
  songMenuList,
  reqSongMenuListAction,
  bgc,
  name,
  list,
} from "../../store/modules/SongMenu";

class SongMenu extends Component {
  componentDidMount() {
    const { reqSongMenuList } = this.props;
    let id = this.props.match.params.id;
    reqSongMenuList(id);
  }
  /* 
    取出id 调用reqSongMenuList
     */
  render() {
    const { list, name, bgc } = this.props;
    return (
      <div>
        <Title bgc={bgc} name={name}></Title>
        <List list={list}></List>
      </div>
    );
  }
}

const mapGet = (state) => {
  return {
    songMenuList: songMenuList(state),
    bgc: bgc(state),
    name: name(state),
    list: list(state),
  };
};

const mapActions = (dispatch) => {
  return {
    reqSongMenuList: (id) => dispatch(reqSongMenuListAction(id)),
  };
};

export default connect(mapGet, mapActions)(SongMenu);
