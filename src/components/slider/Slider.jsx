import React, { useEffect, useState } from 'react'
import './Slider.scss'
const Slider = ({change}) => {
  const [pics,setPics]=useState(["pic1-slide pic-slide","pic-slide pic2-slide","pic-slide pic3-slide"])

    useEffect(()=> {
var i =1;
var n=80;
var x,y,z;
      var pic1 = document.querySelector(".pic1-slide")
      var pic2 = document.querySelector(".pic2-slide")
      var pic3 = document.querySelector(".pic3-slide")
      setInterval(()=> {
    if(i==0){
      change("Summer School")
      x=0;
      y=0;
      z=0;
    }
    if(i==1){
      change("event 2")

      x=-n;
      y=-n;
      z=-n;
    } if(i==2){
      change("event 3")

      x=n;
      y=n*2;
      z=n*3;
    }
    i++;
    if (i>2){i=0}

  
          pic1.style.setProperty( '--x', x + 'vw' );
    pic2.style.setProperty( '--y', y + 'vw' );
    pic3.style.setProperty( '--z',z + 'vw' );
      },5000)

    
    }, [])

  var items =[];

    for (const index of pics) {
        items.push(<div key={index} className={index}></div>)
      }
    return (
        <div className="slide">
          {items}
        </div>
    )
}

export default Slider
