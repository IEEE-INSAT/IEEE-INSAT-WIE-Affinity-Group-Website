import React from 'react'
import HorizontalScroll from 'react-scroll-horizontal'

const Scroll = () => {
    return (
        <>
                  <HorizontalScroll>
            <div className=" card missions">Our missions</div>
            <div className="card Our Vision">Our vision</div>
            <div className=" card  Our Test ">Our test</div>

        </HorizontalScroll>
        </>
    )
}

export default Scroll
