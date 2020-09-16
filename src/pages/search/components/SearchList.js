import React from "react";
export default function SearchList(props) {
  let { searchList } = props;
  console.log(searchList);
  return (
    <div>
      <div className="SearchList">
        <ul>
          {searchList.map((item, index) => {
            return (
              <li key={item.id}>
                <div className="SearchNum">
                  <span className="">{index}</span>
                </div>
                <div className="SearchText">
                  <p className="SearchText_name">{item.name}</p>
                  <p>
                    <span className="SearchText_hq">sq</span>
                    {item.artists.map((i) => {
                      return (
                        <span className="SearchText_who" key={i.id}>
                          {i.name}
                        </span>
                      );
                    })}

                    <span className="SearchText_who"></span>
                  </p>
                </div>
                <div className="SearchGo">
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
