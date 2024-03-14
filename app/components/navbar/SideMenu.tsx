import Link from "next/link";

interface SideMenuProps {
    tglSidebar: boolean;
    onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const SideMenu: React.FC<SideMenuProps> = ({
    tglSidebar,
    onClick
}) => {
    return (
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
                        onClick={onClick}
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
    );
}

export default SideMenu;