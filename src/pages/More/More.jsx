import React, { useEffect } from 'react'
import './More.scss'
import Rubon from '../../components/Rubon/Rubon'
const More = () => {

    useEffect(()=> {
            const wrapper = document.getElementsByClassName("rubon-wrapper");
    window.addEventListener("scroll",()=> {
        if (wrapper[0].getBoundingClientRect().y<500){
            wrapper[0].style.transform="translateY(-100px)"
            console.log("true")
        }
    })
    })

    return (
        <div className="rubon-wrapper">

        <div className="container-rubon">
            <Rubon text="Want to know more about us ?" deg ={3} num={1}></Rubon>
            <Rubon text="Here are some more facts about us" deg={-5} num={2}></Rubon>
            <Rubon text="Women In Engineering Women In Engineering Women In Engineering" deg={0} num={3}></Rubon>
            </div>
        </div>
    )
}

export default More
