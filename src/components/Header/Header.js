import React, { Component } from "react";
import "./Header.css";
export default class Header extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <p>音乐</p>
          <p>
            <button>下载APP</button>
          </p>
        </div>
      </div>
    );
  }
}
