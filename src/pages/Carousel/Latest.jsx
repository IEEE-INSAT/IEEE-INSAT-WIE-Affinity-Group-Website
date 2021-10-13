import React, { useEffect, useState } from 'react'
import './Latest.scss'
import Slider from '../../components/slider/Slider'
const Latest = () => {
    const [contenu, setContenu]=useState("nothing");
    var change=function(x){
        setContenu(x)
    }
    useEffect(()=> {
        const last= document.querySelector(".container-latest");
        const scroll= document.querySelector(".scroll-latest");

        const transform= document.querySelector(".transform");
        const h1 = document.querySelector(".container-latest h1");

        window.addEventListener("scroll",()=> {
            // console.log(last.getBoundingClientRect())
            if ( last.getBoundingClientRect().y <200 &&last.getBoundingClientRect().y >-400 ) {
                transform.style.backgroundColor='#FCFFFD'
             scroll.style.transform="translate(-200px)"
                // h1.style.setProperty( '--x', 0 + 'px' );
                // h1.style.setProperty( '--y', 0 + 'px' );

            }
            else{
            transform.style.backgroundColor='white'
            scroll.style.transform="translate(0px)"

            // h1.style.setProperty( '--x', 100 + '%' );
            // h1.style.setProperty( '--y', -100 + '%' );

        
        }})

    }, [])
    return (
        <>
            <div className="container-latest">
                <div className="scroll-latest-container">
                <div className="scroll-latest">
                Latest Activities

            </div>
           
</div> 
        <div className="scroll-latest-container1">
<div className="scroll-latest1">
                {contenu}

</div> </div>

<Slider change={change}></Slider>
            </div>
        </>
    )
}

export default Latest
