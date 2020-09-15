import React from "react";
import { numFilter } from "../../../utils/filter";

export default function HotSongList(props) {
  const { hotSongList } = props;
  console.log(hotSongList);
  return (
    <div>
      <div className="HotSongList">
        <ul>
          {hotSongList.map((item, index) => {
            return (
              <li key={item.id}>
                <div className="HotNum">
                  <span className={index > 2 ? "" : "hotColor"}>
                    {numFilter(index + 1)}
                  </span>
                </div>
                <div className="HotText">
                  <p className="HotText_name">{item.name}</p>
                  <p>
                    <span className="HotText_hq">sq</span>
                    {item.ar.map((i) => {
                      return (
                        <span className="HotText_who" key={i.id}>
                          {i.name}{" "}
                        </span>
                      );
                    })}
                    <span className="HotText_who"></span>
                  </p>
                </div>
                <div className="HotGo">
                  <span className="iconfont icon-iconset0481"></span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
