import React, { Component } from "react";
import { connect } from "react-redux";
import { banner, reqBannerAction } from "../../store/Modules/Home";
import Banner from "./components/Banner";
class HotLists extends Component {
  componentDidMount() {
    const { reqBanner } = this.props;
    reqBanner();
  }
  render() {
    const { banner } = this.props;
    return (
      <div>{banner.length > 0 ? <Banner banner={banner}></Banner> : null}</div>
    );
  }
}

const mapGet = (state) => {
  return {
    banner: banner(state),
  };
};

const mapActions = (dispatch) => {
  return { reqBanner: () => dispatch(reqBannerAction()) };
};

export default connect(mapGet, mapActions)(HotLists);
