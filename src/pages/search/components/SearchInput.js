import React from "react";
import searchImg from "../../../assets/img/search.png";
export default function SearchInput() {
  return (
    <div>
      <div className="SearchInput">
        <input type="text" placeholder="请输入关键字" />
        <img src={searchImg} alt="" className="searchImg" />
      </div>
    </div>
  );
}
