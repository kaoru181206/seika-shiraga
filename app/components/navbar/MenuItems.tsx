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

    // positionがtrueの場合、menuItemDataのposition == 'left'(左側に表示するアイテム)
    // positionがfalseの場合、menuItemDataのposition == 'right'(右側に表示するアイテム)を返す
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
                                // サブメニューが存在する場合、アイテムhover時にSubMenuItemsを表示
                                // 存在しない場合、アイテムにリンクを設定
                                item.submenu.length > 0 ? (
                                    <div>
                                        <div
                                            className="
                                                peer
                                                px-4 py-[30px]
                                            "
                                        >
                                            <Link className="hover:text-[#121212]" href="">
                                                {item.title}
                                            </Link>
                                        </div>
                                        <div
                                            className="
                                                hidden 
                                                px-12 
                                                w-full 
                                                absolute 
                                                h-[7vh] 
                                                top-20 
                                                left-0 
                                                bg-white 
                                                peer-hover/:block 
                                                hover:block
                                            "
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