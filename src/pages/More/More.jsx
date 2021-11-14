import React, { useEffect } from "react";
import "./More.scss";
import Rubon from "../../components/Rubon/Rubon";
import Slider from "../../components/slider/Slider";
const More = () => {
  useEffect(() => {
    function inViewPort(el) {
      var rect = el.getBoundingClientRect();

      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight ||
            document.documentElement
              .clientHeight) /* or $(window).height() */ &&
        rect.right <=
          (window.innerWidth ||
            document.documentElement.clientWidth) /* or $(window).width() */
      );
    }
    const container = document.getElementsByClassName("more-container");
    const banner = document.getElementsByClassName("banner");
    const slider = document.getElementsByClassName("slider-container");
    const link = document.getElementsByClassName("element6");

    const rectangle = document.getElementsByClassName("rubonHolder");
    var t = 0;
    var lastscroll = 0;

    window.addEventListener(
      "scroll",
      () => {
       
          if (inViewPort(link[0]) && rectangle[0].getBoundingClientRect().y<window.innerHeight) {
            if (container[0].getBoundingClientRect().bottom < lastscroll) {
            t += 10;
              container[0].style.transform = `translateY(-${t}px)`;
            } else {
              t -= 10;
              container[0].style.transform = `translateY(-${t}px)`;
            }
            lastscroll = container[0].getBoundingClientRect().bottom;
          }
      },
      []
    );
  });

  return (
    <div className="relative">
      <div className="inside"></div>
      <div className="more-container">
        <div className="rubonHolder">
          <Rubon
            text="Meet Our Lovely Team.Meet Our Lovely Team.Meet Our Lovely Team.Meet Our Lovely Team.Meet Our Lovely Team.Meet Our Lovely Team.Meet Our Lovely Team.Meet Our Lovely Team.Meet Our Lovely Team.Meet Our Lovely Team.Meet Our Lovely Team.Meet Our Lovely Team.Meet Our Lovely Team.Meet Our Lovely Team.Meet Our Lovely Team.Meet Our Lovely Team.Meet Our Lovely Team.Meet Our Lovely Team.Meet Our Lovely Team.Meet Our Lovely Team.Meet Our Lovely Team.Meet Our Lovely Team.Meet Our Lovely Team.Meet Our Lovely Team.Meet Our Lovely Team.Meet Our Lovely Team.Meet Our Lovely Team.Meet Our Lovely Team.Meet Our Lovely Team.Meet Our Lovely Team.Meet Our Lovely Team.Meet Our Lovely Team.Meet Our Lovely Team.Meet Our Lovely Team.Meet Our Lovely Team.Meet Our Lovely Team.Meet Our Lovely Team.Meet Our Lovely Team.Meet Our Lovely Team."
            deg={10}
            color="pink"
            num={7}
          ></Rubon>
        </div>{" "}
        <div className="rectangle"></div>
        <div className="wrapper-container">
          <Slider></Slider>
        </div>
      </div>
    </div>
  );
};

export default More;
