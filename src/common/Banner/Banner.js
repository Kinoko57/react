import React from 'react';
const Banner=(props)=>(
    <div className="slide">
        <div className="swiper-wrapper">
            <div className="swiper-slide">
            <a href="#">
            <img src="./images/upload/slide001.jpg"/>
            </a>
            </div>
            <div className="swiper-slide">
            <a href="#">
            <img src="./images/upload/slide002.jpg"/>
            </a>
            </div>
        </div>
        <div className="pagination"></div>  
    </div>
);
export default Banner;