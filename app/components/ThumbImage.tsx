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
                    className="hover:opacity-80 transition-all ease-linear duration-150 cursor-pointer"
                />
            </button>
        </div>
    )
}

export default ThumbImage;