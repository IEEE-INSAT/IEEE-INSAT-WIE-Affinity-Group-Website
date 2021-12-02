import React from 'react'
import './main.css'
import './Main.scss'

import video from '../wie.gif' 

const Main = () => {

            return (
        <>
        <div className="container-main">
         
        <img  id="myVideo" className="void" src={video} alt="" />

                <div className="overlay">
                <div className="titles">
            <h1 className="maintitle">  IEEE : <span>W</span>omen In <span>E</span>ngineering</h1>
            <h2 className="secondtitle">Insat student branch</h2>
            </div></div>
            </div>    
            </>)
    

}

export default Main
