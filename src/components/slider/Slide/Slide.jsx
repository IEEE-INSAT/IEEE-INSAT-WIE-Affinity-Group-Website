import React, { useEffect } from 'react'
import './Slide.scss'
import img1 from '../../../teampics/pic1.jpg'

const Slide = () => {
    useEffect(()=> {
     const   slideImage = document.querySelectorAll(".slide img");
slideImage.forEach((e)=> {
e.addEventListener('dragstart', (e) => e.preventDefault())

})

    }, [])
    return (

        <div className="slide">
            <img src={img1} alt="" className="noselect"/>
        <div className="wrapper-card"></div>

            <div className="title noselect">
                <h1>Asma Hosni</h1> 
            </div>
            <div className="position noselect">
                <p>Chairwoman</p>
            </div>
            <div className="quote noselect">
             <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore sit qui ill</p>  
            </div>
        </div>
    )
}

export default Slide
