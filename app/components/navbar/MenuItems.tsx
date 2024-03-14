import Link from "next/link";
import SubMenuItems from "./SubMenuItems";

interface SubmenuItem {
    title: string;
    path: string;
}

interface MenuItem {
    title: string;
    path: string;
    position: string;
    group: string;
    submenu: SubmenuItem[];
}

interface MenuItemsProps {
    menuItemData: MenuItem[];
    position: boolean;
}

const MenuItems: React.FC<MenuItemsProps> = ({
    menuItemData,
    position,
}) => {
    return (
        <div>
            {
                position ? (
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
                            {
                                menuItemData.filter((item) => item.position == 'left')
                                    .map((item, index) => (
                                        <div key={index}>
                                            {
                                                item.submenu.length > 0 ? (
                                                    <div
                                                        className={`
                                                            group/${item.group}
                                                            px-4 py-[30px]
                                                        `}
                                                    >
                                                        <Link className="hover:text-[#121212]" href="">
                                                            {item.title}
                                                        </Link>
                                                        <div
                                                            className={`
                                                                hidden 
                                                                w-full 
                                                                px-12 
                                                                h-[7vh] 
                                                                absolute 
                                                                top-20 
                                                                left-0 
                                                              bg-white
                                                                group-hover/${item.group}:block
                                                            `}
                                                        >
                                                            <SubMenuItems
                                                                subMenu={item.submenu}
                                                                parentPath={item.path}
                                                            />
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div
                                                        className="px-4 py-[30px]"
                                                    >
                                                        <Link className="hover:text-[#121212]" href={item.path}>
                                                            {item.title}
                                                        </Link>
                                                    </div>
                                                )
                                            }
                                        </div>
                                    ))
                            }
                        </div>
                    </div>
                ) : (
                    <div
                        className="
                            hidden 
                            pl-36 
                            lg:block
                        "
                    >
                        <div
                            className="
                                mr-4 
                                flex
                                items-center
                            "
                        >
                            {
                                menuItemData.filter((item) => item.position == 'right')
                                    .map((item, index) => (
                                        <div key={index}>
                                            {
                                                item.submenu.length > 0 ? (
                                                    <div
                                                        className={`
                                                            group/${item.group}
                                                            px-4 py-[30px]
                                                        `}
                                                    >
                                                        <Link className={`group-hover/${item.group}:text-[#121212]`} href="">
                                                            {item.title}
                                                        </Link>
                                                        <div
                                                            className={`
                                                                hidden 
                                                                w-full 
                                                                px-12 
                                                                h-[7vh] 
                                                                absolute 
                                                                top-20 
                                                                left-0 
                                                              bg-white
                                                                group-hover/${item.group}:block
                                                            `}
                                                        >
                                                            <SubMenuItems
                                                                subMenu={item.submenu}
                                                                parentPath={item.path}
                                                            />
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div
                                                        className="px-4 py-[30px]"
                                                    >
                                                        <Link className="hover:text-[#121212]" href={item.path}>
                                                            {item.title}
                                                        </Link>
                                                    </div>
                                                )
                                            }
                                        </div>
                                    ))
                            }
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default MenuItems;