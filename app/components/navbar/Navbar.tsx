'use client'

import { useState } from "react";
import Link from 'next/link'

const Navbar = () => {
    const [isClick, setIsClick] = useState(false);

    const toggleNavbar = (): void => {
        setIsClick(!isClick);
    }


    return (
        <>
            <nav className="">
                <div className="text-base max-w-full mx-auto px-4 md:px-6 lg:px-8">
                    {/* Desktop Menu */}
                    <div className="flex items-center justify-between h-16">
                        <div className="lg:hidden flex items-center">
                            {/* Mobile Menu Hamberger Icon */}
                            <button className="inline-flex items-center justify-center p-2" onClick={toggleNavbar}>
                                {isClick ? (
                                    <img className="h-6 w-6" src="/assets/close-menu.svg" alt="" />
                                ) : (
                                    <img className="h-6 w-6" src="/assets/burger-menu.svg" alt="" />
                                )}
                            </button>
                        </div>
                        <div className="hidden lg:block">
                            <div className="ml-4 flex items-center space-x-8">
                                <Link href="#">
                                    For All
                                </Link>
                                <Link href="#">
                                    Collections
                                </Link>
                                <Link href="#">
                                    About
                                </Link>
                            </div>
                        </div>
                        <div className="flex-grow flex items-center justify-center">
                            <img className="h-14 w-36" src="/assets/seika-shiraga-logo.png" alt="" />
                        </div>
                        <div className="hidden lg:block">
                            <div className="ml-4 flex items-center space-x-4">
                                <Link href="">
                                    Online Store
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Mobile Menu */}
                {isClick && (
                    <div className="z-10 text-xl w-5/6 h-screen lg:hidden">
                        <div className="pr-2 pt-2 pb-2 sm:px-3">
                            <button className="text-left p-2 w-full">
                                For All +
                            </button>
                            <button className="text-left p-2 w-full">
                                Collections +
                            </button>
                            <button className="text-left p-2 w-full">
                                About +
                            </button>
                            <Link className="block p-2" href="">
                                Online Store
                            </Link>
                            <Link className="block p-2" href="">
                                Instagram
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </>
    )
}

export default Navbar;