import React, { useEffect } from 'react'
import './Fall.scss'
import Image from '../Image/Image'
import img1 from '../../teampics/pic1.jpg'
import img2 from '../../teampics/pic2.jpg'
import img3 from '../../teampics/pic3.png'
import img4 from '../../teampics/pic5.png'
import img5 from '../../teampics/pic4.png'
import img6 from '../../teampics/pic6.jpg'
import img7 from '../../teampics/pic7.jpg'
const Fall = ({imgs}) => {
useEffect(()=> {
    const fall= document.querySelectorAll(".container-fall");
    const test =document.getElementsByClassName("testScroll");

var x =0;
var y =0;
var seen =false;
var lastscroll=0
var done=true;
window.addEventListener("scroll",()=> {
        if (fall[0].getBoundingClientRect().y<0 || seen==true){
            seen= true;
            if (done){
    console.log("x=",x, "y=",y)
                
            done=false;
        if (lastscroll > test[0].getBoundingClientRect().y ){ 
           x+=100
           y+=100

            for (let i=0;i<3;i++){
              if (i==0 || i==2){
                
                fall[i].style.transform=`translateY(${x}px)`;  }
                 else{
              
                 fall[i].style.transform=`translateY(-${x}px)`;
                     } }  
                    setTimeout(()=>{
                        done=true
                    },300)}
        else {

       y-=100;
       x-=100;
            for (let i=0;i<3;i++){
                 if (i==0 || i==2)
                    {
                     
                 fall[i].style.transform=`translateY(${y}px)`;
                    }
                 else{
                 fall[i].style.transform=`translateY(-${y}px)`;
                               }  }
                               setTimeout(()=>{
                                done=true
                            },300)
        }}
        lastscroll =test[0].getBoundingClientRect().y;
    
    }
    })
            
},[])
const listimgs=imgs.map((e)=><Image img={e}></Image>)

    return (
        <div className="container-fall">
  {listimgs}
     

        </div>
    )
}

export default Fall
