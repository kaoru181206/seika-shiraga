'use client'

import ThumbImage from "./ThumbImage";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

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
                    <div className="fixed z-50 inset-0 w-full h-full bg-white bg-opacity-70 flex items-center justify-center">
                        <button className="z-50 absolute top-5 right-5 opacity-40" onClick={handleCloseLightBox}>
                            <IoClose size={25}/>
                        </button>
                        <Swiper
                            className="imagesSwiper w-full md:w-3/4 lg:w-2/3 h-[95%] flex items-center justify-center"
                            speed={800}
                            spaceBetween={30}
                            effect={'fade'}
                            navigation={{
                                prevEl: ".button-prev-slide",
                                nextEl: ".button-next-slide",
                            }}
                            pagination={{
                                type: 'fraction',
                            }}
                            modules={[EffectFade, Navigation, Pagination]}
                            loop={false}
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
                                                className=""
                                            />
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                            <div className="z-50 absolute inset-0 flex items-center justify-between p-4">
                                <div className="button-prev-slide cursor-pointer opacity-40">
                                    <FaChevronLeft size={25} />
                                </div>
                                <div className="button-next-slide cursor-pointer opacity-40">
                                    <FaChevronRight size={25} />
                                </div>
                            </div>
                        </Swiper>
                    </div>
                )
            }

        </>

    )
}

export default ImageList;