'use client'

import { useContext, useEffect, useState } from "react";
import Link from 'next/link'
import Image from "next/image";
import { TglNavClrContext } from '../ClientOnly';

interface MenuState {
    forAll: boolean;
    collections: boolean;
    about: boolean;
}

const Navbar: React.FC = () => {
    // Navbar Context
    const {tglNavClr} = useContext(TglNavClrContext);
    
    // HambergerMenuIcon click state
    const [isClick, setIsClick] = useState(false);

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
        setIsClick(!isClick);
    }

    // HambergerMenuItem 表示・非表示
    const toggleMenu = (menu: keyof MenuState): void => {
        setIsClickMenu((prevState) => ({
            ...prevState,
            [menu]: !prevState[menu],
        }));
    };

    return (
        <nav>
            <div className={`z-50 fixed w-full max-w-full mx-auto px-4 md:px-6 lg:px-8 ${((highScrollPosPrev && !isScrollTop) || isClick || isHover || tglNavClr) ? 'text-[#121212] bg-white' : 'text-[#FBFBFB]'} transition-all duration-500 ease-out`}
                onMouseEnter={() => setIsHover(true)} 
                onMouseLeave={() => setIsHover(false)}
            >
                {/* Desktop Menu */}
                <div className="flex items-center justify-between h-20">
                    <div className="lg:hidden flex items-center">
                        {/* Mobile Menu Hamberger */}
                        <button
                            className="inline-flex flex-col h-10 w-10 rounded justify-center items-center"
                            onClick={toggleHmabMn}
                        >
                            <div className={`h-[1px] w-5 my-1 transition ease transform duration-500 ${((highScrollPosPrev && !isScrollTop) || isClick || isHover || tglNavClr) ? 'bg-[#121212]' : 'bg-[#FBFBFB]'} ${isClick && "rotate-45 translate-y-[9px]"}`}/>
                            <div className={`h-[1px] w-5 my-1 transition ease transform duration-500 ${((highScrollPosPrev && !isScrollTop) || isClick || isHover || tglNavClr) ? 'bg-[#121212]' : 'bg-[#FBFBFB]'} ${isClick && "opacity-0"}`}/>
                            <div className={`h-[1px] w-5 my-1 transition ease transform duration-500 ${((highScrollPosPrev && !isScrollTop) || isClick || isHover || tglNavClr) ? 'bg-[#121212]' : 'bg-[#FBFBFB]'} ${isClick && "-rotate-45 -translate-y-[9px]"}`}
                            />
                        </button>
                    </div>
                    <div className="hidden lg:block">
                        <div className="ml-4 flex items-center">
                            <div className="group/collections px-4 py-7">
                                <Link href="#">
                                    Collections
                                </Link>
                                <div className="hidden w-full px-12 h-[20vh] absolute top-20 left-0 bg-white group-hover/collections:block hover:block">
                                    <ul className="">
                                        <li>
                                            <Link className="" href="/collections/first-collection">
                                                First Collection
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="group/about px-4 py-7">
                                <Link href="#">
                                    About
                                </Link>
                                <div className="hidden w-full px-12 h-[20vh] absolute top-20 left-0 bg-white group-hover/about:block hover:block">
                                    <ul className="">
                                        <li>
                                            <Link className="" href="">
                                                About Seika Shiraga
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="px-4 py-7">
                                <Link href="/contact">
                                    Contact
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={`items-center mr-30 justify-center group-hover:flex-grow group-hover:flex ${((highScrollPosPrev && !isScrollTop) || isClick || isHover || tglNavClr) ? 'flex-grow flex' : 'hidden'}`}>
                        <Link href="/">
                            <Image className="cursor-pointer" height={56} width={144} src="/assets/seika-shiraga-logo.png" alt="seika-shiraga-logo" />
                        </Link>
                    </div>
                    <div className="hidden pr-4 pl-40 py-7 mr-4 lg:block">
                        <div className="items-center space-x-4">
                            <Link href="https://seikashiraga.official.ec/">
                                Online Store
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
            <div className={`fixed top-20 left-0 text-xl w-5/6 md:w-1/2 h-screen lg:hidden bg-white z-10 transition-all duration-500 ease-in ${isClick ? 'left-0' : 'left-[-100%]'}`}>
                <div className="">
                    <details className="text-left cursor-pointer">
                        <summary className="py-3 px-6 cursor-pointer list-none hover:bg-slate-50" id="collections" 
                                onClick={() => toggleMenu("collections")}
                        >
                            COLLECTIONS {isClickMenu.collections ? "-" : "+"}
                        </summary>
                        <ul className="text-lg py-3 px-6 hover:bg-slate-50">
                            <li>
                                <Link className="block" href="/collections/first-collection">
                                    First Collection
                                </Link>
                            </li>
                        </ul>
                    </details>
                    <details className="text-left cursor-pointer">
                        <summary className="py-3 px-6 cursor-pointer list-none hover:bg-slate-50" id="about" 
                                onClick={() => toggleMenu("about")}
                        >
                            ABOUT {isClickMenu.about ? "-" : "+"}
                        </summary>
                        <ul className="text-lg py-3 px-6 hover:bg-slate-50">
                            <li>
                                <Link className="block" href="">
                                    About Seika Shiraga
                                </Link>
                            </li>
                        </ul>
                    </details>
                    <Link className="block py-3 px-6 hover:bg-slate-50" href="/contact" 
                            onClick={() => setIsClick(false)}
                    >
                        CONTACT
                    </Link>
                    <Link className="block py-3 px-6 hover:bg-slate-50" href="https://seikashiraga.official.ec/">
                        ONLINE STORE
                    </Link>
                    {/* <Link className="block py-3 px-6 hover:bg-slate-50" href="https://instagram.com/seika_shiraga.official?igshid=OGQ5ZDc2ODk2ZA==">
                            INSTAGRAM
                        </Link> */}
                </div>
            </div>
        </nav>
    )
}

export default Navbar;