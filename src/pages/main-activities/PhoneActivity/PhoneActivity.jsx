import React, { useEffect, useState } from "react";
import pic1 from "../../../pics/31.jpg";
import pic2 from "../../../pics/41.jpg";
import pic3 from "../../../pics/5.png";
import pic4 from "../../../pics/2.jpg";
import pic5 from "../../../pics/4.jpg";
import ImgPhone from "./Image/ImgPhone";
import "./PhoneActivity.scss";
const PhoneActivity = () => {
  function inViewPort(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight ||
          document.documentElement.clientHeight) /* or $(window).height() */ &&
      rect.right <=
        (window.innerWidth ||
          document.documentElement.clientWidth) /* or $(window).width() */
    );
  }

  useEffect(() => {
    const images = document.getElementsByClassName("elementP-img");

    window.addEventListener("scroll", () => {
      for (let i = 0; i < images.length; i++) {
        if (inViewPort(images[i])) {
          images[i].classList.add("elementP-img-show");
        }
      }
    });
  }, []);
  return (
    <>
      <div className="container-Activity-Phone">
        <ImgPhone pic={pic1} num={1} top={2} right={5}></ImgPhone>
        <ImgPhone pic={pic2} num={2} top={20} left={69}></ImgPhone>
        <ImgPhone pic={pic3} num={3} top={39} right={-3}></ImgPhone>
        <ImgPhone pic={pic4} num={4} top={69} left={5}></ImgPhone>
        <ImgPhone pic={pic1} num={5} top={59} right={3}></ImgPhone>

        <ImgPhone pic={pic5} num={6} top={5} left={1}></ImgPhone>
        <ImgPhone pic={pic4} num={7} top={22} right={22}></ImgPhone>
        <ImgPhone pic={pic2} num={8} top={33} left={5}></ImgPhone>
        <ImgPhone pic={pic3} num={9} top={50} right={40}></ImgPhone>
        <ImgPhone pic={pic1} num={10} top={70} left={5}></ImgPhone>

        <ImgPhone pic={pic5} num={11} top={35} left={1}></ImgPhone>
        <ImgPhone pic={pic4} num={12} top={30} right={22}></ImgPhone>
        <ImgPhone pic={pic2} num={13} top={53} left={5}></ImgPhone>
        <ImgPhone pic={pic3} num={14} top={77} right={40}></ImgPhone>
        <ImgPhone pic={pic1} num={15} top={27} left={5}></ImgPhone>
      </div>
    </>
  );
};

export default PhoneActivity;
