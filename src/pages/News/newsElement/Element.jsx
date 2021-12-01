import React from "react";
import "./Element.scss";
import svg1 from "../../../svgs/Workshop.svg";
import svg2 from "../../../svgs/destination.svg";

const Element = ({ num, title, text, current }) => {
  function svgs() {
    if (num == "1") {
      return svg1;
    } else if (num == "2") return svg2;
    else return 2;
  }

  return (
    <div className={`ElementContainer elementcontainer${num} ${current ? "current" : ""}`}>
      <div className="containerSVG">
        <h2>{title}</h2>
        <div className="containerText">
        <p>{text}</p>
      </div></div>
      <img className={`svg${num}`} src={svgs()} alt="" />
    </div>
  );
};

export default Element;
