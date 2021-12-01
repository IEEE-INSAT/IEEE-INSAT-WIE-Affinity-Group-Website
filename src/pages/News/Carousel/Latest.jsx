import React, { useEffect, useState } from "react";
import Rubon from "../../../components/Rubon/Rubon";
import "./Latest.scss";
import pic1 from "../../../pics/1.jpg";
import pic2 from "../../../pics/2.jpg";
import pic3 from "../../../pics/3.jpg";

import SlidesCarousel from "./SlidesCarousel/SlidesCarousel";
const Latest = () => {
  useEffect(() => {
    const element = document.getElementsByClassName(`elementAct`);

    for (let i = 0; i < 3; i++) element[i].classList.remove("goback");
  }, []);
  const [slide1, setslide1] = useState("show");
  const [slide2, setslide2] = useState("small");
  const [slide3, setslide3] = useState("hide");
  function changeStatus(i) {
    if (i === 1) {
      setslide1("show");
      setslide2("small");
      setslide3("hide");
    }
    if (i === 2) {
      setslide2("show");
      setslide3("small");
      setslide1("hide");
    }
    if (i === 3) {
      setslide3("show");
      setslide1("small");
      setslide2("hide");
    }
  }

  return (
    <div className="container-Latest-Activities">
      <div className="controls">
        <div
          className="control1 control"
          onClick={() => {
            changeStatus(1);
          }}
        ></div>
        <div
          className="control2 control"
          onClick={() => {
            changeStatus(2);
          }}
        ></div>
        <div
          className="control3 control"
          onClick={() => {
            changeStatus(3);
          }}
        ></div>
      </div>
      <div className=" rubonLatest ">
        <Rubon
          text="Latest Activities. Latest Activities. Latest Activities. Latest Activities. Latest Activities.Latest Activities. Latest Activities. Latest Activities. Latest Activities. Latest Activities. Latest Activities. Latest Activities. Latest Activities. Latest Activities. Latest Activities. Latest Activities. Latest Activities. Latest Activities. Latest Activities. "
          deg={0}
          num={7}
        ></Rubon>
      </div>
      <div className=" rubonLatest rubonTitle">Latest Activities</div>

      <div className="carouselLatest">
        <div className="carouselWrapper">
          <div className="filler"></div>
          <div className={` container-imgLatest`}>
            <SlidesCarousel
              num={1}
              pic={pic1}
              text={
                "Officiis harum provident quaerat dolore aliquam recusandae ducimus voluptates veniam non reiciendis, facilis vel."
              }
              status={slide1}
            ></SlidesCarousel>
            <SlidesCarousel
              num={2}
              pic={pic2}
              text={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. mollitia quibusdam nobis esfacilis vel."
              }
              status={slide2}
            ></SlidesCarousel>
            <SlidesCarousel
              num={3}
              pic={pic3}
              text={
                "Lorem ipsum dolarum provident quon reiciendis, mollitia quibusdam nobis est quia nemo ratione, nostrum facilis vel."
              }
              status={slide3}
            ></SlidesCarousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Latest;
