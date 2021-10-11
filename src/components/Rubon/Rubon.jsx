import React, { useEffect } from 'react'
import './Rubon.scss'
const Rubon = ({text, deg,num}) => {

    useEffect(()=> {
        var x ="";
        var degs = [];
     const rubon = document.querySelector(`.rubon${num}`);
     const rubons = document.getElementsByClassName(`rubon`);

     for (let i=1 ; i<rubons.length;i++)
     {
       x=  rubons[i].style.transform
       degs.push(String(x));
};
console.log(degs[0])

     window.addEventListener("scroll", ()=>{
// console.log(rubons[1].getBoundingClientRect().y)

         if(rubons[1].getBoundingClientRect().y<150){
             for (let i=1 ; i<rubons.length;i++)
            {if 
                (i%2 ===0){
                rubons[i].style.transform=`translate(-200px) ${degs[i-1]} `;
            }
        else {
            rubons[i].style.transform=`translate(200px) ${degs[i-1]} `;

        }
        };
         }
     })

rubon.style.transform =`rotate(${deg}deg)`;
    },[])
    return (
            <div className={`rubon${num} rubon`}>          <h1>{text}</h1>
            </div>
  
       
    )
}

export default Rubon
