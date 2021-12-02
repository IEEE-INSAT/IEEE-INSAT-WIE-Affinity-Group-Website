import React from "react";

import SlidePhone from "./SlidePhone";
import { useEffect, useState } from "react";
import img1 from "../../teampics/pic1.jpg";
import img2 from "../../teampics/pic2.jpg";
import img3 from "../../teampics/pic3.png";
import img4 from "../../teampics/pic5.png";
import img5 from "../../teampics/pic4.png";
import img6 from "../../teampics/pic6.jpg";
import img7 from "../../teampics/pic7.jpg";
import "./SliderPhone.scss";
const SliderPhone = () => {
  const [card1, setcard1] = useState(true);
  const [card2, setcard2] = useState(false);
  const [card3, setcard3] = useState(false);
  const [card4, setcard4] = useState(false);
  const [card5, setcard5] = useState(false);
  const [card6, setcard6] = useState(false);
  const [card7, setcard7] = useState(false);
  const [card8, setcard8] = useState(false);
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
        if (i !== j && done) {
      

          slides[i].classList.add("notShow");
          if (i === 0) {

            setcard1(false);

          }
          if (i === 1) {

            setcard2(false);

          }
          if (i === 2) {

            setcard3(false);

          }
          if (i === 3) {
            setcard4(false);
          }
          if (i === 4) {
            setcard5(false);
          }
          if (i === 5) {
            setcard6(false);
          }
          if (i === 6) {
            setcard7(false);
          }
          if (i === 7) {
            setcard8(false);
          }
        }
      }
    }
    const firstContainer = document.getElementsByClassName("first-containere");
    const secondContainer =
      document.getElementsByClassName("second-containere");
    const slides = document.getElementsByClassName("slideePhone");
    window.addEventListener("scroll", () => {
      if (window.innerWidth < 800) {
        for (let i = 0; i < slides.length; i++) {
          if (
            inViewPort(slides[i]) &&
            slides[i].getBoundingClientRect().y < window.innerHeight / 2
          ) {
           
             slides[i].classList.add("show");
  //  show(slides[i]);
         
            if (i === 0) {
              setcard1(true);
            }
            if (i === 1) {
              setcard2(true);
            }
            if (i === 2) {
              setcard3(true);
            }
            if (i === 3) {
              setcard4(true);
            }
            if (i === 4) {
              setcard5(true);
            }
            if (i === 5) {
              setcard6(true);
            }
            if (i === 6) {
              setcard7(true);
            }
            if (i === 7) {
              setcard8(true);
            }

            slides[i].classList.remove("notShow");

            done = false;
            setTimeout(() => {
              done = true;
            }, 4000);
          }
        }
      }
    });
  }, []);
  return (
    <div className="container-container">
      <div className="slides-containere">
        <div className="first-containere">
          <SlidePhone
            state={card1}
            img={img1}
            position={"chairwoman"}
            Name={"Asma Hosni"}
            num={1}
          ></SlidePhone>

          <SlidePhone
            state={card2}
            img={img2}
            position={"chairwoman"}
            Name={"Asma Hosni"}
            num={2}
          ></SlidePhone>

          <SlidePhone
            state={card3}
            img={img3}
            position={"chairwoman"}
            Name={"Asma Hosni"}
            num={3}
          ></SlidePhone>

          <SlidePhone
            state={card4}
            img={img4}
            position={"chairwoman"}
            Name={"Asma Hosni"}
            num={4}
          ></SlidePhone>
        </div>

        <div className="second-containere">
          <SlidePhone
            state={card5}
            img={img7}
            position={"chairwoman"}
            Name={"Asma Hosni"}
            num={5}
          ></SlidePhone>

          <SlidePhone
            state={card6}
            img={img6}
            position={"chairwoman"}
            Name={"Asma Hosni"}
            num={6}
          ></SlidePhone>

          <SlidePhone
            state={card7}
            img={img3}
            position={"chairwoman"}
            Name={"Asma Hosni"}
            num={7}
          ></SlidePhone>
          <SlidePhone
            state={card8}
            img={img4}
            position={"chairwoman"}
            Name={"Asma Hosni"}
            num={8}
          ></SlidePhone>
        </div>
      </div>
    </div>
  );
};

export default SliderPhone;
