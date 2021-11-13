import React, { useEffect } from 'react'
import Slide from './Slide/Slide'
import './Slider.scss'
const Slider = () => {
  useEffect(()=> {
//     const slider = document.querySelector('.slider-container'),
//     slides = Array.from(document.querySelectorAll('.slide'))
//     let isDragging = false,
//     startPos = 0,
//     currentTranslate = 0,
//      prevTranslate = 0,
//     animationID = 0;
//     var done  = false ; 
//    var  test=0;
 
//     slider.addEventListener('touchstart', touchStart())
//     slider.addEventListener('touchend', touchEnd)
//     slider.addEventListener('touchmove', touchMove)
//     // mouse events

//     slider.addEventListener('mousedown', touchStart())
//     slider.addEventListener('mouseup', touchEnd)
//     slider.addEventListener('mousemove', touchMove)
//     slider.addEventListener('mouseleave', touchEnd)


//   function touchStart() {
//     return function (event) {
//       console.log (event)
//       startPos = getPositionX(event)
//       isDragging = true
//       animationID = requestAnimationFrame(animation)
//       slider.classList.add('grabbing')

//       for (let i =0 ; i< slides.length ; i++) {
//         if (i%2) slides[i].classList.add("up");
//         else slides[i].classList.add("down");
//               }
//     }
//   }

//   function getPositionX(event) {
//     return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX
//   }

//   function animation() {
//     setSliderPosition()
//     if (isDragging) requestAnimationFrame(animation)
//   }
//   function setSliderPosition() {
//     slider.style.transform = `translateX(${currentTranslate}px)`
//   }
  
// function touchMove(event) {
//   if (isDragging) {
//     const currentPosition = getPositionX(event)
//     currentTranslate = prevTranslate + currentPosition - startPos;
//     if (currentTranslate>0)currentTranslate=0;

//     if(slides[slides.length-1].getBoundingClientRect().x<500) {
//       if(!done){
//            done=true;
//       test = currentTranslate
//       }
//    else if (currentTranslate<test) {currentTranslate=test;}
//     }
// console.log( "current translate :", currentTranslate )
//      }
// }

// function touchEnd() {
//   cancelAnimationFrame(animationID)
//   isDragging = false
//   prevTranslate = currentTranslate

//   setPositionByIndex()
//   slider.classList.remove('grabbing');
//   for (let i =0 ; i< slides.length ; i++) {
//     if (i%2) slides[i].classList.remove("up");
//     else slides[i].classList.remove("down");
//           }
// }


// function setPositionByIndex() {
//   setSliderPosition()
// }
  },[])
  return (
    <div className="container-container">
    <div className="slider-container">
    {/* <Slide></Slide>
    <Slide></Slide>
    <Slide></Slide>
    <Slide></Slide>
    <Slide></Slide>
    <Slide></Slide> */}

<Slide num={1}></Slide>
<Slide num={2}></Slide>
<Slide num={3}></Slide>
<Slide num={4}></Slide>
<Slide num={5}></Slide>
<Slide num={6}></Slide>


</div></div>
  )
}

export default Slider
