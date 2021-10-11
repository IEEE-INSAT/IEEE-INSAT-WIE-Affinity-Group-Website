import React, { useEffect } from 'react'
import './Name.scss'
const Name = ({name, position,id}) => {
    useEffect(()=> {
        
    })
    return (
        <div className="name-container" id={id}>
            <h1>{name}</h1>
            <h3>{position}</h3>
        </div>
    )
}

export default Name
