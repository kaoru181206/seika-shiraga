'use client'

import { useContext, useEffect, useState } from "react";
import Link from 'next/link'
import Image from "next/image";
import { TglNavClrContext, TglSidebarContext } from '../ClientOnly';
import MenuItem from "./MenuItem";

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
            if (currentScrollPos > prevScrollPos) {

            }
            setHighScrollPosPrev(currentScrollPos < prevScrollPos);
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
                    <div
                        className="
                            hidden 
                            lg:block
                        "
                    >
                        <div
                            className="
                                ml-4 
                                flex 
                                items-center
                            "
                        >
                            <MenuItem 
                                itemName="collections" 
                            />
                            <MenuItem 
                                itemName="about" 
                            />
                            <MenuItem 
                                itemName="contact" 
                            />
                        </div>
                    </div>
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
                    <div
                        className="
                            hidden 
                            pl-36 
                            mr-4 
                            lg:block
                        "
                    >
                        <MenuItem
                            itemName="onlineStore"
                        />
                    </div>
                </div>
            </div>
            {/* Mobile Side Menu */}
            <div
                className={`
                    z-10
                    w-full 
                    fixed 
                    top-20 
                    left-0 
                    ctm-h-screen
                    lg:hidden
                    transition-all 
                    duration-700
                    ease-out 
                    ${tglSidebar ? "bg-neutral-800/70" : "invisible"}
                `}
            >
                <div
                    className={`
                        z-10
                        fixed 
                        top-20 
                        left-0 
                        text-[#121212] 
                        text-[15px] 
                        w-5/6 
                        ctm-h-screen
                      bg-white
                        md:w-1/2 
                        lg:invisible 
                        transition-all 
                        duration-700
                        ease-out 
                        ${tglSidebar ? 'left-0' : 'left-[-100%]'}
                    `}
                >
                    <div>
                        <details
                            className="
                                group
                                text-left 
                                cursor-pointer
                            "
                        >
                            <summary
                                className="
                                    flex
                                    py-3 
                                    px-6 
                                    cursor-pointer 
                                    list-none 
                                  hover:bg-slate-50
                                "
                            >
                                COLLECTIONS
                                <div className="flex justify-center items-center pl-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.0" stroke="currentColor" className="block h-3 w-3 group-open:hidden">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.0" stroke="currentColor" className="hidden h-3 w-3 group-open:block">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                                    </svg>
                                </div>
                            </summary>
                            <ul
                                className="
                                    py-3 
                                    px-6 
                                  hover:bg-slate-50
                                "
                            >
                                <li>
                                    <Link className="block" href="/collections/first-collection">
                                        First Collection
                                    </Link>
                                </li>
                            </ul>
                        </details>
                        <details
                            className="
                                group
                                text-left 
                                cursor-pointer
                            "
                        >
                            <summary
                                className="
                                    flex
                                    py-3 
                                    px-6 
                                    cursor-pointer 
                                    list-none 
                                  hover:bg-slate-50
                                "
                            >
                                ABOUT
                                <div className="flex justify-center items-center pl-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.0" stroke="currentColor" className="block h-3 w-3 group-open:hidden">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.0" stroke="currentColor" className="hidden h-3 w-3 group-open:block">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                                    </svg>
                                </div>
                            </summary>
                            <ul
                                className="
                                    py-3 
                                    px-6 
                                  hover:bg-slate-50
                            "
                            >
                                <li>
                                    <Link className="" href="/about/about-seika-shiraga">
                                        About Seika Shiraga
                                    </Link>
                                </li>
                            </ul>
                        </details>
                        <Link
                            className="
                                block 
                                py-3 
                                px-6 
                              hover:bg-slate-50
                        "
                            href="/contact"
                            onClick={() => setTglSidebar(false)}
                        >
                            CONTACT
                        </Link>
                        <Link
                            className="
                                block 
                                py-3 
                                px-6 
                              hover:bg-slate-50
                        "
                            href="https://seikashiraga.official.ec/"
                        >
                            ONLINE STORE
                        </Link>
                        <Link
                            className="
                                block 
                                py-3 
                                px-6 
                              hover:bg-slate-50
                        "
                            href="https://instagram.com/seika_shiraga.official?igshid=OGQ5ZDc2ODk2ZA=="
                        >
                            INSTAGRAM
                        </Link>
                    </div>
                </div>
            </div>

        </nav>
    )
}

export default Navbar;