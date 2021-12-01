import React from 'react'
import "./Footer.scss"
import svg from "../../svgs/footer.svg"
const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                 <img className="svg"src={svg} alt="" />
            </div>
           
        </div>
    )
}

export default Footer
