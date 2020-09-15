import React from "react";
export default function SongMenuLike(props) {
  const { menuList } = props;
  return (
    <div>
      <div className="SongMenuLike">
        <p>
          <span>推荐歌单</span>
        </p>

        <ul>
          {menuList.map((item) => {
            return (
              <li className="SongMenuLike_list" key={item.id}>
                <img src={item.picUrl} alt="" />
                <p className="SongMenuLike_text">{item.name}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
