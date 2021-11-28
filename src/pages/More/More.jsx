import React, { useEffect,useState } from "react";
import "./More.scss";
import Rubon from "../../components/Rubon/Rubon";
import Slider from "../../components/slider/Slider";
import Choice from "../../components/choice/Choice";
const More = () => {
  const [up, setup] = useState(false);
  const [Phone,setPhone] = useState(false);

 
  useEffect(() => {
    if (window.innerWidth<700){
    setPhone(true)
  } function inViewPort(el) {
      var rect = el.getBoundingClientRect();

      return (
        rect.top >= 100 &&
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
    const container = document.getElementsByClassName("more-container");
    const banner = document.getElementsByClassName("banner");
    const slider = document.getElementsByClassName("slider-container");
    const link = document.getElementsByClassName("element6");
    const list = document.getElementsByClassName("element-activities");

    const rectangle = document.getElementsByClassName("rubonHolder");
    var t = 0;
    var lastscroll = 0;

    window.addEventListener(
      "scroll",
      () => {
       
          if (list[6].getBoundingClientRect().y < 100) {
          setup(true)
            } else {
              setup(false)
            }

           
      },
      []
    );
  });

  return (
    <div className={`relative ${up? 'up' : ''}` }>
      <div className="inside"></div>
      <div className="more-container">
        <div className="rubonHolder">
          <Rubon
            text="Meet Our Lovely Team.Meet Our Lovely Team.Meet Our Lovely Team.Meet Our Lovely Team.Meet Our Lovely Team.Meet Our Lovely Team.Meet Our Lovely Team.Meet Our Lovely Team.Meet Our Lovely Team.Meet Our Lovely Team.Meet Our Lovely Team.Meet Our Lovely Team.Meet Our Lovely Team.Meet Our Lovely Team.Meet Our Lovely Team.Meet Our Lovely Team.Meet Our Lovely Team.Meet Our Lovely Team.Meet Our Lovely Team.Meet Our Lovely Team.Meet Our Lovely Team.Meet Our Lovely Team.Meet Our Lovely Team.Meet Our Lovely Team.Meet Our Lovely Team.Meet Our Lovely Team.Meet Our Lovely Team.Meet Our Lovely Team.Meet Our Lovely Team.Meet Our Lovely Team.Meet Our Lovely Team.Meet Our Lovely Team.Meet Our Lovely Team.Meet Our Lovely Team.Meet Our Lovely Team.Meet Our Lovely Team.Meet Our Lovely Team.Meet Our Lovely Team.Meet Our Lovely Team."
            deg={10}
            color="pink"
            num={7}
          ></Rubon>
        </div>
        <div className="rectangle"></div>
        <div className="wrapper-containere">
          
         <Choice phone={Phone}></Choice>
        </div>
      </div>
    </div>
  );
};

export default More;
