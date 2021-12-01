import React, { useEffect, useState } from "react";
import Element from "./newsElement/Element";
import "./News.scss";
import Vector from "../../svgs/Vector.svg";
import Group from "../../svgs/Group.svg";
import Latest from "./Carousel/Latest";
import Rubon from "../../components/Rubon/Rubon";

const News = () => {
  const [current, setcurrent] = useState(true)
  var container;
  var arrow;
  var x = 0;
  useEffect(()=> {
    container= document.getElementsByClassName("container-elements");
  arrow= document.getElementsByClassName("arrow");
  var arrowLeft= document.getElementsByClassName("arrowLeft");


    arrow[0].addEventListener("click", ()=> {
        if(x<150){
        x+=50;}
        container[0].style.transform=`translateX(-${x}vw)`
             })
             
    arrowLeft[0].addEventListener("click", ()=> {
        if(x>0){
        x-=50;}
        container[0].style.transform=`translateX(-${x}vw)`
             })
}, []) 
  return (
    <div className="wrapperNews">
      <img className="arrow" src={Vector} alt="" />
      <img className="arrowLeft" src={Group} alt="" />

      <div className="NewsContainer">
        <Rubon
          text="What do we do ? .What do we do ? .What do we do ? .What do we do ? .What do we do ? .What do we do ? .What do we do ? .What do we do ? .What do we do ? .What do we do ? .What do we do ? . "
          deg={0}
          num={6}
        ></Rubon>
        <div className="container-elements">
              <Element
            num={2}
            current={current}

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
        <div className="carousel">

          <Latest></Latest>
        </div>
      </div>
    </div>
  );
};

export default News;
