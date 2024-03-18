'use client'

import { useContext, useEffect, useState } from "react";
import Link from 'next/link'
import Image from "next/image";
import { TglNavClrContext, TglSidebarContext } from '../ClientOnly';
import MenuItems from "./MenuItems";
import SideMenu from "./SideMenuItems";
import { menuItemData, sideMenuItemData } from "@/app/menuItemsData";

const Navbar: React.FC = () => {
    // Navbar Context
    const { tglNavClr } = useContext(TglNavClrContext);
    const { tglSidebar, setTglSidebar } = useContext(TglSidebarContext);

    // Scroll State
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [isScrollTop, setIsScrollTop] = useState(true);
    const [highScrollPosPrev, setHighScrollPosPrev] = useState(false);

    useEffect(() => {
        // Scroll Event
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            // 現在位置より上にスクロールした場合、true
            setHighScrollPosPrev(currentScrollPos < prevScrollPos);
            // 現在位置がページ最上部の場合、true
            setIsScrollTop(currentScrollPos === 0);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [prevScrollPos]);

    // Side Menu open・close
    const toggleHmabMn = (): void => {
        setTglSidebar(!tglSidebar);
    }

    // Navbarスタイル適用条件
    // 前回スクロール位置より上にスクロール かつ ページ最上部ではない
    // サイドメニュー開
    // TOPページ以外のページ
    const navStyleFlg = ((highScrollPosPrev && !isScrollTop) || tglSidebar || tglNavClr);

    return (
        <nav>
            <div
                className={`
                    z-50 
                    fixed 
                    w-full 
                    max-w-full 
                    mx-auto 
                    pl-4
                    pr-14
                    md:pl-6
                    md:pr-16 
                    lg:px-8 
                    text-sm 
                    font-medium 
                    ${navStyleFlg ? 'text-[#121212BF] bg-white' : 'text-[#FBFBFB]'} 
                    sm:hover:text-[#121212BF]
                    sm:hover:bg-white
                    transition-all 
                    duration-700
                    ease-out
                    group
                `}
            >
                {/* PC */}
                <div
                    className="
                        flex 
                        items-center 
                        justify-between 
                        h-20
                    "
                >
                    <div
                        className="
                            flex 
                            items-center
                            lg:hidden
                        "
                    >
                        {/* Hamberger Menu Button */}
                        <button
                            className="
                                inline-flex 
                                flex-col 
                                h-10 
                                w-10 
                                rounded 
                                justify-center 
                                items-center
                            "
                            onClick={toggleHmabMn}
                        >
                            <div
                                className={`
                                    h-[1px] 
                                    w-5 my-1 
                                    transition 
                                    ease 
                                    transform 
                                    duration-500 
                                    sm:group-hover:bg-[#121212]
                                    ${navStyleFlg ? 'bg-[#121212]' : 'bg-[#FBFBFB]'} 
                                    ${tglSidebar && "rotate-45 translate-y-[9px]"}
                                `}
                            />
                            <div
                                className={`
                                    h-[1px] 
                                    w-5 
                                    my-1 
                                    transition 
                                    ease 
                                    transform 
                                    duration-500 
                                    sm:group-hover:bg-[#121212]
                                    ${navStyleFlg ? 'bg-[#121212]' : 'bg-[#FBFBFB]'} 
                                    ${tglSidebar && "opacity-0"}
                                `}
                            />
                            <div
                                className={`
                                    h-[1px] 
                                    w-5 
                                    my-1 
                                    transition 
                                    ease 
                                    transform 
                                    duration-500 
                                    sm:group-hover:bg-[#121212]
                                    ${navStyleFlg ? 'bg-[#121212]' : 'bg-[#FBFBFB]'} 
                                    ${tglSidebar && "-rotate-45 -translate-y-[9px]"}
                                `}
                            />
                        </button>
                    </div>
                    {/* Left Menu */}
                    <MenuItems 
                        menuItemData={menuItemData}
                        position={true}
                    />
                    {/* Logo */}
                    <div
                        className={`
                            items-center 
                            mr-30 
                            justify-center 
                            sm:group-hover:flex-grow 
                            sm:group-hover:flex 
                            ${navStyleFlg ? 'flex-grow flex' : 'hidden'}
                        `}
                    >
                        <Link href="/">
                            <Image
                                className="cursor-pointer"
                                height={530}
                                width={172}
                                src="/assets/seika-shiraga-logo-nav.png" alt="seika-shiraga-logo-nav"
                            />
                        </Link>
                    </div>
                    {/* Right Menu */}
                    <MenuItems 
                        menuItemData={menuItemData}
                        position={false}
                    />
                </div>
            </div>
            {/* Mobile Side Menu */}
            <SideMenu 
                sideMenuItemData={sideMenuItemData}
                tglSidebar={tglSidebar} 
                onClick={() => setTglSidebar(false)} 
            />
        </nav>
    )
}

export default Navbar;