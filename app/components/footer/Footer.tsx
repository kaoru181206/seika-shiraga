'use client'

import Link from "next/link";


const Footer: React.FC = () => {
    return (
        <footer>
            <div className="flex justify-between text-sm items-center px-4 md:px-6 lg:px-16 py-6 border-t-[1px] border-gray-200">
                <div>
                    <Link href="https://instagram.com/seika_shiraga.official?igshid=OGQ5ZDc2ODk2ZA==" className="hover:underline">
                        Instagram
                    </Link>
                </div>
                <div>
                    <span className="pr-1">
                        © {new Date().getFullYear()},
                    </span>
                    <Link href="/">Seika Shiraga</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer;