import React from "react";
export default function SearchButton(props) {
  const { searchButton, reqSearch } = props;
  return (
    <div>
      {/* TODO  点击按钮，取值，传给value */}
      <div className="searchButton">
        {searchButton.map((item) => {
          return (
            <div key={item.score} onClick={() => reqSearch(item.searchWord)}>
              {item.searchWord}{" "}
            </div>
          );
        })}
      </div>
    </div>
  );
}
