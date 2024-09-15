"use client";

import React, { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

// Definimos la animación para todo el bloque
const slideLeftToRight = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const links = [
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
    <section className="w-full h-min-screen md:px-8 lg:px-10 xl:px-20 lg:py-20 flex flex-col xl:space-y-20 ">
      <nav className="flex justify-between items-center p-4 xl:pb-20">
        {/* Links visibles en pantallas grandes */}
        <ul className="hidden lg:flex items-center lg:space-x-6 xl:space-x-10 lg:px-3 xl:px-0">
          {links.map((link) => (
            <li key={link.label} className="relative group inline-block">
              <a
                href={link.href}
                className="md:text-xl lg:text-2xl xl:text-3xl text-black uppercase"
              >
                {link.label}
              </a>
              <span
                className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 
              transition-transform duration-300 ease-out origin-left"
              />
            </li>
          ))}
        </ul>

        {/* Título visible en pantallas grandes */}
        <span className="uppercase text-black md:text-2xl lg:text-4xl xl:text-6xl hidden lg:block">
          ONLYHXGS
        </span>

        {/* Botón del menú hamburguesa visible en pantallas pequeñas */}
        <div className="lg:hidden flex w-full justify-end items-center p-4">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className=" text-black text-3xl "
            aria-label="Toggle menu"
          >
            <FaBars />
          </button>
        </div>

        {/* Menú deslizable visible solo en pantallas pequeñas */}
        <div
          className={`fixed top-0 right-0 h-full w-full bg-white text-black p-6 transform ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out z-50`}
        >
          <button
            onClick={() => setMenuOpen(false)}
            className="text-black text-3xl absolute top-4 right-4"
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
          <span className="text-4xl uppercase absolute bottom-6 left-6">
            ONLYHXGS
          </span>
          <ul className="space-y-6 mt-12">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-2xl uppercase block"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
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
            <div className="flex flex-col xl:flex-row items-start justify-center xl:justify-start space-y-4 xl:space-y-0">
              <img src="/icons/onlyfans.png" alt="" className="w-16 xl:w-20" />
              <h3 className="uppercase text-xl xl:text-3xl text-black font-semibold">
                <Typewriter
                  words={["#1 onlyfans agency"]}
                  loop={1}
                  cursor
                  cursorStyle=""
                  typeSpeed={75}
                  deleteSpeed={50}
                />
              </h3>
            </div>

            <h1 className="uppercase text-4xl xl:text-[90px] text-black font-semibold max-w-full xl:max-w-[38rem] leading-[2.5rem] xl:leading-[100px]">
              <Typewriter
                words={["Work Less. Earn More."]}
                loop={1}
                cursor
                cursorStyle=""
                typeSpeed={75}
                deleteSpeed={50}
              />
            </h1>
            <h3 className="uppercase text-2xl xl:text-5xl text-black tracking-wider w-full xl:w-[50rem] leading-[1.75rem] xl:leading-[3.5rem]">
              The Ultimate Powerhouse in OnlyFans Management
            </h3>
            <p className="text-black max-w-full xl:max-w-xl text-sm xl:text-base">
              Our agency stands out by offering tailored strategies, expert
              guidance, and proven success. We help OnlyFans creators grow their
              audience, increase earnings, and build lasting, impactful brands
              in the industry.
            </p>
            <button className="relative bg-transparent rounded-xl border border-black text-black text-base xl:text-2xl uppercase w-32 xl:w-48 h-auto p-2 overflow-hidden group">
              <span className="relative z-10">Contact us</span>
              <span className="absolute inset-0 bg-primary transition-transform duration-300 ease-out transform translate-x-[-100%] group-hover:translate-x-0" />
            </button>
          </motion.div>

          <motion.div
            className="w-full xl:w-[100rem] flex justify-center items-center overflow-hidden mt-6 xl:mt-0"
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
