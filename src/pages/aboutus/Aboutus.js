import React from "react";
import "./Aboutus.css";
import "./aboutus.scss";
import Footer from "../Footer/Footer";
import Intro from "../first/Intro";
import News from "../News/News";
import More from "../More/More";
import Showactivities from "../main-activities/Showactivities";
const Aboutus = () => {
  function PhoneOrPc(params) {
    if (window.innerWidth > 800) {
      return (<> <Showactivities></Showactivities>
        <News></News>
        <More></More>
      </>)
    }
    else {
      return (<>
        <News></News>
        <More></More>
      </>)
    }
  }


  return (
    <>
      <div className="transform">

        <Intro></Intro>
        {/* <Latest></Latest> */}

        {PhoneOrPc()}
        <Footer></Footer>
        {/* <Facts></Facts> */}
        {/* <Gallery></Gallery> */}
      </div>
    </>
  );
};

export default Aboutus;
