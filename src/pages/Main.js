import React from 'react'
import './main.css'
import video from './wie.gif'
const Main = () => {

            return (
        <>
        <div className="container-main">
         
        <img  id="myVideo" className="void" src={video} alt="" />

                <div className="overlay">
                <div className="titles">
            <h1 className="maintitle">IEEE : The <span>F</span>uture Is <span>F</span>emale</h1>
            <h2 className="secondtitle">Insat student branch</h2>
            </div></div>
            </div>  </>)
}

export default Main
