import React, { useEffect ,useState} from "react";
import "./SlidesCarousel.scss";
const SlidesCarousel = ({ status, pic, num ,text, name , changeName}) => {
var final;
  function getstatus() {
    
    if (status == "show") {
      changeName(name)
        return `show `;
    }
    if (status == "hide") {
       
      return (` hide`);
    }
    if (status == "small") {

      return `small `;
    }
  }

  final = getstatus();
  return <> <img className={`${final}  img${num} elementAct ` } src={pic} alt="" />
  <div className={`textAct ${status=="show" ? "showtext" : "hidetext"}`}> <div>{text}</div> </div>
</>};

export default SlidesCarousel;
