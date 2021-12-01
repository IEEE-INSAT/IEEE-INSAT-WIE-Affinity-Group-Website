import React, { useEffect } from "react";
import "./ImagePhone.scss";
const ImgPhone = ({ pic, num, top, right, state ,left }) => {
  useEffect(() => {
    var element = document.querySelectorAll(`.elementP${num}`);
    if(right) {

    }
    element[0].style.setProperty("--top", top + "%");
    element[0].style.setProperty("--topHide", top + 20 + "%");
    element[0].style.setProperty("--left", left + "%");

    element[0].style.setProperty("--right", right + "%");
  }, []);
  return (
    <>
      <img
    
        src={pic}
        className={`elementP-activities elementP${num} elementP-img `}
      />
    </>
  );
};
export default ImgPhone;
