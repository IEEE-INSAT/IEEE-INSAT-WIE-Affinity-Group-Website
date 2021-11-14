import React, { useEffect } from 'react'
import './Rubon.scss'
const Rubon = ({text, deg,num, color}) => {

    useEffect(()=> {
        var lastscroll=0
        var lastscroll1=0;
        var res;
        var x =0;
        var done = true;
        var degs = [];
        var res =""
        
     const rubon = document.querySelector(`.rubon${num}`);
     const rubons = document.getElementsByClassName(`rubon`);

//      for (let i=1 ; i<rubons.length;i++)
//      {
//        x=  rubons[i].style.transform
//        degs.push(String(x));
// };
if (color=="pink"){
    rubon.classList.add("pink");
}
     window.addEventListener("scroll", ()=>{
        // text=res;
         if (rubons[0].getBoundingClientRect().bottom<700 && rubons[0].getBoundingClientRect().bottom>0){
        if (lastscroll > rubons[0].getBoundingClientRect().y ){ 

         x+=7;
     rubon.style.transform =`translate(${x}px)`
     if (num%2){
     rubon.style.transform =`translate(-${x}px)`

     }
    }
        else {
            x-=7;
     rubon.style.transform =`translate(${x}px)`
     if (num%2){
        rubon.style.transform =`translate(-${x}px)`
   
        }

        }}
        lastscroll =rubons[0].getBoundingClientRect().y;

        if (rubons[2].getBoundingClientRect().bottom<700 && rubons[2].getBoundingClientRect().bottom>0){
            if (lastscroll1 > rubons[2].getBoundingClientRect().y ){ 
    
             x+=7;
         rubon.style.transform =`translate(${x}px)`
         if (num%2){
         rubon.style.transform =`translate(-${x}px)`
    
         }
        }
            else {
                x-=7;
         rubon.style.transform =`translate(${x}px)`
         if (num%2){
            rubon.style.transform =`translate(-${x}px)`
       
            }
    
            }}
            lastscroll1 =rubons[2].getBoundingClientRect().y;
})

    },[])
    return (
            <div className={`rubon${num} rubon`}>          <h1>{text}</h1>
            </div>
  
       
    )
}

export default Rubon
