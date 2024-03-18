import Link from "next/link";
import SideSubMenuItems from "./SideSubMenuItems";

interface SideSubmenuItem {
    title: string;
    path: string;
}

interface SideMenuItem {
    title: string;
    path: string;
    submenu: SideSubmenuItem[];
}


interface SideMenuItemsProps {
    sideMenuItemData: SideMenuItem[];
    tglSidebar: boolean;
    onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const SideMenu: React.FC<SideMenuItemsProps> = ({
    sideMenuItemData,
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
                    ${tglSidebar ? "left-0" : "left-[-100%]"}
                `}
            >
                <div>
                    {sideMenuItemData.map((item, index) =>
                        // サブメニューが存在する場合、アイテム押下時にSideSubMenuItemsを表示
                        // 存在しない場合、アイテムにリンクを設定
                        item.submenu.length > 0 ? (
                            <details
                                className="
                                    group
                                    text-left 
                                    cursor-pointer
                                "
                                key={index}
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
                                    {item.title}
                                    {/* + - */}
                                    <div className="flex justify-center items-center pl-1">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.0"
                                            stroke="currentColor"
                                            className="block h-3 w-3 group-open:hidden"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 4.5v15m7.5-7.5h-15"
                                            />
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.0"
                                            stroke="currentColor"
                                            className="hidden h-3 w-3 group-open:block"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M19.5 12h-15"
                                            />
                                        </svg>
                                    </div>
                                </summary>
                                <SideSubMenuItems
                                    subMenu={item.submenu}
                                    parentPath={item.path}
                                />
                            </details>
                        ) : (
                            <Link
                                className="
                                    block 
                                    py-3 
                                    px-6 
                                    hover:bg-slate-50
                                "
                                href={item.path}
                                onClick={onClick}
                                key={index}
                            >
                                {item.title}
                            </Link>
                        )
                    )}
                </div>
            </div>
        </div>
    );
}

export default SideMenu;