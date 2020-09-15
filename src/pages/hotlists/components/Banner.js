import React from "react";
import { Carousel } from "antd-mobile";
export default function Banner(props) {
  const { banner } = props;
  return (
    <div>
      <div className="Banner">
        <Carousel autoplay infinite>
          {banner.map((item) => {
            return <img src={item.pic} key={item.targetId} alt="" />;
          })}
        </Carousel>
      </div>
    </div>
  );
}
