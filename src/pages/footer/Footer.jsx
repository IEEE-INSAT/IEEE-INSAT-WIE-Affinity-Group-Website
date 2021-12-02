import React, { useState } from 'react'
import "./Footer.scss"
import svgF from "../../svgs/facebook.svg"
import svgI from "../../svgs/instagram.svg"
import svgL from "../../svgs/Linkedinn.svg"
import Rubon from '../../components/Rubon/Rubon'

import svg from "../../svgs/footer.svg"
const Footer = () => {
    const [current, setcurrent] = useState("Social Media")
    
    return (
        <div className="footer">
          <div className="rubonFooter">  <Rubon text=" Thank you for stopping BY ! Thank you for stopping BY ! Thank you for stopping BY ! Thank you for stopping BY !Thank you for stopping BY ! Thank you for stopping BY !Thank you for stopping BY ! Thank you for stopping BY ! Thank you for stopping BY !Thank you for stopping BY !Thank you for stopping BY !Thank you for stopping BY !Thank you for stopping BY !" 
deg ={0} num ={4}></Rubon></div>
            <div className="containerFooter">
                 <img className="svg"src={svg} alt="" />
                  <div className="contact">
                     <h4>Visit our <span>{current}</span> </h4>
                     <ul>
                         <li> <img src={svgF} alt="" /></li>
                         <li> <img src={svgI} alt="" /></li>
                         <li> <img src={svgL} alt="" /></li>
                     </ul>
                 </div>  
                 <div className="usefulLinks">
                     <h4>Useful Links</h4>
                     <ul className="contactList">
                         <li>Home</li>
                         <li>Activities</li>
                         <li>News</li>
                         <li>Team</li>
                     </ul>
                 </div>
              
            </div>
           

        </div>
    )
}

export default Footer
