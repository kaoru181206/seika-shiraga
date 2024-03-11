import Link from "next/link";
import { menuItemData } from "@/app/menuItemsData";

type MenuItemKey = keyof typeof menuItemData;
interface MenuItemProps {
    itemName: MenuItemKey;
}

const MenuItem: React.FC<MenuItemProps> = ({
    itemName
}) => {

    const menuItem = menuItemData[itemName];

    return (
        <div>
            {
                menuItem && menuItem.submenu.length ? (
                    <div
                        className={`
                            group/${itemName}
                            px-4 py-[30px]
                        `}
                    >
                        <Link className="hover:text-[#121212]" href="">
                            {menuItem.title}
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
                                        group-hover/${itemName}:block
                                        hover:block 
                                    `}
                        >
                            <ul>
                                {
                                    menuItem.submenu.map((childMenu, childMenuIndex) => (
                                        <li key={childMenuIndex}>
                                            <Link className="hover:text-[#121212]" href={`${menuItem.path}${childMenu.path}`}>
                                                {childMenu.title}
                                            </Link>
                                        </li>
                                    ))
                                }

                            </ul>
                        </div>
                    </div>
                ) : (
                    <div
                        className="px-4 py-[30px]"
                    >
                        <Link className="hover:text-[#121212]" href={menuItem.path}>
                            {menuItem.title}
                        </Link>
                    </div>
                )
            }
        </div>
    )
}

export default MenuItem;