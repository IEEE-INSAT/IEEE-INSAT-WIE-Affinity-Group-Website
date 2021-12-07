import React, { useEffect, useState } from "react";
import Rubon from "../../../components/Rubon/Rubon";
import "./Latest.scss";
import pic1 from "../../../pics/1.jpg";
import pic2 from "../../../pics/2.jpg";
import pic3 from "../../../pics/3.jpg";

import SlidesCarousel from "./SlidesCarousel/SlidesCarousel";
const Latest = () => {
  const [nameEvent, setnameEvent] = useState("Latest Event")
  const changeName=(name)=>{
setnameEvent(name);
  }
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
    <div  className="container-Latest-Activities">
      <div className="controls">
        <div
          className={`control1 control ${slide1==="show"? "color": ""}`}
          onClick={() => {
            changeStatus(1);
          }}
        ></div>
        <div
               className={`control2 control ${slide2==="show"? "color": ""}`}

          onClick={() => {
            changeStatus(2);
          }}
        ></div>
        <div
                    className={`control3 control ${slide3==="show"? "color": ""}`}

          onClick={() => {
            changeStatus(3);
          }}
        ></div>
      </div>
      <div className=" rubonLatest ">
        <Rubon
        
          text="Latest Activities. Latest Activities. Latest Activities. Latest Activities. Latest Activities.Latest Activities. Latest Activities. Latest Activities. Latest Activities. Latest Activities. Latest Activities. Latest Activities. Latest Activities. Latest Activities. Latest Activities. Latest Activities. Latest Activities. Latest Activities. Latest Activities. "
          deg={0}
          num={1}
        ></Rubon>
      </div>
      <div className=" rubonLatest rubonTitle">{nameEvent}</div>

      <div className="carouselLatest">
        <div className="carouselWrapper">
          <div className="filler"></div>
          <div className={` container-imgLatest`}>
            <SlidesCarousel
              name="Summer School"

            changeName={changeName}
              num={1}
              pic={pic1}
              text={
                "Officiis harum provident quaerat dolore aliquam recusandae ducimus voluptates veniam non reiciendis, facilis vel."
              }
              status={slide1}
            ></SlidesCarousel>
            <SlidesCarousel
              name="IEEE Day"

              num={2}
            changeName={changeName}

              pic={pic2}
              text={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. mollitia quibusdam nobis esfacilis vel."
              }
              status={slide2}
            ></SlidesCarousel>
            <SlidesCarousel
            changeName={changeName}
              name="Star Program"
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
