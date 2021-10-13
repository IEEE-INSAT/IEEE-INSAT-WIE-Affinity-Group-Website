import React, { useEffect } from 'react'
import './Showactivities.scss'
import pic1 from "../../pics/31.jpg"
import pic2 from "../../pics/41.jpg"
import pic3 from "../../pics/5.png"
import pic4 from "../../pics/2.jpg"
import pic5 from "../../pics/4.jpg"





const Showactivities = () => {
    useEffect(()=> {
        const list = document.getElementsByClassName("element-activities");
        const containerActivities = document.getElementsByClassName("container-activities");
        const rectangle = document.getElementsByClassName("rectangle");
        var r = 0
      var  lastscroll=0; var lastscroll1=0;
        var x = 60;
        var y=100;
        var t =0;
        var z=155;
        var a = 220;
        var b = 170;
        var done=true;
        window.addEventListener("scroll",()=> {
            if (rectangle[0].getBoundingClientRect().y>0){ 
                if (rectangle[0].getBoundingClientRect().y<lastscroll1){
                           r-=0.1;
                           t-=0.5;
                rectangle[0].style.transform=`rotate(${r}deg) translateY(${t}vh)`;
            }
            else {
                r+=0.2;
                t+=0.5;

                rectangle[0].style.transform=`rotate(${r}deg translateY(${t}vh)`

            }
            lastscroll1=rectangle[0].getBoundingClientRect().y;

        
        }

   if (done){
                    done=false   
                    if (containerActivities[0].getBoundingClientRect().y<0){
           
            if (containerActivities[0].getBoundingClientRect().y<lastscroll){
          
                
                   x-=2;
                   y-=2;
                   z-=2;
                   a-=3;
                   b-=3
            list[0].style.top=`${x}vw`;
            list[1].style.top=`${y}vw`;
            list[2].style.top=`${z}vw`;
            list[3].style.top=`${a}vw`;
            list[4].style.top=`${b}vw`;




            // if(x<-40)x=-40;
            // if(y<-20)y=-20;

            }
         else {
              x+=2;
              y+=2;
              a+=3;
              z+=2;
              b+=3

            list[0].style.top=`${x}vw`;
            list[1].style.top=`${y}vw`;
            // list[2].style.transform=`translateY(${z}vw)`;
            list[2].style.top=`${z}vw`;
            list[3].style.top=`${a}vw`;
            list[4].style.top=`${b}vw`;



            // if(x>80)x=80;
            // if(y>100)y=100;


         }
         lastscroll=containerActivities[0].getBoundingClientRect().y;
         } 
       
        } setTimeout(() => {
            done=true;
        }, 20);})
    },[])
return (
<div className="container-activities">
    <div className="wrapper-rectangle">
    <div className="rectangle"></div></div>
    <div className="activities-wrapper">
        <div className="title">
            <h1> <div> Dsicover the amazing world </div> <div>of WIE threw OUR amazing activities</div> </h1>
        </div>
        <div className="list">
            <img src={pic1} className="element-activities element1" />
            <img src={pic2} className="element-activities element2" />
            <img src={pic3} className="element-activities element3" />
            <img src={pic5} className="element-activities element4" />
            <img src={pic4} className="element-activities element5" />




        </div>
    </div>

</div>
)
}

export default Showactivities