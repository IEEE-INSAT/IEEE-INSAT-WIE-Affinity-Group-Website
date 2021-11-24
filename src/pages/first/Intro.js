import React from 'react'
import HorizontalScroll from 'react-scroll-horizontal'
import Typewriter from "typewriter-effect";
import Rubon from '../../components/Rubon/Rubon';
import CardsAbout from './CardsAbout';
import "./Intro.scss"
const Intro = () => {
    return (
        <div className="container-big">
        <div className="firstcontainer">
        <div className="container">
               <div className="titles">

                   <h1>  Step Into the World of  <span><Typewriter
            options={{
                strings: [
                  "Women In Engineering"
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 30
              }}>

            </Typewriter></span></h1>

               </div>
               
                <div className="text"> 
               <p>Welcome to the website of the IEEE Women In Engineering (WIE), INSAT Affinity Group!</p>
                  <p>IEEE Women in Engineering (WIE) is the largest international professional organization dedicated to promoting women engineers and scientists 
             and inspiring girls around the world to follow their academic interests to a career in engineering.</p>
                 <p>The WIE affinity group helps boost the soft skills of students and future engineers by providing a variety of professional trainings, which allows them to test their
                 skills through yearly competitions and teaches them teamwork by integrating them in the IEEE family.
          (tanséch tbadalha)</p>

                     </div>
                    
            </div>

  <div className="pic1"></div>
  </div>
<div className="big-container-activities">

  <div className="rubons">

<Rubon text=" Welcome to our Wie Page. Welcome to our Wie Page. Welcome to our Wie Page. Welcome to our Wie Page Welcome to our Wie Page Welcome to our Wie Page" 
deg ={0} num ={4}></Rubon>
</div></div>
 
<CardsAbout></CardsAbout>
</div>
    )
}

export default Intro
