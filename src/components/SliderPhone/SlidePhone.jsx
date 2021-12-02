import React, { useEffect } from 'react'
import "./SlidePhone.scss";

const SlidePhone = ({img,Name,position, num , state}) => {
  useEffect(()=> {
    const firstSlide = document.getElementsByClassName("slidePhone1")
    const lastSlide = document.getElementsByClassName("slidePhone8")
    const more = document.getElementsByClassName("more-container")
    // var height =lastSlide[0].getBoundingClientRect().bottom - firstSlide[0].getBoundingClientRect().y

  }, [])
    return (
        <div className="slideAndText">
        <div 
     
        className={`slideePhone slidePhone${num}`}>
          <img src={img} alt="" className="noselect image" />
    
          </div>
        <div className={`container-info container-info${num} ${state? `container-info${num}-showPhone`: ""}`}>
        <div className="wrapper-info">
          <div className="wrapper-name">
             <h1>{Name}</h1>
          </div>
           <div className="wrapper-discription">
             <h5>{position}</h5>
           </div>
            
        </div>
      
    
       
        </div>
        </div>
    )
}

export default SlidePhone
