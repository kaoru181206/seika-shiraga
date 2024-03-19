import Link from "next/link";

interface SideSubMenuItem {
    title: string;
    path: string;
}

interface SideSubMenuItemsProps {
    subMenu: SideSubMenuItem[];
    parentPath: string;
}

const SideSubMenuItems: React.FC<SideSubMenuItemsProps> = ({
    subMenu,
    parentPath,
}) => {
    return (
        <ul
            className="
                py-3 
                px-6 
                hover:bg-slate-50
            "
        >
            {
                subMenu.map((item, index) => (
                    <li key={index}>
                        <Link
                            className="block"
                            href={`${parentPath}${item.path}`}
                        >
                            {item.title}
                        </Link>
                    </li>
                ))
            }
        </ul>
    )
}

export default SideSubMenuItems;