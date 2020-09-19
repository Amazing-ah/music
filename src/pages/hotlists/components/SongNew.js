import React from "react";
export default function SongNew(props) {
  const { songList, goPlay } = props;
  return (
    <div>
      <div className="SongNew">
        <p>
          <span>最新音乐</span>
        </p>
        {songList.map((item) => {
          return (
            <ul key={item.id}>
              <li onClick={() => goPlay(item.id)}>
                <div className="SongNew_text">
                  <p className="SongNew_Name">{item.name}</p>
                  <p>
                    <span className="SongNew_hq">sq</span>
                    {item.song.artists.map((i) => {
                      return (
                        <span className="SongNew_Who" key={i.id}>
                          {i.name}
                        </span>
                      );
                    })}
                  </p>
                </div>
                <div className="SongNew_go">
                  <span className="iconfont icon-iconset0481"></span>
                </div>
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}
