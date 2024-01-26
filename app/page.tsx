'use client'

import { useContext, useEffect } from "react";
import { TglNavClrContext, TglSidebarContext } from "./components/ClientOnly";
import Image from "next/image";
import Link from "next/link";
import PageWrapper from "./components/PageWrapper";
import { motion } from "framer-motion";

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
    <PageWrapper>
      <div className="relative pb-5 md:pb-7">
        <div className="flex h-screen">
          <Image
            src="/assets/top-main-left.jpg"
            width={1046}
            height={1200}
            alt=""
            className="w-full object-cover md:w-1/2"
            priority={true}
          />
          <Image
            src="/assets/top-main-right.jpg"
            width={1046}
            height={1200}
            alt=""
            className="hidden w-1/2 object-cover md:block"
            priority={true}
          />
        </div>
        <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-full md:w-2/3 lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.6, delay: 0.1 }}
          >
            <Image
              src="/assets/seika-shiraga-logo-main.png"
              width={1772}
              height={1181}
              alt="seika-shiraga-logo-main"
            />
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <div className="flex justify-center">
          <h2 className="text-[#121212] text-xs">NEW COLLECTION</h2>
        </div>
      </motion.div>
      <div className="relative pt-5 md:pt-7">
        <Link className="overflow-hidden" href="/collections/first-collection">
          <div className="hover:opacity-80 transition-all ease-linear duration-150 cursor-pointer">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <div className="flex">
                <Image
                  src="/assets/top-collection-left.jpg"
                  width={1444}
                  height={1926}
                  alt=""
                  className="w-full md:w-1/2"
                />
                <Image
                  src="/assets/top-collection-right.jpg"
                  width={1444}
                  height={1926}
                  alt=""
                  className="hidden w-1/2 md:block"
                />
              </div>
            </motion.div>
            <div className="absolute left-[5%] top-[50%] translate-y-[-50%]">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h2 className="text-[#FBFBFB] text-base md:text-lg">COLLECTION</h2>
              </motion.div>
            </div>
          </div>
        </Link>
      </div >
    </PageWrapper >

  )
}
