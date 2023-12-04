'use client'

import Image from "next/image"

interface ImageItemProps {
    src: string;
    alt: string;
    width: number;
    height: number;
}

const ItemImage: React.FC<ImageItemProps> = ({
    src,
    alt,
    width,
    height
}) => {

    const showModal = (imgPath: string) => {
        console.log("click");
    }

    return (
        <Image
            className=""
            src={src}
            alt={alt}
            width={width}
            height={height}
            onClick={() => showModal(src)}
        />
    )
}

export default ItemImage;