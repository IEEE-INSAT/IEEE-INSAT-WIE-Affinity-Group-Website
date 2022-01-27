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
            slidesPerView={2}

          >
            <SwiperSlide>
              <Element
                num={2}
                current={current}
                title="Visits"
                text="WIE INSAT organizes multiple visits throughout the year to different places in Tunisia, hospital visits, and educational visits.
                like the JED event for example where we help integrate children in the engineering field and add more options to their future careers choices.
                
                "
              ></Element>
            </SwiperSlide>
            <SwiperSlide>
              <Element
                num={1}
                title="Workshops"
                text="Workshops ? we have that too !! WIE INSAT organizes soft skills workshops like chasing opportunities, leadership.. and a lot more
                We try our best to leave an impact by engaging more people with fun activities in different fields. 
                "
              ></Element>
            </SwiperSlide>
            <SwiperSlide>
              <Element
                num={3}
                title="Team Buildings"
                text="WIE INSAT values the relationship with its members so we try to always gather and spend time together.
                - multiple meetings are being held every week to track the workflow."
              ></Element>
            </SwiperSlide>
            <SwiperSlide>
            <Element
                num={4}
               
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
