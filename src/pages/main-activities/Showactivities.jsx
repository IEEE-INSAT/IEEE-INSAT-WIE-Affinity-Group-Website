import React, { useEffect } from "react";
import "./Showactivities.scss";
import pic1 from "../../pics/31.jpg";
import pic2 from "../../pics/41.jpg";
import pic3 from "../../pics/5.png";
import pic4 from "../../pics/2.jpg";
import pic5 from "../../pics/4.jpg";
import Rubon from "../../components/Rubon/Rubon";
import svg1 from "../../svgs/1.svg";
import svg2 from "../../svgs/2.svg";
import svg3 from "../../svgs/3.svg";
import Img from "../../components/img-slide/Img";
import PhoneActivity from "./PhoneActivity/PhoneActivity";
const Showactivities = () => {
  function ImagesSlide() {
    if (window.innerWidth < 800) {
      return (
        <>
        <PhoneActivity></PhoneActivity>
        </>
      );
    } else {
      return (
        <>
          {" "}
          <Img pic={pic1} num={1} top={100} />
          <Img pic={pic2} num={2} top={170} right={5} />
          <Img pic={pic3} num={3} top={209} right={21} />
          <Img pic={pic4} num={4} top={340} right={-1} />
          <Img pic={pic1} num={5} top={332} right={42} />
          <Img pic={pic5} num={7} top={270} right={5} left={23} />
          <Img pic={pic2} num={8} top={n} left={10} />
        </>
      );
    }
  }

  var n = 297;
  if (window.innerWidth < 800) {
    n = 297;
  } else {
    n = 330;
  }
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
    if(window.innerWidth>700){
    function value(num, i) {
      list[num].style.transform = `translateY(-${i}px)`;
    }
    const list = document.getElementsByClassName("element-activities");
    const link = document.getElementsByClassName("element6");
    const svgs = document.getElementsByClassName("svg");
    const vid = document.getElementById("myVideo");
    const rubonHolder = document.getElementsByClassName("rubonHolder");

    const containerActivities = document.getElementsByClassName(
      "container-activities"
    );
    // const rectangle = document.getElementsByClassName("rectangle");
    var r = 0;
    var lastscroll = 0;
    var lastscroll1 = 0;
    var lastvalue = 0;
    var currentvalue = 0;
    var offset = 0;
    var i = 0;
    var x = 60;
    var y = 100;
    var t = 0;
    var z = 115;
    var a = 200;
    var b = 220;
    var done = true;
    var c = 242;
    var d = 160;
    var k = 0;
    var e = 190;
    if (window.innerWidth < 800) {
      i = 1;
      n = 297;
    } else {
      i = 2;
      n = 350;
    }

    window.addEventListener("scroll", () => {
      const limitTop = document.getElementsByClassName("rubon5");
      if (limitTop[0].getBoundingClientRect().top > 50) {
        list[0].style.transform = `translateY(-${60}px)`;
        list[1].style.transform = `translateY(-${100}px)`;
        svgs[0].style.transform = `translateY(-${500 + 30}px)`;

        svgs[2].style.transform = `translateY(-${100 + 30}px)`;
        svgs[1].style.transform = `translateY(-${60 + 40}px)`;
        list[2].style.transform = `translateY(-${115}px)`;
        list[3].style.transform = `translateY(-${200}px)`;
        list[4].style.transform = `translateY(-${220}px)`;
        list[5].style.transform = `translateY(-${160}px)`;
        list[6].style.transform = `translateY(-${190}px)`;
        x = 60;
        y = 100;
        z = 115;
        a = 200;
        b = 220;
        d = 160;
        e = 190;
      }

      if (containerActivities[0].getBoundingClientRect().top && done) {
        offset = document.documentElement.scrollTop - 100;
        done = false;
      }

      var test = inViewPort(rubonHolder[0]);

      if (
        containerActivities[0].getBoundingClientRect().y < 0 &&
        containerActivities[0].getBoundingClientRect().y > -2000 &&
        !test
      ) {
        currentvalue = document.documentElement.scrollTop - offset;
        currentvalue = currentvalue - lastvalue;
        x += currentvalue * 1 * i;
        y += currentvalue * 2 * i;
        z += currentvalue * 1.5 * i;
        a += currentvalue * 2.2 * i;
        b += currentvalue * 2.5 * i;
        d += currentvalue * 2.5 * i;
        e += currentvalue * 1.7 * i;
        list[0].style.transform = `translateY(-${x}px)`;
        // svgs[0].style.top=`${x}px`;
        list[1].style.transform = `translateY(-${y}px)`;
        svgs[2].style.transform = `translateY(-${y + 30}px)`;
        svgs[0].style.transform = `translateY(-${y}px)`;

        svgs[1].style.transform = `translateY(-${x + 40}px)`;
        list[2].style.transform = `translateY(-${z}px)`;
        list[3].style.transform = `translateY(-${a}px)`;
        list[4].style.transform = `translateY(-${b}px)`;
        list[5].style.transform = `translateY(-${d}px)`;
        list[6].style.transform = `translateY(-${e}px)`;
      }
      if (list[6].getBoundingClientRect().y < 300) {
        link[0].style.transform = "translate(0)";
      } else {
        link[0].style.transform = "translateY(20vw)";
      }
      lastscroll = containerActivities[0].getBoundingClientRect().y;
      lastvalue = document.documentElement.scrollTop - offset;
    });}
  }, []);
  return (
    <div className="big-container-activities">
      <div className="rubons">
        <Rubon
          text="keep scrolling to discover wie. keep scrolling to discover wie. keep scrolling to discover wie keep scrolling to discover wie"
          deg={0}
          num={5}
        ></Rubon>
      </div>
      <div className="container-activities">
        <div className="activities-wrapper">
          <div className="title">
            <h1>
              {" "}
              <div> Dsicover the amazing world </div>{" "}
              <div>of WIE threw OUR amazing activities</div>{" "}
            </h1>
            <div className="link">
              <h2 className="element6"> And there is more ...</h2>
            </div>
          </div>
          <div className="list">
            {ImagesSlide()}
            <img className="svg svg1" src={svg1} alt="" />
            <img className="svg svg2" src={svg2} alt="" />
            <img className="svg svg3" src={svg3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showactivities;
