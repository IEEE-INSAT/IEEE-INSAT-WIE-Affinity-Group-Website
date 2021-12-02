import React, { useEffect, useState } from "react";
import Element from "./newsElement/Element";
import "./News.scss";
import Vector from "../../svgs/Vector.svg";
import Group from "../../svgs/Group.svg";
import Latest from "./Carousel/Latest";
import Rubon from "../../components/Rubon/Rubon";
import shadow from "../../svgs/shadow.svg";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper.min.css";
const News = () => {
  const [current, setcurrent] = useState(true);
  var container;
  var arrow;
  var x = 0;

  return (
    <div className="wrapperNews">
      <img className="arrowLeft" alt="" />

      <div className="NewsContainer">
        <Rubon
          text="What do we do ? .What do we do ? .What do we do ? .What do we do ? .What do we do ? .What do we do ? .What do we do ? .What do we do ? .What do we do ? .What do we do ? .What do we do ? . "
          deg={0}
          num={6}
        ></Rubon>
        <div className="container-elements">
          <Swiper
            spaceBetween={50}
            slidesPerView={2}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <Element
                num={2}
                current={current}
                title="Visits"
                text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit atque eligendi at delectus quod hic illo molestias nulla dolore adipisci? Incidunt beatae possimus quibusdam reiciendis quis optio ipsam dolores deleniti? "
              ></Element>
            </SwiperSlide>
            <SwiperSlide>
              <Element
                num={1}
                title="Workshops"
                text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit atque eligendi at delectus quod hic illo molestias nulla dolore adipisci? Incidunt beatae possimus quibusdam reiciendis quis optio ipsam dolores deleniti? "
              ></Element>
            </SwiperSlide>
            <SwiperSlide>
              <Element
                num={2}
                title="Visits"
                text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit atque eligendi at delectus quod hic illo molestias nulla dolore adipisci? Incidunt beatae possimus quibusdam reiciendis quis optio ipsam dolores deleniti? "
              ></Element>
            </SwiperSlide>
         
          </Swiper>
        </div>
        <div className="carousel">
          <Latest></Latest>
        </div>
      </div>
    </div>
  );
};

export default News;
