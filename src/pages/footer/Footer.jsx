import React, { useEffect } from 'react'
import './Footer.scss'
const Footer = () => {
    useEffect(()=> {
        const last= document.querySelector(".more-container");
        const footer= document.querySelector(".footer");
        var x = 300;
        var y =0;
        window.addEventListener("scroll",()=> {
            if ( last.getBoundingClientRect().y <100) {
                if (y>last.getBoundingClientRect().y)
                x-=20;
                else 
                x+=20;
                
                footer.style.transform=`translateY(${x}px)`;
                y=last.getBoundingClientRect().y
            }


        })

    }, [])
    return (
        <div className="footer">
            
        </div>
    )
}

export default Footer
