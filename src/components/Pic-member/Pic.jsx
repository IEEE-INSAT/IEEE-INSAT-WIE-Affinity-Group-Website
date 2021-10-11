import React, { useEffect, useState } from 'react'
import img1 from '../../teampics/pic1.jpg' 
import './Pic.scss'
const Pic = ({pic, keys,num}) => {   
  const [movee, setMovee] = useState(false)
useEffect(()=> {
    const after = document.querySelector(`.${keys}`);
    const after1 = document.querySelector(`.pic${keys}`);

  const highlight = document.getElementById(`${num}name`)


    window.addEventListener("wheel", (event)=> {
        if (after.getBoundingClientRect().left<=1200 ){
          setMovee(true)
highlight.style.backgroundColor="#64113f12"

          
        }
        else
        {
            setMovee(false);
            highlight.style.backgroundColor="#ffffff"

        }})
},[])



            
    


    return (
        
             
                  <div className={`member-pic pic${keys}`}>
         <img src={pic} className="team-pic" alt="" />
         <div className= {movee? `move after ${keys}` : ` after ${keys}`}>
         </div>
         
         </div>
   
     
    )
}

export default Pic
