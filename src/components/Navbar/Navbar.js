import React, { useEffect, useState } from "react";
import "./Navbar.css";
import "./Navbar.scss";
import Team from "../../pages/Team/Team";
import Home from "../../pages/Home/Home";
import Activities from "../../pages/activities/Activities";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Link} from 'react-scroll'

const Navbar = () => {
  const checkbox = document.getElementsByClassName("navcheck");
  const mobileNavbar = document.getElementsByClassName("mobile-navbar");
  const scroll = document.getElementsByClassName("transform");
  const navbar = document.getElementsByClassName("nav-transform");
  const pic = document.getElementsByClassName("pic1");
  const navbar1 = document.getElementsByClassName("navbar1");
  const navBarList = document.getElementsByClassName("navbar-list");
 const [active, setactive] = useState(false);
  useEffect(() => { if (window.innerWidth < 700) {
    mobileNavbar[0].appendChild(navBarList[0]);
  }
  if ( window.innerWidth > 700 && (mobileNavbar[0].firstChild != null)){
    navbar1[0].appendChild(navBarList[0]);
  }
    window.addEventListener("resize", () =>{
        if (window.innerWidth < 700) {
      mobileNavbar[0].appendChild(navBarList[0]);
    }
    if ( window.innerWidth > 700 && (mobileNavbar[0].firstChild != null)){
      navbar1[0].appendChild(navBarList[0]);
    }
    })
  

    // checkbox[0].addEventListener("click", () => {
    //   mobileNavbar[0].classList.toggle("active");
    // });
  }, []);

  window.addEventListener("scroll", function () {
    var value = 100 + this.window.scrollY;

    if (this.window.scrollY == 0) {
      navbar[0].style.transform = "translateY(-100px)";
      scroll[0].style.transform = `translateY(0px)`;
    } else {
      navbar[0].style.transform = `translateY(0)`;
      scroll[0].style.transform = `translateY(-200px)`;
    }
  });

  //   useEffect(()=>{
  //      var items= document.querySelectorAll(".ul")
  //   items.forEach((item)=> {
  //     item.onmousemove=function(e){
  //         const x = e.pageX - item.offsetLeft;
  //           const y = e.screenY - item.offsetTop;
  // item.style.setProperty( '--y', y + 'px' );
  //  item.style.setProperty( '--x', x + 'px' );
  //     }
  //   })
  //   }, [])

  return (
    <Router>
      <div className="navbar nav-transform"></div>

      <div className="navbar1">
        <div className={`mobile-navbar ${active? "active" : ""}`} onClick={()=> {
          setactive(false)
        }}> </div>

        <h1 className="logo">
          <Link to="home" smooth={true} duration={100} offset={-200}>W.i.e</Link>
        </h1>

        <ul className="ul navbar-list" onClick={()=> {
          setactive(false)}} >
           <li className="navbar-item li3" >
            <Link  onClick={()=> {setactive(false)}} to="rubon4" smooth={true} duration={200} >Who are Wie</Link>
          </li> 
             <Link  onClick={()=> {setactive(false)}} to="rubon5" smooth={true} duration={200} offset={-100} className="navbar-item li4">Activities</Link>
          <Link  onClick={()=> {setactive(false)}} to="rubon1" smooth={true} duration={200} offset={-80} className="navbar-item li1">News</Link>
          
          <li className="navbar-item li2">
            {" "}
            <Link  onClick={()=> {setactive(false)}} to="rubon7" smooth={true} duration={200} offset={-100}>Our Team</Link>
          </li>
       
        
        </ul>

        <div class={`frame ${active? "active" : ""}`} onClick={()=> {setactive(!active)}}>
          <div class="center">
            <input className="navcheck" type="checkbox" />
            <div class="middle"></div>
          </div>
        </div>
      </div>

      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/activities">
          <Activities />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default Navbar;
