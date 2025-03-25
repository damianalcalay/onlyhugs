"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Slider from "../slider/Slider";

// Definimos la animación para todo el bloque
const slideLeftToRight = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const OurWork = () => {
  return (
    <section
      className="w-full h-min-screen md:px-6 lg:px-10 xl:px-20 pb-20 flex flex-col space-y-20"
      id="our-work"
    >
      <motion.div
        className="relative"
        variants={slideLeftToRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        custom={0}
      >
        <h2 className="w-full text-center text-white text-5xl pb-10">
          <span className="text-[#00AEEF]">O</span>UR <span className="text-[#00AEEF]">W</span>
          ORK
        </h2>
      </motion.div>

      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-10">
        {/* Texto */}
        <motion.div
          className="w-full flex flex-col space-y-6 px-6 xl:text-left"
          variants={slideLeftToRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          custom={1}
        >
          <h1 className="uppercase text-4xl xl:text-[58px] max-w-[700px] text-white font-semibold leading-[2.5rem] xl:leading-[3.5rem]">
            CHOOSE <span className="text-[#00AEEF]">EXCELLENCE</span> WORK WITH THE{" "}
            <span className="text-[#00AEEF]">FINEST.</span>
          </h1>
          <p className="text-white max-w-full xl:max-w-2xl text-sm xl:text-[18px]">
            Our agency stands out by offering tailored marketing strategies, expert guidance and
            proven success. We help OnlyFans creators grow their audience, increase earnings and
            build lasting impactful brands in the industry.
          </p>
          <Link href="#connect-with-us">
            <button className="btn-pulse bg-[#00AEEF] rounded-full text-white text-sm md:text-lg uppercase w-32 md:w-40 lg:w-48 h-auto p-2">
              Apply Now
            </button>
          </Link>
        </motion.div>

        <motion.div
          className="w-full items-center justify-center flex flex-col space-y-6 px-6 xl:text-left"
          variants={slideLeftToRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          custom={2}
        >
          <img src="/logo/bb-draw.png" alt="bb draw logo" className="max-w-64" />
          <img src="/logo/bb-logo.png" alt="bb logo" className="max-w-64" />
        </motion.div>
      </div>
      <Slider></Slider>
    </section>
  );
};

export default OurWork;
