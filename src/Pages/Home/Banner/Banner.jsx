import React, { useState, useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../assets/home/01.jpg';
import img2 from '../../../assets/home/02.jpg';
import img3 from '../../../assets/home/03.png';
import img4 from '../../../assets/home/04.jpg';
import img5 from "../../../assets/home/05.png";
import img6 from '../../../assets/home/06.png';
import './Banner.css';

const Banner = () => {
    const [currentIndex, setCurrentIndex] = useState(5); // Start from img6 initially

    const handleSlideChange = index => {
        setCurrentIndex(index);
    };

    // If you want to reset the currentIndex to 5 (img6) after carousel reaches the first slide
    useEffect(() => {
        if (currentIndex === 0) {
            setCurrentIndex(5);
        }
    }, [currentIndex]);

    return (
        <div className=''>
            <Carousel autoPlay  interval={3000} showArrows={false} showStatus={false} showIndicators={true} showThumbs={true} onChange={handleSlideChange} infiniteLoop >
                <div>
                    <img className='h-auto md:h-300 lg:h-[500px]'  src={img1} alt="Slide 1" />
                </div>
                <div>
                    <img  className='h-auto md:h-300 lg:h-[500px]' src={img2} alt="Slide 2" />
                </div>
                <div>
                    <img  className='h-auto md:h-300 lg:h-[500px]' src={img3} alt="Slide 3" />
                </div>
                <div>
                    <img className='h-auto md:h-300 lg:h-[500px]'  src={img4} alt="Slide 4" />
                </div>
                <div>
                    <img  className='h-auto md:h-300 lg:h-[500px]' src={img5} alt="Slide 5" />
                </div>
                <div>
                    <img  className='h-auto md:h-300 lg:h-[500px]' src={img6} alt="Slide 6" />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;
