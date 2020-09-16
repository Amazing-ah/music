import React from "react";
export default function Title(props) {
  const { name, bgc } = props;

  return (
    <div>
      <div className="SongMenuTitle">
        <div className="SongMenuTitle_img">
          <img src={bgc} alt="" />
        </div>
        <div className="SongMenuTitle_title">{name} </div>
      </div>
    </div>
  );
}
