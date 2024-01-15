'use client'

import ThumbImage from "./ThumbImage";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import { useContext, useEffect, useRef, useState } from "react";
import { IoClose } from "react-icons/io5";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { TglNavClrContext, TglSidebarContext } from '../components/ClientOnly';

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
    // Navbar Context
    const { setTglNavClr } = useContext(TglNavClrContext);
    // Sidebar Context
    const { setTglSidebar } = useContext(TglSidebarContext);
    // LightBox表示・非表示 State
    const [isOpen, setIsOpen] = useState(false);
    // LightBox Image
    const [lightBoxImages, setLightBoxImages] = useState<any[]>([]);
    // Swiperインスタンス取得
    const swiperRef = useRef<any>(null);

    const imageList = images;
    const mainImages = imageList.filter((item) => {
        return item.id_seq === 1
    })

    useEffect(() => {
        setTglNavClr(true);
        setTglSidebar(false);
    }, [])

    // LightBox Open
    const handleClickOpenImage = (index: string) => {
        const newLightBoxImages = images.filter((image) => {
            return image.id === index;
        });
        setLightBoxImages(newLightBoxImages);
        setIsOpen(true);
    }

    // LightBox Close
    const handleCloseLightBox = () => {
        setIsOpen(false);
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideTo(0);
        }
    }

    return (
        <>
            <div className="w-full min-h-screen text-[#121212] pt-28">
                <div className="flex items-center justify-between px-[5%] mb-8">
                    <h2 className="text-sm md:text-base">COLLECTION</h2>
                    <h3 className="text-xs md:text-sm">FIRST COLLECTION</h3>
                </div>
                {/* Image Grid */}
                <div className="grid px-1 gap-1 grid-cols-2 lg:grid-cols-3 lg:px-2 lg:gap-2">
                    {mainImages?.map((mainImage) => (
                        <ThumbImage
                            key={mainImage.id}
                            id={mainImage.id}
                            src={mainImage.imgsrc}
                            alt={"First-Collection-" + mainImage.id + "-" + mainImage.id_seq}
                            onClick={() => handleClickOpenImage(mainImage.id)}
                        />
                    ))}
                </div>

            </div>
            {/* LightBox */}
            <div className={`fixed z-50 inset-0 w-full h-full bg-white bg-opacity-70 flex items-center justify-center ${isOpen ? 'opacity-100' : 'opacity-0 invisible'} transition-all duration-700 ease-out`}>
                <button className="z-50 absolute top-5 right-5 opacity-40" onClick={handleCloseLightBox}>
                    <IoClose size={25}/>
                </button>
                <Swiper
                    className="imagesSwiper w-full md:w-3/4 lg:w-2/3 h-[95%] flex items-center justify-center"
                    speed={900}
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
                    ref={swiperRef}
                >
                    {
                        lightBoxImages.map((image) => (
                            <SwiperSlide key={image.id_seq}>
                                <div className="flex items-center justify-center">
                                    <Image
                                        src={image.imgsrc}
                                        alt={"First-Collection-" + image.id + "-" + image.id_seq}
                                        fill
                                        className="object-contain"
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
        </>

    )
}

export default ImageList;