'use client'

import Link from "next/link";


const Footer: React.FC = () => {
    return (
        <footer>
            <div 
                className="
                    flex 
                    justify-between 
                    text-sm 
                    text-[#121212BF] 
                    items-center 
                    px-4 
                    md:px-6 
                    lg:px-16 
                    py-6 
                    border-t-[1px] 
                    border-gray-200
                "
            >
                <div>
                    <Link className="hover:text-[#121212]" href="https://instagram.com/seika_shiraga.official?igshid=OGQ5ZDc2ODk2ZA==">
                        Instagram
                    </Link>
                </div>
                <div>
                    <span className="pr-1">
                        © {new Date().getFullYear()},
                    </span>
                    <Link className="hover:text-[#121212]" href="/">
                        Seika Shiraga
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer;