"use client";

import { assets } from "@/public/asstes";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import React, { useContext, useRef, useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { CommandeContext } from "@/context/CommandeProvider";

const Header = () => {
  const ref = useRef<string | any>("");
  const [showMenu, setShowMenu] = useState(false);
  const contextValue = useContext(CommandeContext);

  const handlClick = (e: any) => {
    if (e.target.contains(ref.current)) {
      // do somthing with myRef.current
      setShowMenu(false);
    }
  };

  return (
    <header className="h-14 p-4 md:px-16 lg:h-[8vh] sticky top-0 z-50 py-4 pb-12 text-gray-500 bg-white">
      <div className="flex justify-between items-center">
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image src={assets.logo} alt="logo" quality={100} />
        </motion.div>
        <ul className="gap-4 font-medium hidden lg:flex">
          <motion.li
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <Link href="/">Home</Link>
          </motion.li>
          <motion.li
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.1, delay: 0.1 }}
          >
            <Link href="#meu">Menu</Link>
          </motion.li>
          <motion.li
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.1, delay: 0.2 }}
          >
            <Link href="#mobileapp">Mobile app</Link>
          </motion.li>
          <motion.li
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.1, delay: 0.3 }}
          >
            <Link href="#contactus">Contact us</Link>
          </motion.li>
        </ul>
        <div className="hidden lg:flex items-center gap-6">
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.1, delay: 0.4 }}
          >
            <Image
              className="cursor-pointer"
              src={assets.search_icon}
              alt="logo"
              quality={100}
            />
          </motion.div>
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.1, delay: 0.5 }}
          >
            <Link href="/cart" className="relative">
              <Image
                className="cursor-pointer"
                src={assets.basket_icon}
                alt="logo"
                quality={100}
              />
              {contextValue?.basketList?.list?.length !== 0 && (
                <span className="absolute top-[-5px] right-[-5px]">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orangeColor opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-orangeColor"></span>
                  </span>
                </span>
              )}
            </Link>
          </motion.div>
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.1, delay: 0.6 }}
          >
            <button className="rounded-full text-gray-500 font-medium border border-orangeColor px-8 h-10">
              sign in
            </button>
          </motion.div>
        </div>
        {/* sidebar */}
        <div
          onClick={() => setShowMenu(true)}
          className="w-6 h-5 flex flex-col justify-between items-center lg:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group"
        >
          <span className="w-full h-[2px] bg-orangeColor inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-orangeColor inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-orangeColor inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
        </div>
        {showMenu && (
          <div
            ref={(node) => {
              ref.current = node;
            }}
            onClick={handlClick}
            className="absolute lg:hidden top-0 right-0 w-full h-screen  bg-orangeColor bg-opacity-50 flex flex-col items-end"
          >
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.1 }}
              className="w-[80%] h-full overflow-y-scroll scrollbarHide bg-orangeColor flex flex-col items-center px-4 py-10 relative text-white"
            >
              <MdOutlineClose
                onClick={() => setShowMenu(false)}
                className="text-3xl text-white cursor-pointer hover:text-red-500 absolute top-4 right-4"
              />
              <div className="flex flex-col items-center gap-7 pt-8">
                <ul className="flex flex-col text-base gap-7">
                  <Link
                    href="/"
                    className="flex items-center gap-1 font-medium  hover:text-textGreen cursor-pointer duration-300 nav-link"
                  >
                    <motion.li
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.1, ease: "easeIn" }}
                    >
                      Home
                    </motion.li>
                  </Link>
                  <Link
                    href="#menu"
                    className="flex items-center gap-1 font-medium  hover:text-textGreen cursor-pointer duration-300 nav-link"
                  >
                    <motion.li
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.2, ease: "easeIn" }}
                    >
                      Menu
                    </motion.li>
                  </Link>
                  <Link
                    href="#experience"
                    // onClick={handleScroll}
                    className="flex items-center gap-1 font-medium  hover:text-textGreen cursor-pointer duration-300 nav-link"
                  >
                    <motion.li
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.3, ease: "easeIn" }}
                    >
                      Mobile app
                    </motion.li>
                  </Link>
                  <Link
                    href="#project"
                    // onClick={handleScroll}
                    className="flex items-center gap-1 font-medium  hover:text-textGreen cursor-pointer duration-300 nav-link"
                  >
                    <motion.li
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.4, ease: "easeIn" }}
                    >
                      Contact us
                    </motion.li>
                  </Link>

                  <motion.li
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.2, delay: 0.5, ease: "easeIn" }}
                  >
                    <Image
                      className="cursor-pointer"
                      src={assets.search_icon}
                      alt="logo"
                      quality={100}
                    />
                  </motion.li>
                  <motion.li
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.2, delay: 0.6, ease: "easeIn" }}
                  >
                    <Link href="/cart">
                      <Image
                        className="cursor-pointer"
                        src={assets.basket_icon}
                        alt="logo"
                        quality={100}
                      />
                    </Link>
                  </motion.li>
                  <motion.li
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.2, delay: 0.7, ease: "easeIn" }}
                  >
                    <button className="rounded-full text-gray-500 font-medium border border-white px-8 h-10 text-white">
                      sign in
                    </button>
                  </motion.li>
                </ul>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
