import React, { useEffect } from 'react'
import './Navbar.css'
import './Navbar.scss'
import Team from '../../pages/Team/Team'
import Home from '../../pages/Home/Home'
import Activities from '../../pages/activities/Activities'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Navbar = () => {





  const scroll =document.getElementsByClassName("transform");
  const navbar =document.getElementsByClassName("nav-transform");
  const pic =document.getElementsByClassName("pic1");
  const navbar1=document.getElementsByClassName("navbar1");
  
      window.addEventListener('scroll', function() {
  
          var value =100+this.window.scrollY
  
     
          if (this.window.scrollY==0){
              navbar[0].style.transform='translateY(-100px)';
          scroll[0].style.transform=`translateY(0px)`;
              }
          else{
              navbar[0].style.transform=`translateY(0)`;
          scroll[0].style.transform=`translateY(-200px)`;
  
       
  
          }
        
      })
      
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
          <h1 className="logo"><Link to="/home">W.i.e</Link></h1>
        
              <ul className="ul">
                  <li className="navbar-item li1">News</li>
                  <li className="navbar-item li2"> <Link to="/team">Our Team</Link></li>
                  <li className="navbar-item li3"><Link to="/activities">Activities</Link></li>
                  <li className="navbar-item li4">Events Timeline</li>

              </ul>

          </div>
          <Switch>
          <Route path="/team">
            <Team/>
          </Route>
          <Route path="/home">
            <Home/>
          </Route> 
           <Route path="/activities">
            <Activities/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        
          </Switch>

          </Router>
        
    )
}

export default Navbar
