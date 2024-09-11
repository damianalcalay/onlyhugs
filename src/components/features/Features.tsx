"use client";
import {
  FaBullhorn,
  FaChartLine,
  FaDollarSign,
  FaHeadset,
  FaShieldAlt,
  FaUsers,
} from "react-icons/fa";
import { motion } from "framer-motion";

const slideLeftToRight = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

const Features = () => {
  return (
    <section id="capabilities" className="pt-28">
      <div className="flex flex-col justify-start items-center w-full h-screen space-y-40">
        <motion.div
          className="relative"
          variants={slideLeftToRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center uppercase text-black">
            Choose excellence, work with the finest.
          </h2>
        </motion.div>
        <motion.div
          variants={slideLeftToRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-6 md:grid-cols-2 lg:grid-cols-3 gap-y-20 place-items-center place-content-center w-full px-64"
        >
          <div className="relative bg-white rounded-lg shadow-2xl py-10 px-4 w-[26rem] h-[14rem] transform transition duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 group overflow-hidden flex flex-col items-center justify-center">
            <div className="text-blue-500 text-4xl mb-4">
              <FaDollarSign />
            </div>
            <h2 className="text-2xl font-bold mb-2 text-black text-center">
              Maximize Your Earnings
            </h2>
            <p className="text-gray-600 text-center">
              Let us handle the business, while you focus on creating.
            </p>
            <span
              className="absolute left-0 bottom-0 w-full h-[4px] bg-blue-500 scale-x-0 group-hover:scale-x-100 
            transition-transform duration-300 ease-out origin-left"
            />
          </div>
          <div className="relative bg-white rounded-lg shadow-2xl py-10 px-4 w-[26rem] h-[14rem] transform transition duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 group overflow-hidden flex flex-col items-center justify-center">
            <div className="text-blue-500 text-4xl mb-4">
              <FaHeadset />
            </div>
            <h2 className="text-2xl font-bold mb-2 text-black text-center">
              24/7 Support for You
            </h2>
            <p className="text-gray-600 text-center">
              We’re always here, anytime you need us.
            </p>
            <span
              className="absolute left-0 bottom-0 w-full h-[4px] bg-blue-500 scale-x-0 group-hover:scale-x-100 
            transition-transform duration-300 ease-out origin-left"
            />
          </div>
          <div className="relative bg-white rounded-lg shadow-2xl py-10 px-4 w-[26rem] h-[14rem] transform transition duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 group overflow-hidden flex flex-col items-center justify-center">
            <div className="text-blue-500 text-4xl mb-4">
              <FaChartLine />
            </div>
            <h2 className="text-2xl font-bold mb-2 text-black text-center">
              Custom Growth Strategies
            </h2>
            <p className="text-gray-600 text-center">
              Tailored plans to grow your fanbase faster.
            </p>
            <span
              className="absolute left-0 bottom-0 w-full h-[4px] bg-blue-500 scale-x-0 group-hover:scale-x-100 
            transition-transform duration-300 ease-out origin-left"
            />
          </div>
          <div className="relative bg-white rounded-lg shadow-2xl py-10 px-4 w-[26rem] h-[14rem] transform transition duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 group overflow-hidden flex flex-col items-center justify-center">
            <div className="text-blue-500 text-4xl mb-4">
              <FaShieldAlt />
            </div>
            <h2 className="text-2xl font-bold mb-2 text-black text-center">
              Privacy and Security First
            </h2>
            <p className="text-gray-600 text-center">
              Your identity and content are fully protected.
            </p>
            <span
              className="absolute left-0 bottom-0 w-full h-[4px] bg-blue-500 scale-x-0 group-hover:scale-x-100 
            transition-transform duration-300 ease-out origin-left"
            />
          </div>
          <div className="relative bg-white rounded-lg shadow-2xl py-10 px-4 w-[26rem] h-[14rem] transform transition duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 group overflow-hidden flex flex-col items-center justify-center">
            <div className="text-blue-500 text-4xl mb-4">
              <FaBullhorn />
            </div>
            <h2 className="text-2xl font-bold mb-2 text-black text-center">
              Exclusive Marketing Tools
            </h2>
            <p className="text-gray-600 text-center">
              Boost your visibility with pro-level promotion.
            </p>
            <span
              className="absolute left-0 bottom-0 w-full h-[4px] bg-blue-500 scale-x-0 group-hover:scale-x-100 
            transition-transform duration-300 ease-out origin-left"
            />
          </div>
          <div className="relative bg-white rounded-lg shadow-2xl py-10 px-4 w-[26rem] h-[14rem] transform transition duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 group overflow-hidden flex flex-col items-center justify-center">
            <div className="text-blue-500 text-4xl mb-4">
              <FaUsers />
            </div>
            <h2 className="text-2xl font-bold mb-2 text-black text-center">
              Build a Loyal Community
            </h2>
            <p className="text-gray-600 text-center">
              Create deeper connections with your most devoted fans.
            </p>
            <span
              className="absolute left-0 bottom-0 w-full h-[4px] bg-blue-500 scale-x-0 group-hover:scale-x-100 
            transition-transform duration-300 ease-out origin-left"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
