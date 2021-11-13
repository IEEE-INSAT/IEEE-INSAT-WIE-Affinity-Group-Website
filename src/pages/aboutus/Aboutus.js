import { forEach } from 'async'
import React, { useEffect } from 'react'
import './Aboutus.css'
import './aboutus.scss'
import Intro from '../first/Intro'
import HorizontalScroll from 'react-scroll-horizontal'
import  Gallery from '../scroll/Gallery'
import Footer from '../footer/Footer'
import Latest from '../Carousel/Latest'
import Facts from '../facts/Facts'
import More from '../More/More'
import Showactivities from '../main-activities/Showactivities'
const Aboutus = () => {


    return (
        <div>
      <div className="transform">
            <Intro></Intro>
            {/* <Latest></Latest> */}
            
            <Showactivities></Showactivities>
            <More></More>
            {/* <Facts></Facts> */}
            {/* <Footer></Footer> */}
            {/* <Gallery></Gallery> */}


      </div>

            </div>     
       
   
    )
}

export default Aboutus
