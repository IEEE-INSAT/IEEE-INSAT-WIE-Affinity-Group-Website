import React, { useEffect, useState } from "react";
import "./Activities.scss";
import img1 from "../../pics/1.jpg";
import img2 from "../../pics/2.jpg";
import img3 from "../../pics/31.jpg";
import img4 from "../../pics/4.jpg";
import img5 from "../../pics/41.jpg";
import img6 from "../../pics/3.jpg";
import img7 from "../../pics/11.jpg";
import img8 from "../../pics/5.png";
import svg from "../../images/girl.svg";

const Activities = () => {
  useEffect(() => {
    const images = document.getElementsByClassName("act-img");
    const texts = document.getElementsByClassName("textt");
    const filters = document.getElementsByClassName("filter");
    const navbar = document.getElementsByClassName("nav-transform");
    const navbar1 = document.getElementsByClassName("navbar1");
    const body = document.querySelector("body");
    const shortcuts = document.getElementsByClassName("shortcut");
    const titles = document.getElementsByClassName("title");
    const overlay = document.getElementsByClassName("overlay1");
    const container = document.getElementsByClassName("container-cylinder");
    const box = document.getElementsByClassName("box");
    const cylinder = document.getElementsByClassName("cylinder");
    const activities = document.getElementsByClassName("activities-container");

    overlay[0].style.transform = "translateY(0)";
    navbar[0].style.transform = `translateY(0)`;
    body.style.overflow = "hidden";
    var pos = -1;
    var pos1 = 0;
    function changeSmaller(position) {
      if (position == images.length) {
        position = 0;
      }
      images[position].style.opacity = "1";

      images[position].classList.remove("goback");
      images[position].classList.add("showsmall");
      filters[position].classList.add("showsmall");
      filters[position].classList.remove("goback");
    }
    function changeBigger() {
      moveout(pos);
      pos++;
      if (pos == images.length) {
        pos = 0;
      }
      images[pos].classList.add("show");
      filters[pos].classList.add("show");
      filters[pos].classList.remove("showsmall");

      images[pos].classList.remove("showsmall");
      changeSmaller(pos + 1);
      texts[pos].classList.add("show-text");
      shortcuts[pos].classList.add("highlight");
      titles[pos].classList.add("show-title");
    }
    function moveout(position) {
      if (pos >= 0) {
        images[position].classList.add("moveout");
        images[position].classList.remove("show");
        filters[position].classList.add("moveout");
        filters[position].classList.remove("show");

        texts[pos].classList.remove("show-text");
        shortcuts[pos].classList.remove("highlight");
        titles[pos].classList.remove("show-title");

        images[position].style.opacity = "0";
        setTimeout(() => {
          images[position].classList.remove("moveout");
        }, 1000);
      }
    }

    // window.addEventListener("wheel", ()=> {
    //     changeBigger()
    // })
    // overlay[0].addEventListener("click", ()=> {
    //     console.log('waaaaaa')
    //     container[0].classList.add("container-cylinder-hide");
    //     box[0].classList.add("box-hide");
    //     cylinder[0].classList.add("cylinder-hide");
    //     overlay[0].style.transform="translateY(-120vw)"
    //     activities[0].classList.add("activities-container-show")
    // })

    for (let index = 0; index < shortcuts.length; index++) {
      shortcuts[index].addEventListener("click", () => {
        while (index != pos) {
          changeBigger();
        }
      });
    }
    changeBigger();
  }, []);

  return (
    <>
      <div className="activities-container">
        <div className="container">
          <div className="img-container">
            <div className="">
              <img className="act-img act-img1" src={img1} alt="" />
              <div className="filter"></div>
            </div>
            <h1 className="title title1">Summer school</h1>

            <img className="act-img act-img2" src={img2} alt="" />
            <div className="filter"></div>

            <h1 className="title title2">IEEE Day</h1>

            <img className="act-img act-img3" src={img3} alt="" />
            <div className="filter"></div>

            <h1 className="title title3">Star Program</h1>

            <img className="act-img act-img4" src={img4} alt="" />
            <div className="filter"></div>

            <h1 className="title title4">title event4</h1>

            <img className="act-img act-img5" src={img5} alt="" />
            <div className="filter"></div>

            <h1 className="title title5">title event5</h1>
          </div>
          <div className="textt text1">
            <h3>Summer School Workshops !</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo
              iusto et necessitatibus architecto aut ?
            </p>
          </div>
          <div className="textt text2">
            <h3>IEEE Day Event</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo
              iusto et necessitatibus architecto aut ?
            </p>
          </div>
          <div className="textt text3">
            <h3>WIE Star Program</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo
              iusto et necessitatibus architecto aut ?
            </p>
          </div>
          <div className="textt text4">
            <h3>She Solves </h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo
              iusto et necessitatibus architecto aut ?
            </p>
          </div>
          <div className="textt text5">
            <h3>She Solves !</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo
              iusto et necessitatibus architecto aut ?
            </p>
          </div>

          <div className="shortcuts">
            <h3 className="shortcut shortcut1">title 1</h3>
            <h3 className="shortcut shortcut2">title 2</h3>
            <h3 className="shortcut shortcut3">title 3</h3>
            <h3 className="shortcut shortcut4">title 4</h3>
            <h3 className="shortcut shortcut5">title 4</h3>
          </div>
          <div className="line1"></div>
        </div>
      </div>

      <div className="container-cylinder">
        <h1>
          {" "}
          <div>
            Check out our rich <span>program</span> filled with amazing{" "}
            <span>activities</span> ...
          </div>{" "}
        </h1>
        {/* <svg classname="svg-girl" width="188" height="393" viewBox="0 0 188 393" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="undraw_Gaming_re_cma2 1" clip-path="url(#clip0)">
<g id="girl">
<path id="Vector" d="M139.885 163L90.8848 165L84.8848 132L126.885 119L139.885 163Z" fill="#FFB6B6"/>
<g id="arm1">
<path id="vector" d="M121.869 82.124L110.94 70.9957L124.341 50.5057L147.277 12.3269C146.527 10.6821 146.295 8.84864 146.61 7.06893C146.926 5.28923 147.774 3.64719 149.043 2.36001C150.312 1.07283 151.941 0.201185 153.716 -0.139624C155.491 -0.480433 157.328 -0.274342 158.983 0.45138C160.639 1.1771 162.035 2.38827 162.987 3.92465C163.939 5.46102 164.402 7.25021 164.315 9.05554C164.228 10.8609 163.595 12.5972 162.499 14.035C161.404 15.4727 159.898 16.5441 158.181 17.1074L139.249 57.8666L121.869 82.124Z" fill="#FFB6B6"/>
<path id="Vector_2" d="M109.763 107.529C108.479 109.516 106.651 111.092 104.496 112.068C102.341 113.043 99.9508 113.378 97.6107 113.031C95.3834 112.768 93.2814 111.861 91.5626 110.42C89.8439 108.979 88.5833 107.068 87.9356 104.921C87.4585 103.397 87.3195 101.787 87.5285 100.204C87.7374 98.6209 88.2891 97.1024 89.1452 95.7544C96.4565 83.4292 109.941 67.1521 110.076 66.9895L110.291 66.7307L133.034 71.6581L109.763 107.529Z" fill="#979AE2"/>
</g>
<path id="Vector_3" d="M128.206 380.291L141.795 380.29L148.259 327.875L128.203 327.876L128.206 380.291Z" fill="#FFB6B6"/>
<path id="Vector_4" d="M124.739 375.854L151.501 375.853H151.502C156.025 375.853 160.363 377.65 163.561 380.849C166.759 384.047 168.556 388.385 168.557 392.908V393.462L124.74 393.464L124.739 375.854Z" fill="#2F2E41"/>
<path id="Vector_5" d="M22.3958 374.409L35.8318 376.439L50.0598 325.58L32.4458 322.582L22.3958 374.409Z" fill="#FFB6B6"/>
<path id="Vector_6" d="M19.6316 369.503L46.0929 373.503L46.094 373.503C50.5662 374.18 54.5866 376.605 57.2709 380.245C59.9552 383.886 61.0835 388.443 60.4077 392.916L60.3248 393.464L17 386.915L19.6316 369.503Z" fill="#2F2E41"/>
<path id="Vector_7" d="M88.8845 155L135.885 147L150.427 176.976L150.981 372.613L125.186 372.452L114.403 214.108L45.6807 360.421L17.9701 357.095L78.3793 200.253C78.3793 200.253 75.0541 172.542 85.5841 158.687L88.8845 155Z" fill="#2F2E41"/>
<path id="Vector_8" d="M71.4362 95.9411C70.7179 93.7833 70.6416 91.4633 71.2165 89.2629C71.7915 87.0626 72.993 85.0765 74.6752 83.546L81.3547 77.4745L100.186 74.3019L111.96 72.1619L130.885 127L84.9214 148.117C80.8877 147.246 79.2764 145.04 81.6235 140.652L71.4362 95.9411Z" fill="#979AE2"/>
<g id="arm2">
<path id="Vector_9" d="M113.619 114.445L126.767 106.054L144.042 123.403L176.651 153.74C178.415 153.347 180.257 153.499 181.933 154.176C183.609 154.853 185.04 156.022 186.037 157.53C187.034 159.037 187.549 160.812 187.516 162.619C187.482 164.426 186.9 166.181 185.848 167.65C184.796 169.119 183.322 170.235 181.622 170.848C179.922 171.462 178.075 171.545 176.327 171.086C174.579 170.628 173.011 169.649 171.831 168.28C170.651 166.911 169.914 165.216 169.718 163.42L133.757 136.466L113.619 114.445Z" fill="#FFB6B6"/>
<path id="Vector_10" d="M91.2676 97.3438C89.5889 95.6774 88.4256 93.5627 87.9168 91.2527C87.408 88.9427 87.5752 86.535 88.3984 84.3174C89.117 82.1931 90.4399 80.3247 92.2048 78.9412C93.9698 77.5578 96.1002 76.7196 98.3347 76.5293C99.9243 76.3778 101.528 76.5748 103.034 77.1066C104.539 77.6385 105.911 78.4924 107.053 79.6088C117.599 89.3113 130.734 105.872 130.866 106.037L131.074 106.301L121.549 127.533L91.2676 97.3438Z" fill="#979AE2"/>
</g>
<path id="Vector_11" d="M91.9214 67.6302C103.338 67.6302 112.592 58.3755 112.592 46.9593C112.592 35.5431 103.338 26.2884 91.9214 26.2884C80.5052 26.2884 71.2505 35.5431 71.2505 46.9593C71.2505 58.3755 80.5052 67.6302 91.9214 67.6302Z" fill="#FFB6B6"/>
<path id="Vector_12" d="M75.186 76.4075C71.9805 76.4069 68.7779 76.2116 65.5961 75.8229L65.1598 75.7697L61.8303 57.6935C60.4181 50.0307 61.9926 42.1181 66.2305 35.5796C70.4684 29.041 77.0484 24.3727 84.6198 22.5326C85.125 22.4046 85.6557 22.4185 86.1536 22.5726C86.6515 22.7268 87.0972 23.0152 87.4417 23.4063L88.2358 23.1295C91.2761 22.0692 94.4954 21.6183 97.71 21.8023C100.925 21.9863 104.072 22.8016 106.971 24.2018C109.87 25.602 112.466 27.5595 114.609 29.9627C116.752 32.3659 118.4 35.1677 119.46 38.208L119.657 38.7727L114.358 40.6205C112.707 41.1964 111.205 42.133 109.961 43.3623C108.717 44.5916 107.763 46.0827 107.168 47.727C106.573 49.3714 106.352 51.1277 106.521 52.8682C106.69 54.6087 107.245 56.2896 108.146 57.7887L113.564 66.8087L112.987 67.0977C101.293 73.1272 88.3427 76.3166 75.186 76.4075V76.4075Z" fill="#2F2E41"/>
</g>
</g>
<defs>
<clipPath id="clip0">
<rect width="188" height="393" fill="white"/>
</clipPath>
</defs>
</svg> */}
        <div className="cylinder">
          <div className="box">
            <span className="span1">
              <img src={img1} />
            </span>
            <span className="span2">
              <img src={img2} />
            </span>
            <span className="span3">
              <img src={img3} />
            </span>
            <span className="span4">
              <img src={img4} />
            </span>
            <span className="span5">
              <img src={img5} />
            </span>
            <span className="span6">
              <img src={img6} />
            </span>
            <span className="span7">
              <img src={img7} />
            </span>
            <span className="span8">
              <img src={img8} />
            </span>
          </div>
        </div>{" "}
        <h3>click anywhere to continue</h3>
      </div>
      <div className="overlay1"></div>
    </>
  );
};

export default Activities;
