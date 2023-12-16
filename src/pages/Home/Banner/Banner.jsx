import { useState, useEffect } from 'react';

import banner1 from '../../../assets/images/banner/task_banner_1.png';
import banner2 from '../../../assets/images/banner/task_banner_2.jpg';
import banner3 from '../../../assets/images/banner/task_banner_3.jpg';
import banner4 from '../../../assets/images/banner/task_banner_6.jpg';

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(1);

    // Define the slides and their associated images
    const slides = [
        { id: 1, image: banner1 },
        { id: 2, image: banner2 },
        { id: 3, image: banner3 },
        { id: 4, image: banner4 },
    ];

    useEffect(() => {
        const nextSlide = (currentSlide % slides.length) + 1;
        const slideTimer = setTimeout(() => {
            setCurrentSlide(nextSlide);
        }, 2000); // Change slide every 5 seconds (adjust as needed)

        return () => clearTimeout(slideTimer);
    }, [currentSlide, slides.length]);

    return (
        <div className="carousel w-full h-[500px]">
            {slides.map((slide) => (
                <div
                    key={slide.id}
                    id={`slide${slide.id}`}
                    className={`carousel-item relative w-full ${slide.id === currentSlide ? '' : 'hidden'}`}
                >
                    <img src={slide.image} className="w-full rounded-lg" />
                    <div className="absolute h-full flex justify-between items-center transform -translate-y-1/2 left-0 right-0 top-1/2 bg-gradient-to-r from-[#444444] to-[rgba(21,21,21, 0)] rounded-lg">
                        <div className='text-center mx-auto text-cyan-50 space-y-7'>
                            <h2 className='text-6xl'>Task Management System</h2>
                            
                        </div>
                    </div>
                    
                </div>
            ))}
        </div>
    );
};

export default Banner;
