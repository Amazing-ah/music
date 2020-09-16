import React from "react";
export default function SearchButton(props) {
  const { searchButton, reqSearch } = props;
  return (
    <div>
      <div className="searchButton">
        {searchButton.map((item) => {
          return (
            <div key={item.score} onClick={() => reqSearch(item.searchWord)}>
              {item.searchWord}
            </div>
          );
        })}
      </div>
    </div>
  );
}
