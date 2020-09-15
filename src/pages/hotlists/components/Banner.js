import React from "react";
import { Carousel } from "antd-mobile";
export default function Banner(props) {
  const { banner } = props;
  console.log(banner);
  return (
    <div>
      <div className="Banner">
        <Carousel autoplay infinite>
          {banner.map((item) => {
            return <img src={item.imageUrl} key={item.targetId} alt="" />;
          })}
        </Carousel>
      </div>
    </div>
  );
}
