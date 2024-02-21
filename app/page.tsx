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
          src="/assets/top_red_knit_pc.jpg"
          width={2053}
          height={798}
          alt="seika shiraga top main"
          className="sm:block hidden w-full ctm-h-screen object-cover"
          quality={100}
          priority={true}
        />
        {/* Mobile IMG */}
        <Image
          src="/assets/top_denim.jpg"
          width={1046}
          height={1200}
          alt="seika shiraga top main"
          className="block sm:hidden w-full ctm-h-screen object-cover object-top"
          quality={100}
          priority={true}
        />
        <div 
          className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-full md:w-2/3 lg:w-1/2">
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
              alt="seika-shiraga-logo"
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
            <div className="flex flex-col sm:flex-row">
              <Link 
                className="relative overflow-hidden w-full sm:w-1/2 sm:ctm-h-screen h-[50vh]" 
                href="https://seikashiraga.official.ec/"
              >
                <Image
                  src="/assets/top_beige_knit.jpg"
                  width={1444}
                  height={1926}
                  alt="online store"
                  className="object-cover object-top w-full sm:ctm-h-screen h-[50vh]"
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
                    <h2 className="text-[#FBFBFB] text-[15px] sm:text-[17px] font-bold">Online Store</h2>
                  </motion.div>
                </div>
              </Link>
              <Link 
                className="relative overflow-hidden hidden sm:block w-full sm:w-1/2 sm:ctm-h-screen h-[50vh]" 
                href="/collections/first-collection"
              >
                <Image
                  src="/assets/top_denim.jpg"
                  width={1046}
                  height={1200}
                  alt="collection"
                  className="object-cover object-top w-full sm:ctm-h-screen h-[50vh]"
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
                    <h2 className="text-[#FBFBFB] text-[15px] sm:text-[17px] font-bold">Collection</h2>
                  </motion.div>
                </div>
              </Link>
              {/* Mobile IMG */}
              <Link 
                className="relative overflow-hidden sm:hidden block w-full sm:w-1/2 sm:ctm-h-screen h-[50vh]" 
                href="/collections/first-collection"
              >
                <Image
                  src="/assets/top_red_knit_mb.jpg"
                  width={2053}
                  height={798}
                  alt="collection"
                  className="object-cover object-left w-full sm:ctm-h-screen h-[50vh]"
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
                    <h2 className="text-[#FBFBFB] text-[15px] sm:text-[17px] font-bold">Collection</h2>
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
            <div className="flex flex-col sm:flex-row">
              <Link 
                className="relative overflow-hidden w-full sm:w-1/2 sm:ctm-h-screen h-[50vh]" 
                href="/about/about-seika-shiraga"
              >
                <Image
                  src="/assets/top_brown_knit.jpg"
                  width={1444}
                  height={1926}
                  alt="about seika shiraga"
                  className="object-cover object-top w-full sm:ctm-h-screen h-[50vh]"
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
                    <h2 className="text-[#FBFBFB] text-[15px] sm:text-[17px] font-bold">About Seika Shiraga</h2>
                  </motion.div>
                </div>
              </Link>
              <Link 
                className="relative overflow-hidden w-full sm:w-1/2 sm:ctm-h-screen h-[50vh]" 
                href="/contact"
              >
                <Image
                  src="/assets/top_white_shirt.jpg"
                  width={2053}
                  height={798}
                  alt="contact"
                  className="object-cover object-bottom w-full sm:ctm-h-screen h-[50vh]"
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
                    <h2 className="text-[#FBFBFB] text-[15px] sm:text-[17px] font-bold">Contact</h2>
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
