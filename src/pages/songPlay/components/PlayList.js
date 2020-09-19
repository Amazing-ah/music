import React from "react";
export default function PlayList(props) {
  const { lrc, onTouchStart, onTouchMove, onTouchEnd } = props;
  return (
    <div className="PlayList">
      <div className="PlayListBox">
        <ul
          className="PlayList_List"
          onTouchStart={(e) => onTouchStart(e)}
          onTouchMove={(e) => onTouchMove(e)}
          onTouchEnd={(e) => onTouchEnd(e)}
        >
          {lrc.map((item, index) => {
            return <li key={index}>{item.lrc}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
