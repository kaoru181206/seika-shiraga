'use client'

import { TglNavClrContext, TglSidebarContext } from "../../components/ClientOnly";
import { useContext, useEffect } from "react";
import PageWrapper from "../../components/PageWrapper";
import Link from "next/link";

export default function AboutSeikaShiraga() {
    // Navbar Context
    const { setTglNavClr } = useContext(TglNavClrContext);
    // Sidebar Context
    const { setTglSidebar } = useContext(TglSidebarContext);

    useEffect(() => {
        setTglNavClr(true);
        setTglSidebar(false);
    }, [])

    return (
        <PageWrapper>
            <div 
                className="
                    flex 
                    h-full 
                    flex-col 
                    items-center 
                    justify-center 
                    text-xs 
                    md:text-sm 
                    text-[#121212] 
                    text-center 
                    pt-28 
                    px-9
                "
            >
            <div
                className="items-center mb-6">
                    <h1 className="text-sm md:text-base">Coming soon</h1>
                </div>
                <ul>
                    <li className="text-xs md:text-sm">
                        このページは現在準備中です。<br />
                        公開までもうしばらくお待ちください。
                    </li>
                </ul>
                <div 
                    className="
                        flex 
                        items-center 
                        justify-center 
                        hover:border-gray-400 
                        hover:text-gray-400 
                        w-64 
                        h-11 
                        mt-6 
                        border 
                        border-[#121212]
                    "
                >
                    <Link href="/">
                        トップページへ
                    </Link>
                </div>
            </div>
        </PageWrapper>
    )
}