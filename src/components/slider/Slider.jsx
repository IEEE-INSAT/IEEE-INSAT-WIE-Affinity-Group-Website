import React, { useEffect, useState } from "react";
import Slide from "./Slide/Slide";
import "./Slider.scss";
import arrowRight from "../../svgs/Vector.svg"
import arrowLeft from "../../svgs/Group.svg"


import img1 from "../../teampics/pic1.jpg";
import img2 from "../../teampics/pic2.jpg";
import img3 from "../../teampics/pic3.png";
import img4 from "../../teampics/pic5.png";
import img5 from "../../teampics/pic4.png";
import img6 from "../../teampics/pic6.jpg";
import img7 from "../../teampics/pic7.jpg";
import img8 from "../../teampics/pic8.jpg";
import img9 from "../../teampics/pic9.svg";

import rightArrow from "../../svgs/Vector.svg";
import leftArrow from "../../teampics/right.png";

const Slider = () => {
  var i = 1000;
  const [Slide1, setSlide1] = useState(false);
  const [Slide2, setSlide2] = useState(false);
  const [Slide3, setSlide3] = useState(false);
  const [Slide4, setSlide4] = useState(false);
  function setSlide1False() {
    setTimeout(() => {
      setSlide1(false);
    }, i);
  }
  function setSlide2False() {
    setTimeout(() => {
      setSlide2(false);
    }, i);
  }
  function setSlide3False() {
    setTimeout(() => {
      setSlide3(false);
    }, i);
  }
  function setSlide4False() {
    setTimeout(() => {
      setSlide4(false);
    }, i);
  }
  var done = false;
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

    function show(j) {
      for (let i = 0; i < slides.length; i++) {
        if (i !== j) {
          slides[i].classList.add("notShow");
        }
      }
    }
    const rightArrow = document.getElementsByClassName("rightArrow");
    const leftArrow = document.getElementsByClassName("leftArrow");
    const firstContainer = document.getElementsByClassName("first-containere");
    const secondContainer =
      document.getElementsByClassName("second-containere");
    const slides = document.getElementsByClassName("slidee");
    window.addEventListener("scroll", () => {
      if (window.innerWidth < 800) {
        for (let i = 0; i < slides.length; i++) {
          if (
            inViewPort(slides[i]) &&
            slides[i].getBoundingClientRect().y < window.innerHeight / 2
          ) {
            show(slides[i]);
            slides[i].classList.add("show");
            slides[i].classList.remove("notShow");

            done = false;
            setInterval(() => {
              done = true;
            }, 4000);
          }
        }
      }
    });

    leftArrow[0].addEventListener("click", () => {
      firstContainer[0].style.transform = "translate(-48%,35%)";
      secondContainer[0].style.transform = "translate(-48%,35%)";
      leftArrow[0].style.opacity = "0";
      rightArrow[0].style.opacity = "1";
    });
    rightArrow[0].addEventListener("click", () => {
      firstContainer[0].style.transform = "translate(52%,35%)";
      secondContainer[0].style.transform = "translate(52%,35%)";
      leftArrow[0].style.opacity = "1";
      rightArrow[0].style.opacity = "0";
    });
  }, []);
  return (
    <div className="container-container">
      <img src={arrowLeft} className="rightArrow" alt="right Arrow" />
      <img src={arrowRight} className="leftArrow" alt="Left Arrow" />

      <div className="slides-containere">
        <div className="first-containere">
          <Slide
            state={Slide1}
            onMouseEnter={() => {
              console.log("1");
              setSlide1(true);
              setSlide2(false);
              setSlide3(false);
              setSlide4(false);
            }}
            onMouseLeave={() => {
              setSlide1False();
            }}
            moveLeft={Slide1 || Slide2 ? true : false}
            img={img1}
            position={"chairwoman"}
            name={"Asma Hosni"}
            num={1}
          ></Slide>

          <Slide
            state={Slide2}
            onMouseEnter={() => {
              setSlide1(false);
              setSlide2(true);
              setSlide3(false);
              setSlide4(false);
            }}
            onMouseLeave={() => {
              setSlide2False();
            }}
            moveLeft={Slide2 ? true : false}
            img={img8}
            position={"Vice chairwoman"}
            name={"Nawres Jouini"}
            num={2}
          ></Slide>

          <Slide
            state={Slide3}
            onMouseLeave={() => {
              setSlide3False();
            }}
            onMouseEnter={() => {
              setSlide1(false);
              setSlide2(false);
              setSlide3(true);
              setSlide4(false);
            }}
            moveRight={Slide3 ? true : false}
            img={img2}
            position={"General Secretary"}
            name={"Ilef Maalouch"}
            num={3}
          ></Slide>

          <Slide
            state={Slide4}
            onMouseEnter={() => {
              setSlide1(false);
              setSlide2(false);
              setSlide3(false);
              setSlide4(true);
            }}
            onMouseLeave={() => {
              setSlide4False();
            }}
            moveRight={Slide3 || Slide4 ? true : false}
            img={img4}
            position={"Treasurer"}
            name={"Ameni Bchir"}
            num={4}
          ></Slide>
        </div>

        <div className="second-containere">
          <Slide
            state={Slide1}
            onMouseEnter={() => {
              setSlide1(true);
              setSlide2(false);
              setSlide3(false);
              setSlide4(false);
            }}
            onMouseLeave={() => {
              setSlide1False();
            }}
            moveLeft={Slide1 || Slide2 ? true : false}
            img={img6}
            position={"Training Manager"}
            name={"Rania Bouwazra"}
            num={5}
          ></Slide>

          <Slide
            state={Slide2}
            onMouseEnter={() => {
              setSlide1(false);
              setSlide2(true);
              setSlide3(false);
              setSlide4(false);
            }}
            onMouseLeave={() => {
              setSlide2False();
            }}
            moveLeft={Slide2 ? true : false}
            img={img7}
            position={"Media Manager"}
            name={"Ahmed Cherif"}
            num={6}
          ></Slide>

          <Slide
            state={Slide3}
            onMouseLeave={() => {
              setSlide3False();
            }}
            onMouseEnter={() => {
              setSlide1(false);
              setSlide2(false);
              setSlide3(true);
              setSlide4(false);
            }}
            moveRight={Slide3 ? true : false}
            img={img9}
            position={"Webmaster"}
            name={"Nadine Boukadida"}
            num={7}
          ></Slide>
          <Slide
            state={Slide4}
            onMouseEnter={() => {
              setSlide1(false);
              setSlide2(false);
              setSlide3(false);
              setSlide4(true);
            }}
            onMouseLeave={() => {
              setSlide4False();
            }}
            moveRight={Slide3 || Slide4 ? true : false}
            img={img3}
            position={"HR Manager"}
            name={"Safa Ayed"}
            num={8}
          ></Slide>
        </div>
      </div>
    </div>
  );
};

export default Slider;
