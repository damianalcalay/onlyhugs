"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Slider from "../slider/Slider";
import QuestionnaireModal from "../questionaireModal.tsx/QuestionaireModal";

// Definimos la animación para todo el bloque
const slideLeftToRight = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const OurWork = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <section
      className="w-full px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32 4xl:px-48 pb-20 flex flex-col space-y-16 xl:space-y-24"
      id="our-work"
    >
      <div className="flex flex-col 2xl:flex-row items-center justify-between gap-10 max-w-[1920px] mx-auto w-full">
        <motion.div
          className="w-full flex flex-col space-y-6 px-2 sm:px-6 2xl:w-1/2 max-w-[840px] text-center 2xl:text-left"
          variants={slideLeftToRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          custom={1}
        >
          <h1 className="uppercase text-3xl sm:text-4xl xl:text-[58px] 4xl:text-[64px] text-white font-semibold leading-tight xl:leading-[3.5rem]">
            CHOOSE <span className="text-[#00AEEF]">EXCELLENCE</span> WORK WITH THE{" "}
            <span className="text-[#008CCF]">FINEST.</span>
          </h1>
          <p className="text-white text-sm sm:text-base xl:text-lg 4xl:text-xl leading-relaxed max-w-4xl mx-auto 2xl:mx-0">
            Our agency stands out by offering tailored marketing strategies, expert guidance and
            proven success. We help OnlyFans creators grow their audience, increase earnings and
            build lasting impactful brands in the industry.
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

        <QuestionnaireModal isOpen={showModal} onClose={() => setShowModal(false)} />

        <motion.div
          className="w-full flex flex-col items-center justify-center space-y-6 px-2 sm:px-6 2xl:w-1/2"
          variants={slideLeftToRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          custom={2}
        >
          <img
            src="/logo/bb-draw.png"
            alt="bb draw logo"
            className="max-w-[220px] w-full object-contain"
          />
          <img
            src="/logo/bb-logo.png"
            alt="bb logo"
            className="max-w-[220px] w-full object-contain"
          />
        </motion.div>
      </div>

      <div className="w-full max-w-[1920px] mx-auto">
        <Slider />
      </div>
    </section>
  );
};

export default OurWork;
