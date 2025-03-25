"use client";

import React from "react";
import { motion } from "framer-motion";
import Carousel from "../carousel/Carousel";
import Link from "next/link";

// Definimos la animación para todo el bloque
const slideLeftToRight = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Statistics = () => {
  return (
    <section
      className="w-full h-min-screen md:px-6 lg:px-10 xl:px-20 pb-20 flex flex-col xl:space-y-20"
      id="statistics"
    >
      <motion.div
        className="relative"
        variants={slideLeftToRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="w-full text-center text-white text-5xl pb-10">
          <span className="text-[#00AEEF]">N</span>UMBER <span className="text-[#00AEEF]">S</span>
          PEAK <span className="text-[#00AEEF]">F</span>
          OR <span className="text-[#00AEEF]">U</span>S
        </h2>
      </motion.div>
      <motion.div
        className="flex flex-col 2xl:flex-row items-center"
        id="home"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideLeftToRight}
      >
        <motion.div
          className="w-full xl:w-[900px] flex items-center justify-center overflow-hidden mt-6 xl:mt-0 pb-6 px-6"
          variants={slideLeftToRight}
        >
          <Carousel></Carousel>
        </motion.div>
        <motion.div
          className="flex flex-col space-y-6 px-6 max-w-[700px] xl:text-left"
          variants={slideLeftToRight}
        >
          <h1 className="uppercase text-4xl xl:text-[58px] text-white font-semibold max-w-full leading-[2.5rem] xl:leading-[3.5rem]">
            Growth Across <span className="text-[#00AEEF]">Every Metric.</span>
          </h1>
          <h3 className="uppercase text-[32px] xl:text-5xl text-white tracking-wider w-full xl:w-[50rem] leading-[1.75rem] xl:leading-[3.5rem]">
            Our Statistics Speak for Themselves
          </h3>
          <p className="text-white max-w-full xl:max-w-2xl text-sm xl:text-[18px]">
            Over the past year, we&aposve achieved remarkable success across every key metric. From
            a growing number of talented models joining our platform to the substantial earnings
            generated, our performance is a testament to the hard work and dedication of our team.
            With tens of thousands of loyal subscribers and consistent financial growth, we continue
            to set new standards of excellence in the industry.
          </p>
          <Link href="#connect-with-us">
            <button className="btn-pulse bg-[#00AEEF] rounded-full text-white text-sm md:text-lg uppercase w-32 md:w-40 lg:w-48 h-auto p-2">
              Apply Now
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Statistics;
