import React, { useEffect } from 'react'
import './Showactivities.scss'
import pic1 from "../../pics/31.jpg"
import pic2 from "../../pics/41.jpg"
import pic3 from "../../pics/5.png"
import pic4 from "../../pics/2.jpg"
import pic5 from "../../pics/4.jpg"
import Rubon from '../../components/Rubon/Rubon'
import svg1 from '../../svgs/1.svg'
import svg2 from '../../svgs/2.svg'
import svg3 from '../../svgs/3.svg'




const Showactivities = () => {
    useEffect(()=> {
        const list = document.getElementsByClassName("element-activities");
        const link = document.getElementsByClassName("element6");
        const svgs = document.getElementsByClassName("svg");
        const vid = document.getElementById("myVideo");

        const containerActivities = document.getElementsByClassName("container-activities");
        // const rectangle = document.getElementsByClassName("rectangle");
        var r = 0
      var  lastscroll=0; var lastscroll1=0;
      var  lastvalue=0; var currentvalue=0;
      var offset=0;

        var x = 60;
        var y=100;
        var t =0;
        var z=155;
        var a = 220;
        var b = 170;
        var done=true;
        var c =230;
        window.addEventListener("scroll",()=> {
            // if (rectangle[0].getBoundingClientRect().y<500){ 
            //     if (rectangle[0].getBoundingClientRect().y<lastscroll1){
            //                r-=0.1;
            //                t-=20;
            //     // rectangle[0].style.transform=`rotate(${r}deg) translateY(${t}px)`;
            //     // containerActivities[0].style.transform=`translateY(${t}px)`
            // // }
            // else {
            //     r+=0.2;
            //     t+=0.5;

            //     rectangle[0].style.transform=`rotate(${r}deg translateY(${t}vh)`

            // }
            // lastscroll1=rectangle[0].getBoundingClientRect().y;

        
        // }
if (containerActivities[0].getBoundingClientRect().top && done) {
    offset=document.documentElement.scrollTop -100;
    done=false;
}
  
                    if (containerActivities[0].getBoundingClientRect().y<0 && containerActivities[0].getBoundingClientRect().y>-1000){
           
          currentvalue = document.documentElement.scrollTop -offset ;
          console.log('hahahahah' ,list[4].getBoundingClientRect().y)
                
                   x+=(currentvalue-lastvalue)*2;
                   y+=(currentvalue-lastvalue)*4;
                   z+=(currentvalue-lastvalue)*3.5;
                   a+=(currentvalue-lastvalue)*4.5;
                   b+=(currentvalue-lastvalue)*4.5;
                  
            list[0].style.transform=`translateY(-${x}px)`;
            // svgs[0].style.top=`${x}px`;
            list[1].style.transform=`translateY(-${y}px)`;
            svgs[2].style.transform=`translateY(-${y+30}px)`;
            svgs[1].style.transform=`translateY(-${x+40}px)`;
            list[2].style.transform=`translateY(-${z}px)`;
            list[3].style.transform=`translateY(-${a}px)`;
            list[4].style.transform=`translateY(-${b}px)`;

        


            // if(x<-40)x=-40;
            // if(y<-20)y=-20;

            }
         
         if (list[4].getBoundingClientRect().y<100){
            link[0].style.transform='translate(0)';
         }
         else{
            link[0].style.transform='translateY(20vw)';

         }
         lastscroll=containerActivities[0].getBoundingClientRect().y;
         lastvalue=document.documentElement.scrollTop -offset;
         
       
      
        })},[])
return (
    <div className="big-container-activities">
    <div className="rubons">
<Rubon text=" Welcome to our Wie Page. Welcome to our Wie Page. Welcome to our Wie Page. Welcome to our Wie Page Welcome to our Wie Page Welcome to our Wie Page" deg ={0} num ={4}></Rubon>
<Rubon text="keep scrolling to discover wie. keep scrolling to discover wie. keep scrolling to discover wie keep scrolling to discover wie"deg ={0} num ={5}></Rubon>
    </div>
<div className="container-activities">
    <div className="activities-wrapper">
        <div className="title">
            <h1> <div> Dsicover the amazing world </div> <div>of WIE threw OUR amazing activities</div> </h1>
            <div className="link">
                <h2 className="element6"> get to know more ...</h2>

            </div>
        </div>
        <div className="list">
            <img src={pic1} className="element-activities element1" />
            <img src={pic2} className="element-activities element2" />
            <img src={pic3} className="element-activities element3" />
            <img src={pic5} className="element-activities element4" />
            <img src={pic4} className="element-activities element5" />
            <img className="svg svg1" src={svg1} alt="" />
            <img className="svg svg2" src={svg2} alt="" />
            <img className="svg svg3" src={svg3} alt="" />

        


        </div>
     
    </div>
  
</div>
</div>
)
}

export default Showactivities