"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

export const slideLeftToRight = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const routes = [
  { label: "Home", href: "#home" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Our Impact", href: "#our-impact" },
  { label: "Connect with Us", href: "#connect-with-us" },
];

const HeroSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  return (
    <section className="w-full h-min-screen md:px-8 lg:px-10 xl:px-20 lg:py-20 flex flex-col xl:space-y-0">
      <nav className="flex justify-between items-center p-4 xl:pb-20">
        <div className="lg:hidden flex w-full justify-end items-center p-4">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className=" text-white text-3xl "
            aria-label="Toggle menu"
          >
            <FaBars />
          </button>
        </div>

        <div
          className={`fixed top-0 right-0 h-full w-full bg-white text-white p-6 transform ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out z-50`}
        >
          <button
            onClick={() => setMenuOpen(false)}
            className="text-white text-3xl absolute top-4 right-4"
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
          <span className="text-4xl uppercase absolute bottom-6 left-6">BLUEBELBET</span>
          <ul className="space-y-6 mt-12">
            {routes.map(route => (
              <li key={route.label}>
                <a
                  href={route.href}
                  className="text-2xl uppercase block"
                  onClick={() => setMenuOpen(false)}
                >
                  {route.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {!menuOpen && (
        <motion.div
          className="flex flex-col xl:flex-row items-center "
          id="home"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideLeftToRight}
        >
          <motion.div
            className="flex flex-col space-y-6 px-6 xl:text-left"
            variants={slideLeftToRight}
          >
            <div className="flex flex-col xl:flex-row items-start justify-center xl:justify-start xl:items-center space-y-4 xl:space-y-0">
              <img src="/icons/onlyfans.png" alt="" className="w-16 xl:w-20" />
              <h3 className="uppercase text-xl xl:text-3xl text-white font-semibold">
                #1 <span className="text-[#00AEEF]">onlyfans</span> agency
              </h3>
            </div>

            <h1 className="uppercase text-4xl xl:text-[90px] text-white font-semibold max-w-full xl:max-w-[38rem] leading-[2.5rem] xl:leading-[100px]">
              Work <span className="text-[#00AEEF]">Less</span>.{" "}
              <span className="text-[#00AEEF]">Earn</span> More.
            </h1>
            <h3 className="uppercase text-2xl xl:text-5xl text-white tracking-wider w-full xl:w-[50rem] leading-[1.75rem] xl:leading-[3.5rem]">
              The Ultimate Powerhouse in <span className="text-[#00AEEF]">OnlyFans Management</span>
            </h3>
            <Link href="#connect-with-us">
              <button className="btn-pulse bg-[#00AEEF] rounded-full text-white text-sm md:text-lg uppercase w-32 md:w-40 lg:w-48 h-auto p-2">
                Apply Now
              </button>
            </Link>
          </motion.div>

          <motion.div
            className="w-full xl:w-[100rem] flex justify-center items-center overflow-hidden mt-6 xl:mt-0 pb-10"
            variants={slideLeftToRight}
          >
            <img
              src="/assets/statistics.png"
              alt="statistics"
              className="object-cover object-center w-80 md:w-[40rem] xl:w-full h-auto xl:h-full mr-10 pt-4 xl:pt-0"
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default HeroSection;
