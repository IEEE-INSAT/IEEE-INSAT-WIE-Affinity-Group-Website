import React, { useEffect } from 'react'
import './Img.scss'
const Img = ({pic,num, top , right, left}) => {
    useEffect(()=> {
        var element= document.querySelectorAll(`.element${num}`);
        element[0].style.setProperty("--top",top+"%");
        element[0].style.setProperty("--right",right+"%");
  

    }, [])
    return (
        <>
            <img src={pic} className= {`element-activities element${num} element-img`}/>
            
        </>
    )
}

export default Img
