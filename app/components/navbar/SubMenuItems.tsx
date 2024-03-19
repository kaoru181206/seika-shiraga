import Link from "next/link";

interface SubMenuItem {
    title: string;
    path: string;
}

interface SubMenuItemsProps {
    subMenu: SubMenuItem[];
    parentPath: string;
}

const SubMenuItems: React.FC<SubMenuItemsProps> = ({
    subMenu,
    parentPath,
}) => {
    return (
        <ul>
            {
                subMenu.map((subItem, subItemIndex) => (
                    <li className="pb-3" key={subItemIndex}>
                        <Link className="hover:text-[#121212]" href={`${parentPath}${subItem.path}`}>
                            {subItem.title}
                        </Link>
                    </li>
                ))
            }

        </ul>
    )
}

export default SubMenuItems;