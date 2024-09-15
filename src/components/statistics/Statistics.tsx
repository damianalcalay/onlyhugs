"use client";

import React from "react";
import { motion } from "framer-motion";

// Definimos la animación para todo el bloque
const slideLeftToRight = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Statistics = () => {
  return (
    <section
      className="w-full h-min-screen md:px-6 lg:px-10 xl:px-20 pb-20 flex flex-col xl:space-y-20"
      id="our-impact"
    >
      <motion.div
        className="relative"
        variants={slideLeftToRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-center uppercase text-black pt-20 pb-8">
          Numbers speak for us
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
          className="w-full xl:w-[100rem] flex items-center justify-center overflow-hidden mt-6 xl:mt-0 pb-6 px-6"
          variants={slideLeftToRight}
        >
          <img
            src="/assets/charts.png"
            alt="Chart Image"
            className="object-cover object-center w-full pt-4 xl:pt-0 xl:px-40 2xl:px-0"
          />
        </motion.div>
        <motion.div
          className="flex flex-col space-y-6 px-6 xl:text-left"
          variants={slideLeftToRight}
        >
          <h1 className="uppercase text-4xl xl:text-[90px] text-black font-semibold max-w-full leading-[2.5rem] xl:leading-[100px]">
            Growth Across Every Metric
          </h1>
          <h3 className="uppercase text-2xl xl:text-5xl text-black tracking-wider w-full xl:w-[50rem] leading-[1.75rem] xl:leading-[3.5rem]">
            Our Statistics Speak for Themselves
          </h3>
          <p className="text-black max-w-full xl:max-w-xl text-sm xl:text-base">
            Over the past year, we&aposve achieved remarkable success across
            every key metric. From a growing number of talented models joining
            our platform to the substantial earnings generated, our performance
            is a testament to the hard work and dedication of our team. With
            tens of thousands of loyal subscribers and consistent financial
            growth, we continue to set new standards of excellence in the
            industry.
          </p>
          <button className="relative bg-transparent rounded-xl border border-black text-black text-base xl:text-2xl uppercase w-32 xl:w-48 h-auto p-2 overflow-hidden group">
            <span className="relative z-10">Contact us</span>
            <span className="absolute inset-0 bg-primary transition-transform duration-300 ease-out transform translate-x-[-100%] group-hover:translate-x-0" />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Statistics;
