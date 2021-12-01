import React, { useEffect } from 'react'
import Main from '../Main/Main'
import Aboutus from '../aboutus/Aboutus'
import Footer from "../Footer/Footer";

const Home = () => {
    const body= document.querySelector("body")
useEffect (()=> {
    body.style.overflow="auto";

})
    return (
        <>
     <Main></Main>
      <Aboutus></Aboutus>

        </>
    )
}

export default Home
