import React, { useEffect } from 'react'
import './Rubon.scss'
const Rubon = ({text, deg}) => {

    useEffect(()=> {
     const rubon = document.querySelector(".rubon");
rubon.style.transform =`rotate(-${deg}deg)`;
    },[])
    return (
        <div className="container-rubon">
            <div className="rubon">          <h1>{text}</h1>
            </div>
  
        </div>
    )
}

export default Rubon
