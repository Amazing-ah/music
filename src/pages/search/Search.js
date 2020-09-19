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
  keywords,
  changeKeyWordsAction,
} from "../../store/modules/Search";
import SearchList from "./components/SearchList";
class Search extends Component {
  componentDidMount() {
    const { reqSearchButton } = this.props;
    reqSearchButton();
  }

  reqSearch(e) {
    this.props.changeKeyWordsAction(e);
    const { reqSearchList } = this.props;
    if (e === "") {
      return;
    }
    reqSearchList();
  }

  render() {
    const { searchButton, keywords, searchList } = this.props;
    return (
      <div>
        <SearchInput
          keywords={keywords}
          reqSearch={(e) => this.reqSearch(e)}
        ></SearchInput>

        {keywords ? (
          <SearchList searchList={searchList}></SearchList>
        ) : (
          <SearchButton
            searchButton={searchButton}
            reqSearch={(value) => this.reqSearch(value)}
          ></SearchButton>
        )}
      </div>
    );
  }
}

const mapGet = (state) => {
  return {
    searchButton: searchButton(state),
    searchList: searchList(state),
    keywords: keywords(state),
  };
};

const mapAction = (dispatch) => {
  return {
    reqSearchButton: () => dispatch(reqSearchButtonAction()),

    reqSearchList: () => dispatch(reqSearchListAction()),

    changeKeyWordsAction: (keywords) =>
      dispatch(changeKeyWordsAction(keywords)),
  };
};

export default connect(mapGet, mapAction)(Search);
