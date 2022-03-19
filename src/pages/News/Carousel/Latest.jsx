import React, { useEffect, useState } from "react";
import Rubon from "../../../components/Rubon/Rubon";
import "./Latest.scss";
import pic1 from "../../../pics/6new.png";
import pic2 from "../../../pics/5new.jpg";
import pic3 from "../../../pics/3new.jpg";

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
              name="ML Hackathon"

            changeName={changeName}
              num={1}
              pic={pic1}
              text={
                " Don't miss the opportunity to meet students from other universities in order to create new connections and build a bigger Network !"
              }
              status={slide1}
            ></SlidesCarousel>
            <SlidesCarousel
              name="IEEE Day"

              num={2}
            changeName={changeName}

              pic={pic2}
              text={
                "the WIE AG mobilized on Sunday 5th Dec 2021, at district 'Ettahrir', in order to teach scouts the basics of cybersecurity"
              }
              status={slide2}
            ></SlidesCarousel>
            <SlidesCarousel
            changeName={changeName}
              name="October rose"
              num={3}
              pic={pic3}
              text={
                "Your donations brought a glimmer of hope to a lot of children during our latest visit where a smile was made on each face "
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
