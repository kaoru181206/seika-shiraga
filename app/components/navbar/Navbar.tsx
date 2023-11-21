'use client'

import { useEffect, useState } from "react";
import Link from 'next/link'
import Image from "next/image";

interface MenuState {
    forAll: boolean;
    collections: boolean;
    about: boolean;
}

const Navbar: React.FC = () => {
    // HambergerMenuIcon click state
    const [isClick, setIsClick] = useState(false);

    // HambergerMenuList click state
    const [isClickMenu, setIsClickMenu] = useState<MenuState>({
        forAll: false,
        collections: false,
        about: false
    })

    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [isScrolled, setIsScrolled] = useState(true);

    // スクロール時のNavbar 表示・非表示イベントの登録
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            setIsScrolled(prevScrollPos > currentScrollPos || currentScrollPos < 100);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [prevScrollPos]);

    // HambergerMenu 表示・非表示
    const toggleNavbar = (): void => {
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
        <nav className={`fixed w-full ${isScrolled ? 'block' : 'hidden'}`}>
            <div className={`max-w-full text-[#FBFBFB] mx-auto px-4 md:px-6 lg:px-8 hover:text-[#121212] hover:bg-white group ${isClick && 'bg-white'} transition-all duration-500 ease-out`} >
                {/* Desktop Menu */}
                <div className="flex items-center justify-between h-20">
                    <div className="lg:hidden flex items-center">
                        {/* Mobile Menu Hamberger Icon */}
                        <button className="inline-flex items-center justify-center p-2" onClick={toggleNavbar}>
                            {isClick ? (
                                <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="24" height="24" fill="white" />
                                    <path d="M7 17L16.8995 7.10051" stroke="#121212" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M7 7.00001L16.8995 16.8995" stroke="#121212" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            ) : (
                                <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className="group-hover:stroke-[#121212]" d="M4 18L20 18" stroke="#FBFBFB" strokeWidth="1" strokeLinecap="round" />
                                    <path className="group-hover:stroke-[#121212]" d="M4 12L20 12" stroke="#FBFBFB" strokeWidth="1" strokeLinecap="round" />
                                    <path className="group-hover:stroke-[#121212]" d="M4 6L20 6" stroke="#FBFBFB" strokeWidth="1" strokeLinecap="round" />
                                </svg>
                            )}
                        </button>
                    </div>
                    <div className="hidden lg:block">
                        <div className="ml-4 flex items-center">
                            <div className="group/forAll px-4 py-7">
                                <Link href="#">
                                    For All
                                </Link>
                                <div className="hidden w-full px-12 h-[50vh] absolute top-20 left-0 bg-white group-hover/forAll:block hover:block">
                                    <ul className="">
                                        <li>
                                            <Link className="" href="">
                                                New In
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="group/collections px-4 py-7">
                                <Link href="#">
                                    Collections
                                </Link>
                                <div className="hidden w-full px-12 h-[50vh] absolute top-20 left-0 bg-white group-hover/collections:block hover:block">
                                    <ul className="">
                                        <li>
                                            <Link className="" href="">
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
                                <div className="hidden w-full px-12 h-[50vh] absolute top-20 left-0 bg-white group-hover/about:block hover:block">
                                    <ul className="">
                                        <li>
                                            <Link className="" href="">
                                                About Seika Shiraga
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`items-center mr-30 justify-center group-hover:flex-grow group-hover:flex ${isClick ? 'flex-grow flex' : 'hidden'}`}>
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
            {isClick && (
                <div className="text-xl w-5/6 md:w-1/2 h-screen lg:hidden bg-white z-10">
                    <div className="">
                        <details className="text-left cursor-pointer">
                            <summary className="py-3 px-6 cursor-pointer list-none hover:bg-slate-50" id="forAll" onClick={() => toggleMenu("forAll")}>
                                FOR ALL {isClickMenu.forAll ? "-" : "+"}
                            </summary>
                            <ul className="text-lg py-3 px-6 hover:bg-slate-50">
                                <li>
                                    <Link className="block" href="">
                                        New In
                                    </Link>
                                </li>
                            </ul>
                        </details>

                        <details className="text-left cursor-pointer">
                            <summary className="py-3 px-6 cursor-pointer list-none hover:bg-slate-50" id="collections" onClick={() => toggleMenu("collections")}>
                                COLLECTIONS {isClickMenu.collections ? "-" : "+"}
                            </summary>
                            <ul className="text-lg py-3 px-6 hover:bg-slate-50">
                                <li>
                                    <Link className="block" href="">
                                        First Collection
                                    </Link>
                                </li>
                            </ul>
                        </details>
                        <details className="text-left cursor-pointer">
                            <summary className="py-3 px-6 cursor-pointer list-none hover:bg-slate-50" id="about" onClick={() => toggleMenu("about")}>
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
                        <Link className="block py-3 px-6 hover:bg-slate-50" href="/contact" onClick={() => setIsClick(false)}>
                            CONTACT
                        </Link>
                        <Link className="block py-3 px-6 hover:bg-slate-50" href="https://seikashiraga.official.ec/">
                            ONLINE STORE
                        </Link>
                        <Link className="block py-3 px-6 hover:bg-slate-50" href="https://instagram.com/seika_shiraga.official?igshid=OGQ5ZDc2ODk2ZA==">
                            INSTAGRAM
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar;