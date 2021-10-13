import { forEach } from 'async'
import React, { useEffect } from 'react'
import './Aboutus.css'
import './aboutus.scss'
import Intro from '../first/Intro'
import HorizontalScroll from 'react-scroll-horizontal'
import  Gallery from '../scroll/Gallery'
import Footer from '../footer/Footer'
import Latest from '../Carousel/Latest'
import Facts from '../facts/Facts'
import More from '../More/More'
import Showactivities from '../main-activities/Showactivities'
const Aboutus = () => {





    const scroll =document.getElementsByClassName("transform");
const navbar =document.getElementsByClassName("nav-transform");
const pic =document.getElementsByClassName("pic1");
const navbar1=document.getElementsByClassName("navbar1");

    window.addEventListener('scroll', function() {

        var value =100+this.window.scrollY

        // scroll[0].style.transform=`translateY(-${value}px)`;
   
        if (this.window.scrollY==0){
            navbar[0].style.transform='translateY(-100px)';
        scroll[0].style.transform=`translateY(0px)`;
//  navbar1[0].style.transform='translateY(-100px)';
            }
        else{
            navbar[0].style.transform=`translateY(0)`;
        scroll[0].style.transform=`translateY(-200px)`;
//  navbar1[0].style.transform='translateY(-100px)';

        // setTimeout(()=> {
        //     navbar[0].style.transform='translateY(-100px)';
        //     navbar1[0].style.transform='translateY(-200px)';
        // },10000)

        }
      
    })
    

    return (
        <div>
      <div className="transform">
            <Intro></Intro>
            {/* <Latest></Latest> */}
            {/* <More></More> */}
            <Showactivities></Showactivities>
            {/* <Facts></Facts> */}
            {/* <Footer></Footer> */}
            {/* <Gallery></Gallery> */}


      </div>

            </div>     
       
   
    )
}

export default Aboutus
