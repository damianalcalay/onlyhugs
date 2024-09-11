"use client";

import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

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
  return (
    <section className="w-full h-min-screen px-20 py-20 flex flex-col space-y-20">
      <nav className="flex justify-between">
        <ul className="flex items-center space-x-10">
          {links.map((link) => (
            <li key={link.label} className="relative group inline-block">
              <a href={link.href} className="text-3xl text-black uppercase">
                {link.label}
              </a>
              <span
                className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 
        transition-transform duration-300 ease-out origin-left"
              />
            </li>
          ))}
        </ul>
        <span className="uppercase text-black text-6xl">Onlyhugs</span>
      </nav>

      {/* Animamos el contenido del Hero */}
      <motion.div
        className="flex items-center"
        id="home"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideLeftToRight}
      >
        <motion.div
          className="flex flex-col space-y-6 px-6"
          variants={slideLeftToRight}
        >
          <h1 className="uppercase text-[90px] text-black font-semibold max-w-[38rem] leading-[100px]">
            <Typewriter
              words={["Work Less. Earn More."]}
              loop={1}
              cursor
              cursorStyle=""
              typeSpeed={75}
              deleteSpeed={50}
            />
          </h1>
          <h3 className="uppercase text-5xl text-black tracking-wider w-[50rem] leading-[3.5rem]">
            The Ultimate Powerhouse in OnlyFans Management
          </h3>
          <p className="text-black max-w-xl">
            Our agency stands out by offering tailored strategies, expert
            guidance, and proven success. We help OnlyFans creators grow their
            audience, increase earnings, and build lasting, impactful brands in
            the industry.
          </p>
          <button className="relative bg-transparent rounded-xl border border-black text-black text-2xl uppercase w-48 h-auto p-2 overflow-hidden group">
            <span className="relative z-10">Contact us</span>
            <span className="absolute inset-0 bg-primary transition-transform duration-300 ease-out transform translate-x-[-100%] group-hover:translate-x-0" />
          </button>
        </motion.div>

        {/* Animación para la imagen */}
        <motion.div
          className="w-[100rem] flex justify-center items-center overflow-hidden"
          variants={slideLeftToRight}
        >
          <img
            src="/assets/statistics.png"
            alt="statistics"
            className="object-cover object-center h-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
