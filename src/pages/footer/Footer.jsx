import React, { useEffect, useState } from 'react'
import "./Footer.scss"
import svgF from "../../svgs/facebook.svg"
import svgI from "../../svgs/Instagram.svg"
import svgL from "../../svgs/Linkedinn.svg"
import wie from "../../pics/wie.png"
import Rubon from '../../components/Rubon/Rubon'
import {Link} from 'react-scroll'
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
          <div className="overlayFooter"></div>
                

          <div className="rubonFooter">  <Rubon text=" Thank you for stopping BY ! Thank you for stopping BY ! Thank you for stopping BY ! Thank you for stopping BY !Thank you for stopping BY ! Thank you for stopping BY !Thank you for stopping BY ! Thank you for stopping BY ! Thank you for stopping BY !Thank you for stopping BY !Thank you for stopping BY !Thank you for stopping BY !Thank you for stopping BY !" 
deg ={0} num ={4}></Rubon></div>
            <div className="containerFooter"> <img className="svg"src={svg} alt="" />
                
                  <div className="contact">
                      <h2 className="titlesFooter">Updates</h2>
                     <h4>Visit us on our</h4>
                     <span>{current}</span>
                     <ul>
                         <li onMouseEnter={changeF}> <img src={svgF} alt="" /><a href="https://www.facebook.com/IEEE.WIE.INSAT/"></a></li>
                         <li  onMouseEnter={changeI}> <img src={svgI} alt="" /><a href="https://www.instagram.com/ieee_wie_insat/"></a></li>
                         <li  onMouseEnter={changeL}> <img src={svgL} alt="" /><a href="https://www.linkedin.com/company/ieee-wie-affinity-group-insat-student-branch/"></a></li>
                     </ul>
                 </div>  
                
                 <div className="usefulLinks">
                 <h2 className="titlesFooter">Useful Links</h2>
                     <ul className="contactList">
                         <div className="containlink">
                         <Link to="home" smooth={true} duration={100} offset={-200}>
                             <li>Home</li>
</Link>
<Link to="rubon5" smooth={true} duration={100} offset={-200}>
                         <li>Activities</li></Link>
                         
                         </div>

                         <div className="containlink">
                         <Link to="rubon1" smooth={true} duration={100} offset={-200}>
                                        <li>News</li></Link>
<Link to="rubon7" smooth={true} duration={100} offset={-200}>

                         <li>Team</li>
</Link>
                         
                         </div>
                     </ul>
                 </div>
              
            </div>
           

        </div>
    )
}

export default Footer
