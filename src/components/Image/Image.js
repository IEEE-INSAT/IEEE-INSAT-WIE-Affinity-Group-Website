import React from 'react'
import './Image.scss'



const Image = ({img}) => {
    return (
        <div className="container-img">
            <div className="image-member">
            <img src={img}  alt="" />

            </div>
            <div className="writing">

            <div className="description">
                <h3>Nadine Boukadida</h3>
                <p> Webmaster</p>
            </div> 
            <div className="socials">
                <p>hh</p>
                <p>bb</p>
                <p>ll</p>
            </div>
            </div>
        </div>
    )
}

export default Image
