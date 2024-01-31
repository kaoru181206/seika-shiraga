'use client'

import { useContext, useEffect, useState } from "react";
import Link from 'next/link'
import Image from "next/image";
import { TglNavClrContext, TglSidebarContext } from '../ClientOnly';

interface MenuState {
    forAll: boolean;
    collections: boolean;
    about: boolean;
}

const Navbar: React.FC = () => {
    // Navbar Context
    const { tglNavClr } = useContext(TglNavClrContext);

    // HambergerMenuIcon click state
    const { tglSidebar, setTglSidebar } = useContext(TglSidebarContext);

    // HambergerMenuList click state
    const [isClickMenu, setIsClickMenu] = useState<MenuState>({
        forAll: false,
        collections: false,
        about: false
    })

    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [isScrollTop, setIsScrollTop] = useState(true);
    const [highScrollPosPrev, setHighScrollPosPrev] = useState(false);

    // Hover state
    const [isHover, setIsHover] = useState(false);

    // スクロール時のNavbar 表示・非表示イベントの登録
    useEffect(() => {
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

    // HambergerMenu 表示・非表示
    const toggleHmabMn = (): void => {
        setTglSidebar(!tglSidebar);
    }

    // HambergerMenuItem 表示・非表示
    const toggleMenu = (menu: keyof MenuState): void => {
        setIsClickMenu((prevState) => ({
            ...prevState,
            [menu]: !prevState[menu],
        }));
    };

    const tglNav = ((highScrollPosPrev && !isScrollTop) || tglSidebar || isHover || tglNavClr);

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
                    ${tglNav ? 'text-[#121212BF] bg-white' : 'text-[#FBFBFB]'} 
                    transition-all 
                    duration-500 
                    ease-out
                `}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
            >
                {/* Desktop Menu */}
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
                                    ${tglNav ? 'bg-[#121212]' : 'bg-[#FBFBFB]'} ${tglSidebar && "rotate-45 translate-y-[9px]"}
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
                                    ${tglNav ? 'bg-[#121212]' : 'bg-[#FBFBFB]'} ${tglSidebar && "opacity-0"}
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
                                    ${tglNav ? 'bg-[#121212]' : 'bg-[#FBFBFB]'} ${tglSidebar && "-rotate-45 -translate-y-[9px]"}
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
                            <div
                                className="
                                    group/collections 
                                    px-4 
                                    py-[30px]
                                "
                            >
                                <Link className="hover:text-[#121212]" href="#">
                                    Collections
                                </Link>
                                <div
                                    className="
                                        hidden 
                                        w-full 
                                        px-12 
                                        h-[20vh] 
                                        absolute 
                                        top-20 
                                        left-0 
                                        bg-white 
                                        group-hover/collections:block 
                                        hover:block
                                    "
                                >
                                    <ul className="">
                                        <li>
                                            <Link className="hover:text-[#121212]" href="/collections/first-collection">
                                                First Collection
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div
                                className="
                                    group/about 
                                    px-4 
                                    py-[30px]
                                "
                            >
                                <Link className="hover:text-[#121212]" href="#">
                                    About
                                </Link>
                                <div
                                    className="
                                        hidden 
                                        w-full 
                                        px-12 
                                        h-[20vh] 
                                        absolute 
                                        top-20 
                                        left-0 
                                        bg-white 
                                        group-hover/about:block 
                                        hover:block
                                    "
                                >
                                    <ul>
                                        <li>
                                            <Link className="hover:text-[#121212]" href="/about/about-seika-shiraga">
                                                About Seika Shiraga
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div
                                className="
                                    px-4 
                                    py-[30px]
                                "
                            >
                                <Link className="hover:text-[#121212]" href="/contact">
                                    Contact
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div
                        className={`
                            items-center 
                            mr-30 
                            justify-center 
                            group-hover:flex-grow 
                            group-hover:flex 
                            ${tglNav ? 'flex-grow flex' : 'hidden'}
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
                            pr-4 
                            pl-40 
                            py-[30px] 
                            mr-4 
                            lg:block
                        "
                    >
                        <div
                            className="
                                items-center 
                                space-x-4
                            "
                        >
                            <Link className="hover:text-[#121212]" href="https://seikashiraga.official.ec/">
                                Online Store
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
            <div 
                className={`
                    z-10
                    w-full 
                    fixed 
                    top-20 
                    left-0 
                    h-screen
                    lg:invisible
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
                        h-screen 
                      bg-white
                        md:w-1/2 
                        lg:invisible 
                        transition-all 
                        duration-500 
                        ease-in 
                        ${tglSidebar ? 'left-0' : 'left-[-100%]'}
                    `}
                >
                    <div>
                        <details
                            className="
                            text-left 
                            cursor-pointer
                        "
                        >
                            <summary
                                className="
                                py-3 
                                px-6 
                                cursor-pointer 
                                list-none 
                                hover:bg-slate-50"
                                id="collections"
                                onClick={() => toggleMenu("collections")}
                            >
                                COLLECTIONS {isClickMenu.collections ? "-" : "+"}
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
                            text-left 
                            cursor-pointer
                        "
                        >
                            <summary
                                className="
                                py-3 
                                px-6 
                                cursor-pointer 
                                list-none 
                                hover:bg-slate-50
                            "
                                id="about"
                                onClick={() => toggleMenu("about")}
                            >
                                ABOUT {isClickMenu.about ? "-" : "+"}
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