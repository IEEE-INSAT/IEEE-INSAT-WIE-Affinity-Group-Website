import React, { useEffect } from 'react'
import Main from '../Main'
import Aboutus from '../aboutus/Aboutus'
const Home = () => {
    const body= document.querySelector("body")
useEffect (()=> {
    body.style.overflow="scroll";

})
    return (
        <>
     <Main></Main>
      <Aboutus></Aboutus>
        </>
    )
}

export default Home
