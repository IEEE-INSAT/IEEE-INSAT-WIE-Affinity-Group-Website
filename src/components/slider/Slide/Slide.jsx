import React, { useEffect } from 'react'
import './Slide.scss'
import img1 from '../../../teampics/pic1.jpg'

const Slide = () => {
    useEffect(()=> {


    }, [])
    return (
        <div className="slide">
            <img src={img1} alt="" />
            <div className="title">
                <h1>Asma Hosni</h1> 
            </div>
            <div className="position">
                <p>Chairwoman</p>
            </div>
            <div className="quote">
             <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore sit qui ill</p>  
            </div>
        </div>
    )
}

export default Slide
