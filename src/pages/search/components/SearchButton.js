import React from "react";
export default function SearchButton(props) {
  const { searchButton } = props;
  return (
    <div>
      <div className="searchButton">
        {searchButton.map((item) => {
          return <div key={item.score}>{item.searchWord} </div>;
        })}
      </div>
    </div>
  );
}
