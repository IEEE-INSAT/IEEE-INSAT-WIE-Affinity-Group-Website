import React, { useEffect, useState } from 'react'
import './Team.scss'
import Pic from '../../components/Pic-member/Pic'
import Name from '../../components/title/Name'
import img1 from '../../teampics/pic1.jpg'
import img2 from '../../teampics/pic2.jpg'
import img3 from '../../teampics/pic3.png'
import img4 from '../../teampics/pic5.png'
import img5 from '../../teampics/pic4.png'
import img6 from '../../teampics/pic6.jpg'
import img7 from '../../teampics/pic7.jpg'



const Team = () => {

useEffect(()=> { 

const body= document.querySelector("body")
const navbar =document.getElementsByClassName("nav-transform")
const div = document.querySelector("#team1")
var x=0
var y=0;
var transform = 0;
    body.style.overflow="hidden";
    navbar[0].style.transform=`translateY(0)`;
    window.addEventListener("wheel", (event)=> {
     

        if(event.deltaY<0 && div.getBoundingClientRect().left<0) {
       transform+=100;

        div.style.transform=`translate(${transform}px)`
            
        }
        else if (event.deltaY>0 && div.getBoundingClientRect().left<=0)  {
       transform-=100;

            div.style.transform=`translate(${transform}px)`
                
        }
        else {
            div.style.transform=`translate(0px)`

        }
     

    })
   
var textPath = document.querySelector('#text-path');

var textContainer = document.querySelector('#text-container');

var path = document.querySelector( textPath.getAttribute('href') );

var pathLength = path.getTotalLength();

function updateTextPathOffset(offset){
  textPath.setAttribute('startOffset', offset); 
}

updateTextPathOffset(100);
var run =0
function onScroll(){
  requestAnimationFrame(function(){
  run=run+150;
    updateTextPathOffset( run );
  });
}

window.addEventListener('wheel',onScroll);
   
}, [])

    return (
        <>
        <div className="container-team">
            <div className="container" id="team1" >
         <div className="text
         
         "> Meet our lovely team</div>
         <div 
         className="container-member1" >
           <Pic pic={img1} keys="after1"
           num={1}></Pic>
         </div>

         <div className="name-member1">
         <Name
         id="1name"
         name={"Asma Hosni"}
        position={"Chairwoman"}
        ></Name>
         </div>


         <div className="container-member2">
           <Pic num={2} 
           pic={img2} keys="after2"
            ></Pic>
         </div>

         <div className="name-member2">
         <Name
         id="2name"
         name={"Nawres Jouini"}
         position={"Vice-Chairwoman"}
         ></Name>
            </div>


            <div className="container-member3">
           <Pic num={3} pic={img3} keys="after3"

            ></Pic>
         </div>
         <div className="name-member3">

         <Name
         name={"Safa Ayed"}
         id="3name"
         position={"HR Manager"}
         ></Name>
            </div>

            <div className="container-member4">
           <Pic num={4} pic={img4} keys="after4"

            ></Pic>
         </div>
         <div className="name-member4">

         <Name
         id="4name"
         name={"Amani Bchir"}
         position={"Treasurer"}
         ></Name>
            </div>
         
            <div className="container-member5">
           <Pic num={5} pic={img2} keys="after5"

            ></Pic>
         </div>
         <div className="name-member5">

         <Name
         name={"Ilef Maalouch"}
         id="5name"
         position={"General Secretary"}
         ></Name>
            </div>
            <div className="container-member6">
           <Pic num={6} pic={img6} keys="after6"

            ></Pic>
         </div>
         <div className="name-member6">

         <Name
         id="6name"
         name={"Rania Bouwazara"}
         position={"Training Manager"}
         ></Name>
            </div>
            <div className="container-member7">
           <Pic num={7} pic={img7} keys="after7"

            ></Pic>
         </div>
         <div className="name-member7">

         <Name
         id="7name"
         name={"Ahmed Cherif"}
         position={"Media Manager"}
         ></Name>
            </div>
            <div className="container-member8">
           <Pic num={8} pic={img6} keys="after8"

            ></Pic>
         </div>
         <div className="name-member8">

         <Name
         name={"Boukadida Nadine"}
         position={"Webmaster"}
         id="8name"

         ></Name>
            </div>
            <svg  id="text-container" width="1281" height="342" viewBox="0 0 1281 342"  xmlns="http://www.w3.org/2000/svg">
<path id="text-curve"fill="none" d="M1 341.5C245.5 333.5 223 261.626 320 168C417 74.3739 615.45 44 687 119C862.333 302.787 960 303.5 1071 247.5C1235.29 164.616 1231.38 10.51 1280 1" />
<text y="40" fontSize="32" >
  
    <textPath  id="text-path" href="#text-curve" startOffset="100"> Women In Engineering</textPath></text>
</svg>



       <div className="highlight"></div>
            </div>
         
        </div>

</>    )
}

export default Team
