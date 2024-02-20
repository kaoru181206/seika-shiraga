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
      {/* 1行目 */}
      <div className="relative">
        {/* PC IMG */}
        <Image
          src="/assets/IMG_7412_1.jpg"
          width={2053}
          height={798}
          alt="Top Main PC"
          className="md:block hidden w-full ctm-h-screen object-cover"
          quality={100}
          priority={true}
        />
        {/* Mobile IMG */}
        <Image
          src="/assets/top-main-left.jpg"
          width={1046}
          height={1200}
          alt="Top Main Mobile"
          className="block md:hidden w-full ctm-h-screen object-cover object-top"
          quality={100}
          priority={true}
        />
        <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-full md:w-2/3 lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Image
              src="/assets/seika-shiraga-logo-main.png"
              width={1772}
              height={1181}
              alt="seika-shiraga-logo-main"
              quality={100}
              priority={true}
            />
          </motion.div>
        </div>
      </div>
      {/* 2行目 */}
      <div className="relative">
        <div className="hover:opacity-80 transition-all ease-linear duration-150 cursor-pointer">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row">
              <Link className="relative overflow-hidden w-full md:w-1/2 md:ctm-h-screen h-[50vh]" href="https://seikashiraga.official.ec/">
                <Image
                  src="/assets/IMG_7407_1.jpg"
                  width={1444}
                  height={1926}
                  alt="Top Collection Left"
                  className="object-cover object-top w-full md:ctm-h-screen h-[50vh]"
                  quality={100}
                  priority={true}
                />
                <div className="absolute left-[5%] top-[50%] translate-y-[-50%]">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.6, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-[#FBFBFB] text-base md:text-lg">ONLINE STORE</h2>
                  </motion.div>
                </div>
              </Link>
              <Link className="relative overflow-hidden hidden md:block w-full md:w-1/2 md:ctm-h-screen h-[50vh]" href="/collections/first-collection">
                <Image
                  src="/assets/top-main-left.jpg"
                  width={1046}
                  height={1200}
                  alt="Top Main Left"
                  className="object-cover object-top w-full md:ctm-h-screen h-[50vh]"
                  quality={100}
                  priority={true}
                />
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
              </Link>
              {/* Mobile IMG */}
              <Link className="relative overflow-hidden md:hidden block w-full md:w-1/2 md:ctm-h-screen h-[50vh]" href="/collections/first-collection">
                <Image
                  src="/assets/IMG_7412_1.jpg"
                  width={2053}
                  height={798}
                  alt="Top Collection Mobile"
                  className="object-cover object-left w-full md:ctm-h-screen h-[50vh]"
                  quality={100}
                  priority={true}
                />
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
              </Link>
            </div>
          </motion.div>
        </div>
      </div >
      {/* 3行目 */}
      <div className="relative">
        <div className="hover:opacity-80 transition-all ease-linear duration-150 cursor-pointer">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row">
              <Link className="relative overflow-hidden w-full md:w-1/2 md:ctm-h-screen h-[50vh]" href="/about/about-seika-shiraga">
                <Image
                  src="/assets/S__60383251.jpg"
                  width={1444}
                  height={1926}
                  alt="Top Collection Left"
                  className="object-cover object-top w-full md:ctm-h-screen h-[50vh]"
                  quality={100}
                  priority={true}
                />
                <div className="absolute left-[5%] top-[50%] translate-y-[-50%]">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.6, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-[#FBFBFB] text-base md:text-lg">ABOUT SEIKA SHIRAGA</h2>
                  </motion.div>
                </div>
              </Link>
              <Link className="relative overflow-hidden w-full md:w-1/2 md:ctm-h-screen h-[50vh]" href="/contact">
                <Image
                  src="/assets/S__60383288.jpg"
                  width={2053}
                  height={798}
                  alt="Top Collection Mobile"
                  className="object-cover object-bottom w-full md:ctm-h-screen h-[50vh]"
                  quality={100}
                  priority={true}
                />
                <div className="absolute left-[5%] top-[50%] translate-y-[-50%]">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.6, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-[#FBFBFB] text-base md:text-lg">CONTACT</h2>
                  </motion.div>
                </div>
              </Link>
            </div>
          </motion.div>
        </div>
      </div >
    </PageWrapper >

  )
}
