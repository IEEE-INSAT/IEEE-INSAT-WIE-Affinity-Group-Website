import React, { useEffect } from 'react'
import './Img.scss'
const Img = ({pic,num, top , right, left}) => {
    useEffect(()=> {
        var element= document.querySelectorAll(`.element${num}`);
        element[0].style.setProperty("--top",top+"vw");
        element[0].style.setProperty("--right",right+"vw");
        element[0].style.setProperty("--left",left+"vw");

    }, [])
    return (
        <>
            <img src={pic} className= {`element-activities element${num} element-img`}/>
            
        </>
    )
}

export default Img
