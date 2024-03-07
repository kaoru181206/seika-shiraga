import Link from "next/link";

interface MenuItemProps {
    groupName: string | null;
    path: string;
    label: string;
    childLabel: string | null;
}

const MenuItem: React.FC<MenuItemProps> = ({
    groupName,
    path,
    label,
    childLabel,
}) => {
    return (
        <div
            className={`
                ${groupName && `group/${groupName}`}
                px-4 py-[30px]
            `}
        >
            <Link className="hover:text-[#121212]" href={`${!groupName && `${path}` }`}>
                {label}
            </Link>
            { groupName && (
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
                    group-hover/${groupName}:block
                    hover:block 
                `}
                >
                    <ul className="">
                        <li>
                            <Link className="hover:text-[#121212]" href={path}>
                                {childLabel}
                            </Link>
                        </li>
                    </ul>
                </div>
            )}

        </div>
    )
}

export default MenuItem;