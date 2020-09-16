import React from "react";
import searchImg from "../../../assets/img/search.png";

export default function SearchInput(props) {
  const { changeKeyWords, keywords, reqSearch } = props;
  return (
    <div>
      <div className="SearchInput">
        <input
          type="text"
          placeholder="请输入关键字"
          onChange={(e) => changeKeyWords(e.target.value)}
          value={keywords}
          onInput={() => reqSearch()}
        />
        <img src={searchImg} alt="" className="searchImg" />
      </div>
    </div>
  );
}
