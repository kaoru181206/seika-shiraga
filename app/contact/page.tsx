'use client'

import Link from "next/link"
import { TglNavClrContext } from "../components/ClientOnly";
import { useContext, useEffect } from "react";

export default function Contact() {
    // Navbar Context
    const {setTglNavClr} = useContext(TglNavClrContext);

    useEffect(() => {
        setTglNavClr(true);
    }, [])

    return (
        <div className="w-full text-[#121212] items-center justify-between pt-36 px-[10%] md:px-[20%] lg:px-[30%]">
            <div className="items-center mb-6">
                <h1>CONTACT</h1>
            </div>
            <ul>
                <li className="mb-4">
                    <Link href="mailto:contact@seikashiraga.com?subject=For%20SeikaShiraga">contact@seikashiraga.com</Link>
                </li>
                <li className="text-sm">
                    ご返信までにお時間がかかる場合がございます。<br />
                    何卒ご理解をいただけますようお願い申し上げます。
                </li>
            </ul>
        </div>
    )
}