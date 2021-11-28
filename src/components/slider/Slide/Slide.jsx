import React, { useEffect } from "react";
import "./Slide.scss";
import "./Slide1.scss";



import img1 from "../../../teampics/pic1.jpg";

const Slide = ({img,Name,position, num , onMouseEnter , moveLeft ,moveRight , onMouseLeave, state}) => {
  useEffect(() => {
    const slideImage = document.querySelectorAll(".slidee img");
    slideImage.forEach((e) => {
      e.addEventListener("dragstart", (e) => e.preventDefault());
    });

    // const hoverSlide = document.getElementsByClassName(`slide${num}`)
    // hoverSlide[0].addEventListener('hover',()=> {
    //     hoverSlide[0].style.removeProperty('clip-path');
    // }
    // )

  }, []);
  return (
    <>
    <div 
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    className={`slidee slide${num} ${moveLeft?"moveLeft":""} ${moveRight? "moveRight" : "" }`}>
      <img src={img} alt="" className="noselect image" />

      </div>
    <div className={`container-info container-info${num} ${state? `container-info${num}-show`: ""}`}>
    <div className="wrapper-info">
      <div className="wrapper-name">
         <h1>Name</h1>
      </div>
       <div className="wrapper-discription">
         <h5>Description</h5>
       </div>
        
    </div>
  

   
    </div>
    </>
  );
};

export default Slide;
