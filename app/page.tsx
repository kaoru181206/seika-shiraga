'use client'

import { useContext, useEffect } from "react";
import { TglNavClrContext, TglSidebarContext } from "./components/ClientOnly";
import Image from "next/image";
import Link from "next/link";

export default function Home() {

  // Navbar Context
  const { setTglNavClr } = useContext(TglNavClrContext);
  // Sidebar Context
  const { setTglSidebar } = useContext(TglSidebarContext);

  useEffect(() => {
    setTglNavClr(false);
    setTglSidebar(false);
  }, []);

  return (
    <>
      <div className="relative pb-5 md:pb-7">
        <div className="flex h-screen">
          <Image
            src="/assets/Collection_main_1c.jpg"
            width={1046}
            height={1200}
            alt=""
            className="w-full object-cover md:w-1/2"
          />
          <Image
            src="/assets/IMG_7043.jpg"
            width={1046}
            height={1200}
            alt=""
            className="hidden w-1/2 object-cover md:block"
          />
        </div>
        <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-full md:w-2/3 lg:w-1/2">
          <Image
            src="/assets/seika-shiraga-logo-main.png"
            width={1772}
            height={1181}
            alt="seika-shiraga-logo-main"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <h2 className="text-[#121212] text-xs">NEW COLLECTION</h2>
      </div>
      <div className="relative pt-5 md:pt-7">
        <Link className="overflow-hidden" href="/collections/first-collection">
          <div className="hover:opacity-80 transition-all ease-linear duration-150 cursor-pointer">
            <div className="flex">
              <Image
                src="/assets/2023-10-30-SeikaShiraga0773.jpg"
                width={5464}
                height={7285}
                alt=""
                className="w-full md:w-1/2"
              />
              <Image
                src="/assets/2023-10-30-SeikaShiraga1247.jpg"
                width={5464}
                height={7285}
                alt=""
                className="hidden w-1/2 md:block"
              />
            </div>
            <div className="absolute left-[5%] top-[50%] translate-y-[-50%]">
              <h2 className="text-[#FBFBFB] text-base md:text-lg">COLLECTION</h2>
            </div>
          </div>
        </Link>
      </div>
    </>

  )
}
