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
    <section id="capabilities" className="pt-28 px-4 md:px-8 lg:px-16">
      <div className="flex flex-col justify-start items-center w-full space-y-12 md:space-y-24 lg:space-y-32">
        <motion.div
          className="relative"
          variants={slideLeftToRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-center uppercase text-black">
            Choose excellence, work with the finest.
          </h2>
        </motion.div>
        <motion.div
          variants={slideLeftToRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16 place-items-center w-full"
        >
          {[
            {
              icon: <FaDollarSign />,
              title: "Maximize Your Earnings",
              description:
                "Let us handle the business, while you focus on creating.",
            },
            {
              icon: <FaHeadset />,
              title: "24/7 Support for You",
              description: "We’re always here, anytime you need us.",
            },
            {
              icon: <FaChartLine />,
              title: "Custom Growth Strategies",
              description: "Tailored plans to grow your fanbase faster.",
            },
            {
              icon: <FaShieldAlt />,
              title: "Privacy and Security First",
              description: "Your identity and content are fully protected.",
            },
            {
              icon: <FaBullhorn />,
              title: "Exclusive Marketing Tools",
              description: "Boost your visibility with pro-level promotion.",
            },
            {
              icon: <FaUsers />,
              title: "Build a Loyal Community",
              description:
                "Create deeper connections with your most devoted fans.",
            },
          ].map(({ icon, title, description }, index) => (
            <div
              key={index}
              className="relative bg-white rounded-lg shadow-md py-8 px-6 transform transition duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2 group overflow-hidden flex flex-col items-center justify-center"
            >
              <div className="text-blue-500 text-3xl md:text-4xl mb-4">
                {icon}
              </div>
              <h2 className="text-xl md:text-2xl font-bold mb-2 text-black text-center">
                {title}
              </h2>
              <p className="text-gray-600 text-center text-sm md:text-base">
                {description}
              </p>
              <span
                className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-500 scale-x-0 group-hover:scale-x-100 
                transition-transform duration-300 ease-out origin-left"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
