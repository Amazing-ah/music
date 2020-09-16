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
    const { reqSearchButton, reqSearchList } = this.props;
    reqSearchButton();
    // reqSearchList();
  }

  // changeKeywords
  changeKeyWords(keywords) {
    const { changeKeyWordsAction } = this.props;
    changeKeyWordsAction(keywords);
    // ？？？？
  }
  //  TODO  value 值为空时，==keywords=='' 清空列表
  reqSearch() {
    const { reqSearchList, keywords } = this.props;
    if (keywords === "") {
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
          changeKeyWords={(keywords) => this.changeKeyWords(keywords)}
          reqSearch={() => this.reqSearch()}
        ></SearchInput>
        {searchList.length > 0 ? (
          <SearchList searchList={searchList}></SearchList>
        ) : null}

        {/* {searchButton.length > 0 ? (
          <SearchButton searchButton={searchButton}></SearchButton>
        ) : null} */}
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
