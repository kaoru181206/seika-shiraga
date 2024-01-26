'use client'

import { TglNavClrContext } from "../../components/ClientOnly";
import { useContext, useEffect } from "react";
import PageWrapper from "../../components/PageWrapper";

export default function AboutSeikaShiraga() {
    // Navbar Context
    const { setTglNavClr } = useContext(TglNavClrContext);

    useEffect(() => {
        setTglNavClr(true);
    }, [])

    return (
        <PageWrapper>
            <div className="w-full text-[#121212] items-center justify-between pt-28 px-[10%] md:px-[20%] lg:px-[30%]">
                <div className="items-center mb-6">
                    <h1 className="text-sm md:text-base">About</h1>
                </div>
            </div>
        </PageWrapper>
    )
}