import React, { useState, useRef } from 'react';

const images = [
    'https://source.unsplash.com/random',
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

    const [selectedImage, setSelectedImage] = useState(images[0]);
    const selectedImageRef = useRef(null);

    const handleImageClick = (image) => {
        setSelectedImage(image);
        selectedImageRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="flex flex-col w-full px-[5%] h-max">
        <div className='mt-[120px] pb-[4.25rem]' ref={selectedImageRef} />
            <div className="w-full rounded-3xl overflow-hidden flex h-[75vh]">
                {selectedImage && <img src={selectedImage} alt="Selected" className="w-full h-full object-cover object-center" />}
            </div>
            <div className="flex flex-wrap content-start gap-4 justify-center mt-4 w-full">
                {images.map((image, index) => (
                    <div key={index} className="size-20 flex rounded-3xl overflow-hidden" onClick={() => handleImageClick(image)}>
                        <img src={image} alt={`Option ${index + 1}`} className=" flex size-[inherit] object-cover object-center brightness-90 hover:brightness-100 opacity-80 transition-all cursor-pointer hover:opacity-100" />
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