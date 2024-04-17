import React, { useState, useRef } from 'react';
import img1 from '../../assets/oxygen.jpeg'
import img2 from '../../assets/transmitter.png'
import img3 from '../../assets/test.jpeg'
import { FaArrowRight } from "react-icons/fa6";



const images = [
    img1,
    img2,
    img3,
    'https://source.unsplash.com/user/wsanter',
    'https://source.unsplash.com/random',
    'https://source.unsplash.com/user/wsanter',
    'https://source.unsplash.com/random',
    'https://source.unsplash.com/user/wsanter',
    'https://source.unsplash.com/random',
    'https://source.unsplash.com/user/wsanter',
    'https://source.unsplash.com/random',
    'https://source.unsplash.com/user/wsanter',
    'https://source.unsplash.com/random',
    'https://via.placeholder.com/150',
];


const ExploreCarousel = () => {

    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const selectedImageRef = useRef(null);

    const handleImageClick = (index) => {
        setSelectedImageIndex(index);
        selectedImageRef.current.scrollIntoView({ behavior: 'smooth' });
    };


    const handleNextImage = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrevImage = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    // Use the selectedImageIndex to get the selected image from the images array
    const selectedImage = images[selectedImageIndex];

    return (
        <div className="flex flex-col w-full px-[5%] h-max py-24 bg-gradient-to-b from-black via-stone-900 to-black">
            <div className='mt-[120px] pb-[4.25rem]' ref={selectedImageRef} />
            <div className="w-full overflow-hidden flex h-[75vh] relative items-center justify-center">
                {selectedImage && <img src={selectedImage} alt="Selected" className="rounded-3xl w-full h-full object-contain object-center" />}
                <button
                    className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white p-4 text-xl rounded-full opacity-50 hover:opacity-85 transition-all duration-300 ease-in-out"
                    onClick={handlePrevImage}
                >
                    <FaArrowRight className='transform rotate-180' />
                </button>
                <button
                    className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white p-4 text-xl rounded-full opacity-50 hover:opacity-85 transition-all duration-300 ease-in-out"
                    onClick={handleNextImage}
                >
                    <FaArrowRight />
                </button>
            </div>
            <div className="flex flex-wrap content-start gap-4 justify-center mt-4 w-full">
                {images.map((image, index) => (
                    <div key={index} className="size-16 md:size-24 flex rounded-3xl overflow-hidden" onClick={() => handleImageClick(index)}>
                        <img src={image} alt={`Option ${index + 1}`} className="flex size-[inherit] object-cover object-center brightness-90 hover:brightness-100 opacity-80 transition-all cursor-pointer hover:opacity-100" />
                    </div>
                ))}
            </div>
        </div>
        // <div id='exploreCarousel' className='h-max w-full flex flex-col px-[5%] relative py-[10rem]'>
        //     <div className='gap-x-2 md:gap-y-[6rem] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
        //         <ExploreImage />
        //         <ExploreImage />
        //         <ExploreImage />
        //         <ExploreImage />
        //         <ExploreImage />
        //         <ExploreImage />
        //         <ExploreImage />
        //         <ExploreImage />
        //         <ExploreImage />

        //     </div>
        // </div>
    )
}

export default ExploreCarousel