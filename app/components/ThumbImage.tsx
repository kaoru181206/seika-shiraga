'use client'

import Image from "next/image";
import { Cabin } from 'next/font/google'

const cabin = Cabin({
    weight: "400",
    subsets: ['latin']
})
interface ThumbImageProps {
    id: string;
    src: string;
    alt: string;
    onClick: () => void;
}

const ThumbImage: React.FC<ThumbImageProps> = ({
    id,
    src,
    alt,
    onClick
}) => {

    return (
        <button className="relative w-full h-full" onClick={onClick}>
            <Image
                src={src}
                width={1000}
                height={1500}
                alt={alt}
                className="hover:opacity-80 transition-all ease-linear duration-150 cursor-pointer"
            />
            <span className={`absolute bottom-2 right-2 text-sm text-[#FBFBFB] ${cabin.className}`}>{("000" + id).slice(-2)}</span>
        </button>
    )
}

export default ThumbImage;