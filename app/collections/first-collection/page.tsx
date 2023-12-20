import ImageList from "@/app/components/ImageList";
import supabase from "@/app/utils/supabase";

export const revalidate = 0

export default async function FirstCollection() {

    const { data, error } = await supabase.from("collection_image").select("*").order("id");

    if (error) {
        console.log(error)
    }
    
    return (
        <ImageList images={data || []}/>
    )
}