import React, { useEffect, useState } from "react";
import Element from "./newsElement/Element";
import "./News.scss";
import Vector from "../../svgs/Vector.svg";
import Rubon from "../../components/Rubon/Rubon";

const News = () => {
  var container;
  var arrow;
  var x = 0;
  useEffect(()=> {
    container= document.getElementsByClassName("container-elements");
  arrow= document.getElementsByClassName("arrow");

    arrow[0].addEventListener("click", ()=> {
        if(x<200){
        x+=50;}
        console.log(x,"waaa")
        container[0].style.transform=`translateX(-${x}vw)`
             })
}, []) 
  return (
    <div className="wrapperNews">
      <img className="arrow" src={Vector} alt="" />
      <div className="NewsContainer">
        <Rubon
          text="What do we do ? .What do we do ? .What do we do ? .What do we do ? .What do we do ? .What do we do ? .What do we do ? .What do we do ? .What do we do ? .What do we do ? .What do we do ? . "
          deg={0}
          num={6}
        ></Rubon>
        <div className="container-elements">
              <Element
            num={2}
            title="Visits"
            text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit atque eligendi at delectus quod hic illo molestias nulla dolore adipisci? Incidunt beatae possimus quibusdam reiciendis quis optio ipsam dolores deleniti? "
          ></Element>
           <Element
            num={1}
            title="Workshops"
            text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit atque eligendi at delectus quod hic illo molestias nulla dolore adipisci? Incidunt beatae possimus quibusdam reiciendis quis optio ipsam dolores deleniti? "
          ></Element>
               <Element
            num={2}
            title="Visits"
            text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit atque eligendi at delectus quod hic illo molestias nulla dolore adipisci? Incidunt beatae possimus quibusdam reiciendis quis optio ipsam dolores deleniti? "
          ></Element>
     
        </div>
      </div>
    </div>
  );
};

export default News;
