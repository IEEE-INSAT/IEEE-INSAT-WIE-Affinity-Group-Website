import React, { useEffect, useState } from 'react'
import "./Footer.scss"
import svgF from "../../svgs/facebook.svg"
import svgI from "../../svgs/Instagram.svg"
import svgL from "../../svgs/Linkedinn.svg"
import wie from "../../pics/wie.png"
import Rubon from '../../components/Rubon/Rubon'

import svg from "../../svgs/footer.svg"
const Footer = () => {
    const [current, setcurrent] = useState("Social Media")
    const [phone, setphone] = useState(false)

useEffect(()=> {
    if (window.innerWidth<800) {
    setphone(true)
}
}, [])
   function changeF (){
        setcurrent("Facebook")
    }
    function changeI (){
        setcurrent("Insatgram")
    }
    function changeL (){
        setcurrent("Linkedin")
    }
    return (
        <div className="footer">
          
                

          <div className="rubonFooter">  <Rubon text=" Thank you for stopping BY ! Thank you for stopping BY ! Thank you for stopping BY ! Thank you for stopping BY !Thank you for stopping BY ! Thank you for stopping BY !Thank you for stopping BY ! Thank you for stopping BY ! Thank you for stopping BY !Thank you for stopping BY !Thank you for stopping BY !Thank you for stopping BY !Thank you for stopping BY !" 
deg ={0} num ={4}></Rubon></div>
            <div className="containerFooter"> <img className="svg"src={svg} alt="" />
                
                  <div className="contact">
                      <h2 className="titlesFooter">Updates</h2>
                     <h4>Visit us on our</h4>
                     <span>{current}</span>
                     <ul>
                         <li onMouseEnter={changeF}> <img src={svgF} alt="" /></li>
                         <li  onMouseEnter={changeI}> <img src={svgI} alt="" /></li>
                         <li  onMouseEnter={changeL}> <img src={svgL} alt="" /></li>
                     </ul>
                 </div>  
                
                 <div className="usefulLinks">
                 <h2 className="titlesFooter">Useful Links</h2>
                     <ul className="contactList">
                         <div className="containlink"><li>Home</li>
                         <li>Activities</li></div>
                         <div className="containlink"><li>News</li>
                         <li>Team</li></div>
                     </ul>
                 </div>
              
            </div>
           

        </div>
    )
}

export default Footer
