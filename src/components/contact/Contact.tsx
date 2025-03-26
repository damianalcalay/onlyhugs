"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import "react-phone-input-2/lib/style.css";

interface FormData {
  name: string;
  lastName: string;
  email: string;
  countryCode: string;
  phone: string;
  message: string;
  termsAccepted: boolean;
}

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

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    lastName: "",
    email: "",
    countryCode: "",
    phone: "",
    message: "",
    termsAccepted: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const target = e.target as HTMLInputElement;
      setFormData(prevData => ({
        ...prevData,
        [name]: target.checked,
      }));
    } else if (name === "niche") {
      const selectedOptions = Array.from(
        (e.target as HTMLSelectElement).selectedOptions,
        option => option.value
      );
      setFormData(prevData => ({
        ...prevData,
        [name]: selectedOptions,
      }));
    } else {
      setFormData(prevData => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.termsAccepted) {
      console.log("Form submitted successfully", formData);
    } else {
      alert("Please accept the terms and conditions to submit the form.");
    }
  };

  return (
    <section id="contact-us" className="pb-20 ">
      <div className="container mx-auto px-4 w-full flex flex-col items-center justify-center">
        <motion.div
          className="relative"
          variants={slideLeftToRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="w-full text-center text-white text-5xl pb-10">
            <span className="text-[#00AEEF]">C</span>ONNECT{" "}
            <span className="text-[#00AEEF]">W</span>ITH <span className="text-[#00AEEF]">U</span>S
          </h2>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="glass-vertical border border-[#414141] rounded-xl w-[70rem]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideLeftToRight}
        >
          <motion.div
            variants={slideLeftToRight}
            className="grid grid-cols-1 md:grid-cols-1 gap-y-14 py-10 px-10 w-full"
          >
            <div className="grid grid-cols-2 gap-y-10 gap-x-10">
              <motion.div className="relative  flex flex-col space-y-2" variants={slideLeftToRight}>
                <span>First Name</span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#1a1a1a] border border-transparent rounded-lg px-4 py-3 focus:outline-none focus:border-[#00AEEF] placeholder:text-gray-400  border-[#414141]"
                />
              </motion.div>
              <motion.div className="relative flex flex-col space-y-2" variants={slideLeftToRight}>
                <span>Last Name</span>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#1a1a1a] border border-transparent rounded-lg px-4 py-3 focus:outline-none focus:border-[#00AEEF] placeholder:text-gray-400  border-[#414141]"
                />
              </motion.div>
            </div>

            <motion.div className="relative flex flex-col space-y-2" variants={slideLeftToRight}>
              <span>Your E-mail</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-[#1a1a1a] border border-transparent rounded-lg px-4 py-3 focus:outline-none focus:border-[#00AEEF] placeholder:text-gray-400  border-[#414141]"
              />
            </motion.div>

            <motion.div className="relative flex flex-col space-y-2" variants={slideLeftToRight}>
              <span>Your Phone Number</span>
              <input
                type="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-[#1a1a1a] border border-transparent rounded-lg px-4 py-3 focus:outline-none focus:border-[#00AEEF] placeholder:text-gray-400  border-[#414141]"
              />
            </motion.div>

            <div className="flex flex-col space-y-4">
              <motion.div className="relative flex flex-col space-y-2" variants={slideLeftToRight}>
                <span>Write your enquiry</span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="w-full bg-[#1a1a1a] border border-transparent rounded-lg px-4 py-3 focus:outline-none focus:border-[#00AEEF] placeholder:text-gray-400  border-[#414141]"
                ></textarea>
              </motion.div>

              <motion.div className="flex items-center" variants={slideLeftToRight}>
                <input
                  type="checkbox"
                  name="termsAccepted"
                  checked={formData.termsAccepted}
                  onChange={handleChange}
                  required
                  className="mr-2"
                />
                <label className="text-white">
                  I have read and accept the <a href="politica-de-privacidad">privacy policy</a> and{" "}
                  <a href="terminos-de-servicio">terms of service</a>.
                </label>
              </motion.div>
            </div>

            <motion.div
              className="w-full flex items-center justify-center"
              variants={slideLeftToRight}
            >
              <button
                type="submit"
                className="bg-[#00AEEF] rounded-full text-white text-sm md:text-lg uppercase w-32 md:w-40 lg:w-48 h-auto p-2"
              >
                Apply Now
              </button>
            </motion.div>
          </motion.div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
