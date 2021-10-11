import React from 'react'
import './More.scss'
import Rubon from '../../components/Rubon/Rubon'
const More = () => {
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
