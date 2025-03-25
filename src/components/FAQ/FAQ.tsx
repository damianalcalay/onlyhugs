"use client";

import React from "react";
import { motion } from "framer-motion";
import FAQItems from "../FAQItem/FAQItem";

const slideLeftToRight = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const FAQ = () => {
  return (
    <section
      className="w-full h-min-screen md:px-6 lg:px-10 xl:px-20 pb-20 flex flex-col xl:space-y-20"
      id="faq"
    >
      <motion.div
        className="relative"
        variants={slideLeftToRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="w-full text-center text-white text-5xl pb-10">
          <span className="text-[#00AEEF]">F</span>REQUENTLY{" "}
          <span className="text-[#00AEEF]">A</span>SKED <span className="text-[#00AEEF]">Q</span>
          UESTIONS
        </h2>
      </motion.div>
      <div className="w-full">
        <FAQItems />
      </div>
    </section>
  );
};

export default FAQ;
