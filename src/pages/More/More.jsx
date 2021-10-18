import React, { useEffect } from 'react'
import './More.scss'
import Rubon from '../../components/Rubon/Rubon'
import Slider from '../../components/slider/Slider'
const More = () => {
    useEffect(()=> {
        const container = document.getElementsByClassName("more-container");
        const banner = document.getElementsByClassName("banner");
    
        
        const rectangle =document.getElementsByClassName("rectangle");
        var r = 2;
        var t = 0;
      var  lastscroll=0; 

        window.addEventListener("scroll", ()=> {
            console.log(container[0].getBoundingClientRect().bottom)
           

            if(container[0].getBoundingClientRect().bottom<1500){ 
                if (container[0].getBoundingClientRect().bottom<lastscroll){
                r+=0.25;
                t+=20;
                rectangle[0].style.transform=`rotate(-${r}deg)`;
                container[0].style.transform=`translateY(-${t}px)`;
    
                    }    else {

                        r-=0.3;
                        t-=20;
                        rectangle[0].style.transform=`rotate(-${r}deg)`;
                        container[0].style.transform=`translateY(-${t}px)`;
            }
            lastscroll=container[0].getBoundingClientRect().bottom;
        }
      
        },[])

    })
   
    return (
        
       
<div className="relative">
    <div className="inside"></div>
            <div className="more-container">
              <Slider></Slider>
             <div className="rectangle"></div>
            </div>
</div>

    )
}

export default More
