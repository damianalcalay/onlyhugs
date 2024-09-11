"use client";

import { motion } from "framer-motion";

const slideLeftToRight = {
  hidden: {
    opacity: 0,
    x: -100,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const Statistics = () => {
  return (
    <section id="our-impact">
      <div className="flex flex-col justify-start items-center w-full h-screen space-y-40">
        <motion.div
          className="relative"
          variants={slideLeftToRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center uppercase text-black">
            Numbers Speak for Us.
          </h2>
        </motion.div>

        {/* Animamos el bloque completo */}
        <motion.div
          className="w-full flex items-center justify-center space-x-20 px-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideLeftToRight} // Aplicamos la animación
        >
          {/* Imagen animada */}
          <motion.div
            className="w-[50rem] flex justify-center items-center overflow-hidden shadow-2xl shadow-black transform hover:scale-105 transition-all duration-500 ease-out"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideLeftToRight}
          >
            <img
              src="/assets/charts.png"
              alt="Chart Image"
              className="shadow-2xl"
            />
          </motion.div>

          {/* Texto y botón animados */}
          <motion.div
            className="flex flex-col space-y-6 px-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideLeftToRight}
          >
            <h1 className="uppercase text-[90px] text-black font-semibold max-w-[52rem] leading-[100px]">
              Growth Across Every Metric
            </h1>
            <h3 className="uppercase text-5xl text-black tracking-wider w-[50rem] leading-[3.5rem]">
              Our Statistics Speak for Themselves
            </h3>
            <p className="text-black max-w-xl">
              Over the past year, we&aposve achieved remarkable success across
              every key metric. From a growing number of talented models joining
              our platform to the substantial earnings generated, our
              performance is a testament to the hard work and dedication of our
              team. With tens of thousands of loyal subscribers and consistent
              financial growth, we continue to set new standards of excellence
              in the industry.
            </p>
            <button className="relative bg-transparent rounded-xl border border-black text-black text-2xl uppercase w-48 h-auto p-2 overflow-hidden group">
              <span className="relative z-10">Contact us</span>
              <span className="absolute inset-0 bg-primary transition-transform duration-300 ease-out transform translate-x-[-100%] group-hover:translate-x-0" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Statistics;
