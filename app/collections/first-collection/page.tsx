import ItemImage from "@/app/components/ItemImage";
import supabase from "@/app/utils/supabase";
import { useState } from "react";

export const revalidate = 0

export default async function FirstCollection() {

    const { data: images } = await supabase.from("collection_image").select("*").order("id");

    const filterImages = images?.filter(image => {
        return image.id_seq === 1;
    });

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
                    <ItemImage
                        key={image.id}
                        src={image.imgSrc}
                        alt=""
                        width={1000}
                        height={1000}
                    />
                ))}
            </div>
            {/* Image Modal */}
            <div id="modal"
                className="hidden fixed top-0 left-0 z-80 w-screen h-screen bg-black/70 flex justify-center items-center">

                {/* The close button */}
                <a className="fixed z-90 top-6 right-8 text-white text-5xl font-bold">&times;</a>

                {/* A big image will be displayed here */}
                <img id="modal-img" className="max-w-[800px] max-h-[600px] object-cover" />
            </div>
        </div>
    )
}