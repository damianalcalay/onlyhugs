"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Carousel from "../carousel/Carousel";
import QuestionnaireModal from "../questionaireModal.tsx/QuestionaireModal";

const slideLeftToRight = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Statistics = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <section
      className="w-full px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32 4xl:px-48 pb-20 flex flex-col space-y-16 xl:space-y-24"
      id="statistics"
    >
      <motion.div
        className="relative"
        variants={slideLeftToRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      ></motion.div>

      <motion.div
        className="flex flex-col 2xl:flex-row items-center justify-between max-w-[1920px] w-full mx-auto gap-12"
        id="home"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideLeftToRight}
      >
        {/* Carrusel */}
        <motion.div
          className="w-full 2xl:w-1/2 flex items-center justify-center overflow-hidden mt-6 xl:mt-0 px-2 sm:px-6"
          variants={slideLeftToRight}
        >
          <Carousel />
        </motion.div>

        {/* Texto */}
        <motion.div
          className="flex flex-col space-y-6 px-2 sm:px-6 2xl:w-1/2 max-w-[840px] text-center 2xl:text-left"
          variants={slideLeftToRight}
        >
          <h1 className="uppercase text-3xl sm:text-4xl xl:text-[56px] 4xl:text-[64px] text-white font-semibold leading-tight sm:leading-snug xl:leading-[3.75rem]">
            Growth Across <span className="text-[#00AEEF]">Every Metric.</span>
          </h1>

          <h3 className="uppercase text-2xl sm:text-3xl xl:text-5xl text-white tracking-wide leading-snug xl:leading-[3.5rem]">
            Our Statistics Speak for Themselves
          </h3>

          <p className="text-white text-sm sm:text-base xl:text-lg 4xl:text-xl leading-relaxed max-w-4xl mx-auto 2xl:mx-0">
            Over the past year, we&apos;ve achieved remarkable success across every key metric. From
            a growing number of talented models joining our platform to the substantial earnings
            generated, our performance is a testament to the hard work and dedication of our team.
            With tens of thousands of loyal subscribers and consistent financial growth, we continue
            to set new standards of excellence in the industry.
          </p>

          <div className="w-full flex justify-center 2xl:justify-start">
            <button
              onClick={() => setShowModal(true)}
              className="btn-pulse bg-[#00AEEF] rounded-full text-white text-sm md:text-lg uppercase w-32 md:w-40 lg:w-48 h-auto p-2"
            >
              Apply Now
            </button>
          </div>
        </motion.div>
      </motion.div>

      <QuestionnaireModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </section>
  );
};

export default Statistics;
