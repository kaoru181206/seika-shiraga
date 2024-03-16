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

    const items = menuItemData.filter((item) => position 
        ? item.position == 'left' 
        : item.position == 'right'
    )

    return (
        <div
            className={`
                hidden 
                lg:block
                ${!position && 'pl-36'}
            `}
        >
            <div
                className={`
                    ${position ? 'ml-4' : 'mr-4'}
                    flex 
                    items-center
                `}
            >
                {
                    items.map((item, index) => (
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
                                                px-12 
                                                w-full 
                                                absolute 
                                                h-[7vh] 
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

export default MenuItems;