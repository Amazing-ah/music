import React from "react";
import searchImg from "../../../assets/img/search.png";

export default function SearchInput(props) {
  const { keywords, reqSearch } = props;
  return (
    <div>
      <div className="SearchInput">
        <input
          type="text"
          placeholder="请输入关键字"
          onChange={(e) => reqSearch(e.target.value)}
          value={keywords}
        />
        <img src={searchImg} alt="" className="searchImg" />
      </div>
    </div>
  );
}
