import React, { Component } from "react";
import { connect } from "react-redux";
import SearchInput from "./components/SearchInput";
import "./Search.css";
import SearchButton from "./components/SearchButton";
import {
  searchButton,
  reqSearchButtonAction,
  searchList,
  reqSearchListAction,
} from "../../store/modules/Search";
import SearchList from "./components/SearchList";
class Search extends Component {
  componentDidMount() {
    const { reqSearchButton, reqSearchList } = this.props;
    reqSearchButton();
    reqSearchList();
  }
  render() {
    const { searchButton, searchList } = this.props;
    return (
      <div>
        <SearchInput></SearchInput>
        {/* {searchButton.length > 0 ? (
          <SearchButton searchButton={searchButton}></SearchButton>
        ) : null} */}
        <SearchList></SearchList>
      </div>
    );
  }
}

const mapGet = (state) => {
  return {
    searchButton: searchButton(state),
    searchList: searchList(state),
  };
};

const mapAction = (dispatch) => {
  return {
    reqSearchButton: () => dispatch(reqSearchButtonAction()),
    reqSearchList: () => dispatch(reqSearchListAction()),
  };
};

export default connect(mapGet, mapAction)(Search);
