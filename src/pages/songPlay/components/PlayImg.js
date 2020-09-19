import React from "react";
import smallImg from "../../../assets/img/needle-ip6.png";
export default function PlayImg(props) {
  const { changeIcon, isPlay, url } = props;
  return (
    <div className="PlayImg">
      <div className="PlayImg_box">
        <img src={smallImg} alt="" />
      </div>
      <div
        className={
          isPlay
            ? "IsPlay iconfont icon-bofang"
            : "IsPlay iconfont icon-iconset0481"
        }
        onClick={() => changeIcon()}
      >
        <audio src={url}></audio>
      </div>
    </div>
  );
}
