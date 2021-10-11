import React, { useEffect } from 'react'
import './Footer.scss'
const Footer = () => {
    useEffect(()=> {
        const last= document.querySelector(".container-latest");
        const footer= document.querySelector(".footer");
        var x = 400;
        var y =0;
        window.addEventListener("scroll",()=> {
            console.log(last.getBoundingClientRect())
            if ( last.getBoundingClientRect().y <500) {
                if (y>last.getBoundingClientRect().y)
                x-=10;
                else 
                x+=10;
                
                console.log(x)
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
