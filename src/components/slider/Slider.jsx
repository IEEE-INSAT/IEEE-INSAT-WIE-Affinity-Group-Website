import React, { useEffect } from 'react'
import Slide from './Slide/Slide'
import './Slider.scss'
import img1 from '../../teampics/pic1.jpg'
import img2 from '../../teampics/pic2.jpg'
import img3 from '../../teampics/pic3.png'
import img4 from '../../teampics/pic5.png'
import img5 from '../../teampics/pic4.png'
import img6 from '../../teampics/pic6.jpg'
import img7 from '../../teampics/pic7.jpg'
import rightArrow from '../../teampics/left.png'
import leftArrow from '../../teampics/right.png'
const Slider = () => {
  var done = false;
  useEffect(()=> {
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

    function show (j){
      for (let i=0;i<slides.length;i++){
      if (i!==j){
        slides[i].classList.add("notShow");
      }

      }
    }
    const rightArrow = document.getElementsByClassName("rightArrow");
    const leftArrow = document.getElementsByClassName("leftArrow");
    const firstContainer = document.getElementsByClassName("first-container");
    const secondContainer = document.getElementsByClassName("second-container");
    const slides = document.getElementsByClassName("slide");
    window.addEventListener("scroll",()=>{
      console.log(slides[0].getBoundingClientRect().bottom>400)
       if (window.innerWidth<1000){
        for (let i=0;i<slides.length;i++){
          if (inViewPort(slides[i]) && (slides[i].getBoundingClientRect().y< (window.innerHeight/2))){
            show(slides[i]);
            slides[i].classList.add("show");
        slides[i].classList.remove("notShow");
            
            done=false;
            setInterval(() => {
              done=true;
            }, 4000);
          }
        }
      }
    })
   











    leftArrow[0].addEventListener("click", ()=> {
      firstContainer[0].style.transform ="translate(-50%,-10%)";
      secondContainer[0].style.transform ="translate(-50%,-10%)";
    })
    rightArrow[0].addEventListener("click", ()=> {
      firstContainer[0].style.transform ="translate(50%,-10%)";
      secondContainer[0].style.transform ="translate(50%,-10%)";
    })

  },[])
  return (
    <div className="container-container">
      <img src={rightArrow} className="rightArrow" alt="right Arrow" />
      <img src={leftArrow} className="leftArrow" alt="Left Arrow" />

    <div className="slider-container">
    
<div className="first-container">
  <div className="wrapper">
  <Slide img={img1} position={"chairwoman"} Name={"Asma Hosni"} num={1}></Slide>
<Slide img={img2} position={"chairwoman"} Name={"Asma Hosni"} num={2}></Slide>
<Slide img={img3} position={"chairwoman"} Name={"Asma Hosni"} num={3}></Slide>
<Slide img={img4} position={"chairwoman"} Name={"Asma Hosni"} num={4}></Slide>


</div></div>
<div className="second-container">
  <div className="wrapper">
  <Slide img={img7} position={"chairwoman"} Name={"Asma Hosni"} num={5}></Slide>
<Slide img={img6} position={"chairwoman"} Name={"Asma Hosni"} num={6}></Slide>
<Slide img={img3} position={"chairwoman"} Name={"Asma Hosni"} num={7}></Slide>
<Slide img={img4} position={"chairwoman"} Name={"Asma Hosni"} num={8}></Slide>
</div></div>



</div></div>
  )
}

export default Slider
