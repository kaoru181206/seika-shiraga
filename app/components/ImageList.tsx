'use client'

import ThumbImage from "./ThumbImage";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import { useState } from "react";

// Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from "next/image";

interface ImageListProps {
    images: any[]
}

const ImageList: React.FC<ImageListProps> = ({
    images
}) => {
    console.log(images);
    const [isOpen, setIsOpen] = useState(false);
    const [lightBoxImages, setLightBoxImages] = useState<any[]>([]);

    const imageList = images;
    const mainImages = imageList.filter((item) => {
        return item.id_seq === 1
    })

    // LightBox Open
    const handleClickOpenImage = (index: string) => {
        const newLightBoxImages = images.filter((image) => {
            return image.id === index;
        });
        setIsOpen(true);
        setLightBoxImages(newLightBoxImages);
    }

    // LightBox Close
    const handleCloseLightBox = () => {
        setIsOpen(false);
    }



    return (
        <>
            <div className="w-full min-h-screen text-[#121212] pt-24">
                <div className="flex items-center justify-between px-[5%] mb-8">
                    <div className="">
                        <h1>COLLECTION</h1>
                    </div>
                    <div className="">
                        <h1>FIRST COLLECTION</h1>
                    </div>
                </div>
                {/* Image Grid */}
                <div className="px-1 gap-1 columns-2 lg:columns-3 lg:px-3 lg:gap-3">
                    {mainImages?.map((mainImage) => (
                        <ThumbImage
                            key={mainImage.id}
                            src={mainImage.imgSrc}
                            alt=""
                            onClick={() => handleClickOpenImage(mainImage.id)}
                        />
                    ))}
                </div>

            </div>
            {/* Image Modal */}
            {
                isOpen && (
                    <div className="fixed z-50 inset-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
                        <button className="absolute top-5 right-5" onClick={handleCloseLightBox}>
                            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="24" height="24" fill="white" />
                                <path d="M7 17L16.8995 7.10051" stroke="#121212" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M7 7.00001L16.8995 16.8995" stroke="#121212" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <Swiper
                            // navigation
                            // pagination={{ type: 'fraction' }}
                            // modules={[Navigation, Pagination]}
                            className="w-full h-[95%] flex items-center justify-center"
                            spaceBetween={30}
                            effect={'fade'}
                            navigation={true}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[EffectFade, Navigation, Pagination]}
                        >
                            {
                                lightBoxImages.map((image) => (
                                    <SwiperSlide key={image.id_seq}>
                                        <div className="flex h-full items-center justify-center">
                                            <Image
                                                src={image.imgSrc}
                                                alt=""
                                                width={500}
                                                height={500}
                                            />
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                )
            }

        </>

    )
}

export default ImageList;