import React from "react";
export default function List(props) {
  const { list } = props;
  console.log(list);
  return (
    <div>
      <div className="ListList">
        <ul>
          {list.map((item, index) => {
            return (
              <li key={item.id}>
                <div className="ListNum">
                  <span className="">{index}</span>
                </div>
                <div className="ListText">
                  <p className="ListText_name">{item.al.name}</p>
                  <p>
                    <span className="ListText_hq">sq</span>
                    {item.ar.map((i) => {
                      return (
                        <span className="ListText_who" key={i.id}>
                          {i.name}
                        </span>
                      );
                    })}

                    <span className="ListText_who"></span>
                  </p>
                </div>
                <div className="ListGo">
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
