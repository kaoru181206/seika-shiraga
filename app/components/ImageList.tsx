'use client'

import ThumbImage from "./ThumbImage";

interface ImageListProps {
    images: any[]
}

const ImageList: React.FC<ImageListProps> = ({
    images
}) => {

    const imageList = images;
    const filterImages = imageList.filter((item) => {
        return item.id_seq === 1
    })

    const showModal = (imgPath: string) => {
        console.log("click");
    }

    

    return (
        <div className="w-full text-[#121212] pt-24">
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
                {filterImages?.map((image) => (
                    <ThumbImage
                        key={image.id}
                        src={image.imgSrc}
                        alt=""
                        onClick={() => console.log(image.id)}
                    />
                ))}
            </div>
            {/* Image Modal */}
            
        </div>
    )
}

export default ImageList;