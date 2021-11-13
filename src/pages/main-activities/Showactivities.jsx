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

const Showactivities = () => {
  useEffect(() => {
    function value(num, i) {
      list[num].style.transform = `translateY(-${i}px)`;
    }
    const list = document.getElementsByClassName("element-activities");
    const link = document.getElementsByClassName("element6");
    const svgs = document.getElementsByClassName("svg");
    const vid = document.getElementById("myVideo");

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
      i = 0.5;
    } else {
      i = 2;
    }
    window.addEventListener("scroll", () => {
      // if (rectangle[0].getBoundingClientRect().y<500){
      //     if (rectangle[0].getBoundingClientRect().y<lastscroll1){
      //                r-=0.1;
      //                t-=20;
      //     // rectangle[0].style.transform=`rotate(${r}deg) translateY(${t}px)`;
      //     // containerActivities[0].style.transform=`translateY(${t}px)`
      // // }
      // else {
      //     r+=0.2;
      //     t+=0.5;

      //     rectangle[0].style.transform=`rotate(${r}deg translateY(${t}vh)`

      // }
      // lastscroll1=rectangle[0].getBoundingClientRect().y;

      // }
      if (containerActivities[0].getBoundingClientRect().top && done) {
        offset = document.documentElement.scrollTop - 100;
        done = false;
      }

      if (
        containerActivities[0].getBoundingClientRect().y < 0 &&
        containerActivities[0].getBoundingClientRect().y > -1000
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
        svgs[1].style.transform = `translateY(-${x + 40}px)`;
        list[2].style.transform = `translateY(-${z}px)`;
        list[3].style.transform = `translateY(-${a}px)`;
        list[4].style.transform = `translateY(-${b}px)`;
        list[5].style.transform = `translateY(-${d}px)`;
        list[6].style.transform = `translateY(-${e}px)`;
        translate(0, 1);

        function translate(num, val) {
          k += currentvalue * val * i;
          list[num].style.transform = `translateY(-${k}px)`;
        }

        // if(x<-40)x=-40;
        // if(y<-20)y=-20;
      }
      console.log(list[6].getBoundingClientRect().y);
      if (list[6].getBoundingClientRect().y < 300) {
        link[0].style.transform = "translate(0)";
      } else {
        link[0].style.transform = "translateY(20vw)";
      }
      lastscroll = containerActivities[0].getBoundingClientRect().y;
      lastvalue = document.documentElement.scrollTop - offset;
    });
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
              <h2 className="element6"> get to know more ...</h2>
            </div>
          </div>
          <div className="list">
            <Img pic={pic1} num={1} top={60} />
            <Img pic={pic2} num={2} top={80} right={0} />
            <Img pic={pic3} num={3} top={131} right={32} />
            <Img pic={pic4} num={4} top={200} right={0} />
            <Img pic={pic1} num={5} top={242} right={42} />
            <Img pic={pic5} num={7} top={170} right={0} left={40} />
            <Img pic={pic2} num={8} top={187} right={40} />

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
