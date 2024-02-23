import ImageList from "@/app/components/ImageList";
import supabase from "@/app/utils/supabase";

export const revalidate = 360

async function getData() {
    const res = await supabase.from("collection_images").select("*").order("id, id_seq");

    if (res.error) {
        throw new Error('Failed to fetch data');
    }

    return res.data;
}

export default async function FirstCollection() {

    const data = await getData();

    return (
        <ImageList images={data || []}/>
    )
}