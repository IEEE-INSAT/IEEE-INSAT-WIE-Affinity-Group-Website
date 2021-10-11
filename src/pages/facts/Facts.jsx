import React, { useEffect } from 'react'
import './Facts.scss'
import Fall from '../../components/fall/Fall'
import img1 from '../../teampics/pic1.jpg'
import img2 from '../../teampics/pic2.jpg'
import img3 from '../../teampics/pic3.png'
import img4 from '../../teampics/pic5.png'
import img5 from '../../teampics/pic4.png'
import img6 from '../../teampics/pic6.jpg'
import img7 from '../../teampics/pic7.jpg'
const Facts = () => {


    useEffect(()=>{
    const facts =document.getElementsByClassName("facts-container");
    const last= document.querySelector(".container-latest");


    window.addEventListener("scroll", (event)=> {

       

        if (facts[0].getBoundingClientRect().y<430){
            // facts[0].style.transform="translateY(-50vh)";


   }
    else{
            // facts[0].style.transform="translateY(0px)";
        }



    })



    },[])
    return (
        <div className="facts-container">
            <div className="testScroll">
                <h1>Check out our lovely Team</h1>
                </div>
            <div className="facts-wrapper">
                
                <Fall imgs ={[img1,img2,img3,img4]}></Fall>
                <Fall imgs ={[img5,img6,img1,img7]}></Fall>
                <Fall imgs ={[img6,img4,img5,img2]}></Fall>


            </div>
        </div>
    )
}

export default Facts
