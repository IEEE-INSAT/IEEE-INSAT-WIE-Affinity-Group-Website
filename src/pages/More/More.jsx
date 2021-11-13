import React, { useEffect } from "react";
import "./More.scss";
import Rubon from "../../components/Rubon/Rubon";
import Slider from "../../components/slider/Slider";
const More = () => {
  useEffect(() => {
    const container = document.getElementsByClassName("more-container");
    const banner = document.getElementsByClassName("banner");
    const slider = document.getElementsByClassName("slider-container");

    const rectangle = document.getElementsByClassName("rectangle");
    var r = 2;
    var t = 0;
    var lastscroll = 0;

    window.addEventListener(
      "scroll",
      () => {
        if (slider[0].getBoundingClientRect().y > 300) {
          console.log(slider[0].getBoundingClientRect().y);

          if (container[0].getBoundingClientRect().bottom < 1800) {
            if (container[0].getBoundingClientRect().bottom < lastscroll) {
              r += 0.25;
              if (slider[0].getBoundingClientRect().top < 91) {
                t += 5;
              } else t += 20;
              rectangle[0].style.transform = `rotate(-${r}deg)`;
              container[0].style.transform = `translateY(-${t}px)`;
            } else {
              r -= 0.3;
              if (slider[0].getBoundingClientRect().top < 91) {
                t -= 5;
              } else t -= 20;
              rectangle[0].style.transform = `rotate(-${r}deg)`;
              container[0].style.transform = `translateY(-${t}px)`;
            }
            lastscroll = container[0].getBoundingClientRect().bottom;
          }
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
          {" "}
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
