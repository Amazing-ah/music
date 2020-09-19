import React, { Component } from "react";
import { connect } from "react-redux";
import PlayImg from "./components/PlayImg";
import "./SongPlay.css";
import {
  isPlay,
  changeIsPlayAction,
  lrc,
  reqLrcAction,
  url,
  reqUrlAction,
} from "../../store/modules/SongPlay";
import PlayList from "./components/PlayList";
class SongPlay extends Component {
  /* 
  FIXME
  一个时间段有多句歌词的时候，类名只加一个，

   */
  componentDidMount() {
    const { reqLrc, reqUrl } = this.props;
    let id = this.props.match.params.id;
    reqLrc(id);
    reqUrl(id);
  }

  changeIcon() {
    const { isPlay, changeIsPlay } = this.props;
    let myAudio = document.querySelector("audio");
    let play = !isPlay;
    // console.log(myAudio.ended);
    // myAudio.ended ? (play = false) : (play = true);

    changeIsPlay(play);
    this.playAudio();
    isPlay ? myAudio.pause() : myAudio.play();
  }
  playAudio() {
    const { lrc, changeIsPlay } = this.props;
    let myAudio = document.querySelector("audio");
    let box = document.querySelector(".PlayListBox");
    let list = document.querySelector(".PlayList_List");
    let li = document.querySelectorAll(".PlayList_List li");
    //   myAudio 时间改变--->
    myAudio.ontimeupdate = () => {
      let outH = box.clientHeight;
      let liH = outH / 6;
      //   let outerH = this.myAudio.clientHeight;
      // 当前播放时间
      let currentTime = myAudio.currentTime; //歌曲当前时间
      let duration = myAudio.duration; //歌曲总时间
      // 当前时间转换成  00:00
      let transTime =
        (Math.floor(currentTime / 60) + "").padStart(2, "0") +
        ":" +
        (Math.floor(currentTime % 60) + "").padStart(2, "0");
      //   获取下标
      let index = lrc.findIndex((item) => item.time === transTime);

      if (index === -1) {
        return;
      }
      // 移动盒子
      list.style.top = -index * liH + "px";
      li[index].className = "listCheck";
      if (index > 0) {
        li[index - 1].className = "";
      }
      // index > 0 ? (li[index - 1].className = "") : null;

      /* FIXME  问题，  结束的时候  重新请求List？？？     一个时间段有多句歌词-->类名的添加问题 */
      myAudio.onended = () => {
        console.log(111);
        changeIsPlay(true);
        li.className = "";
      };
    };
  }

  /* TODO  歌词滚动*/

  onTouchStart(e) {
    console.log("按下了");
  }
  onTouchMove(e) {
    console.log("移动中");
  }
  onTouchEnd(e) {
    console.log("抬起了");
  }

  render() {
    const { isPlay, lrc, url } = this.props;
    // this.playAudio();
    return (
      <div className="SongPlay">
        <PlayImg
          changeIcon={() => this.changeIcon()}
          isPlay={isPlay}
          url={url}
        ></PlayImg>

        {lrc.length > 0 ? (
          <PlayList
            lrc={lrc}
            onTouchStart={(e) => this.onTouchStart(e)}
            onTouchMove={(e) => this.onTouchMove(e)}
            onTouchEnd={(e) => this.onTouchEnd(e)}
          ></PlayList>
        ) : null}
      </div>
    );
  }
}

const mapGet = (state) => {
  return {
    lrc: lrc(state),
    isPlay: isPlay(state),
    url: url(state),
  };
};

const mapAction = (dispatch) => {
  return {
    changeIsPlay: (play) => dispatch(changeIsPlayAction(play)),
    reqLrc: (id) => dispatch(reqLrcAction(id)),
    reqUrl: (id) => dispatch(reqUrlAction(id)),
  };
};

export default connect(mapGet, mapAction)(SongPlay);
