'use client'

import Image from "next/image";

interface ThumbImageProps {
    src: string;
    alt: string;
    onClick: () => void;
}

const ThumbImage: React.FC<ThumbImageProps> = ({
    src,
    alt,
    onClick
}) => {

    return (
        <div>
            <button className="w-full h-full overflow-hidden" onClick={onClick}>
                <Image
                    src={src}
                    width={1000}
                    height={1000}
                    alt={alt}
                    className="hover:scale-105 transition-all ease-linear cursor-pointer"
                />
            </button>
        </div>
    )
}

export default ThumbImage;