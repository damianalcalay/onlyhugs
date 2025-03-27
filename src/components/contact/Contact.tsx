"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import "react-phone-input-2/lib/style.css";
import { saveContactFormData } from "@/lib/actions/saveFormDataFromLanding";
import LoadingSpinner from "../buttons/loadingSpinner";

interface FormData {
  name: string;
  lastName: string;
  email: string;
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
  const [isAnimating, setIsAnimating] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    lastName: "",
    email: "",
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsAnimating(true);

    if (!formData.termsAccepted) {
      alert("Please accept the terms and conditions to submit the form.");
      setIsAnimating(false);
      return;
    }

    try {
      const success = await saveContactFormData(formData);

      if (success) {
        setFormData({
          name: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
          termsAccepted: false,
        });
      } else {
        alert("There was an error submitting the form. Please try again.");
      }
    } catch (error) {
      console.error("Unexpected error submitting contact form:", error);
      alert("Unexpected error. Please try again later.");
    } finally {
      setIsAnimating(false);
    }
  };

  return (
    <section id="contact-us" className="pb-20 px-4">
      <div className="w-full max-w-[1440px] mx-auto flex flex-col items-center justify-center">
        <motion.div
          className="relative"
          variants={slideLeftToRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="w-full text-center text-white text-4xl sm:text-5xl pb-10">
            <span className="text-[#00AEEF]">C</span>ONNECT{" "}
            <span className="text-[#00AEEF]">W</span>ITH <span className="text-[#00AEEF]">U</span>S
          </h2>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="glass-vertical border border-[#414141] rounded-xl w-full max-w-5xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideLeftToRight}
        >
          <motion.div
            variants={slideLeftToRight}
            className="grid grid-cols-1 gap-y-12 py-10 px-6 sm:px-10 md:px-16"
          >
            {/* Grid de Nombre y Apellido */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div className="flex flex-col space-y-2" variants={slideLeftToRight}>
                <span>First Name</span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#1a1a1a] border border-[#414141] rounded-lg px-4 py-3 focus:outline-none focus:border-[#00AEEF] placeholder:text-gray-400"
                />
              </motion.div>
              <motion.div className="flex flex-col space-y-2" variants={slideLeftToRight}>
                <span>Last Name</span>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#1a1a1a] border border-[#414141] rounded-lg px-4 py-3 focus:outline-none focus:border-[#00AEEF] placeholder:text-gray-400"
                />
              </motion.div>
            </div>

            {/* Email */}
            <motion.div className="flex flex-col space-y-2" variants={slideLeftToRight}>
              <span>Your E-mail</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-[#1a1a1a] border border-[#414141] rounded-lg px-4 py-3 focus:outline-none focus:border-[#00AEEF] placeholder:text-gray-400"
              />
            </motion.div>

            {/* Teléfono */}
            <motion.div className="flex flex-col space-y-2" variants={slideLeftToRight}>
              <span>Your Phone Number</span>
              <input
                type="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-[#1a1a1a] border border-[#414141] rounded-lg px-4 py-3 focus:outline-none focus:border-[#00AEEF] placeholder:text-gray-400"
              />
            </motion.div>

            {/* Mensaje y Términos */}
            <div className="flex flex-col space-y-6">
              <motion.div className="flex flex-col space-y-2" variants={slideLeftToRight}>
                <span>Write your enquiry</span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="w-full bg-[#1a1a1a] border border-[#414141] rounded-lg px-4 py-3 focus:outline-none focus:border-[#00AEEF] placeholder:text-gray-400"
                />
              </motion.div>

              <motion.div className="flex items-start gap-2" variants={slideLeftToRight}>
                <input
                  type="checkbox"
                  name="termsAccepted"
                  checked={formData.termsAccepted}
                  onChange={handleChange}
                  required
                  className="mt-1"
                />
                <label className="text-white text-sm sm:text-base leading-relaxed">
                  I have read and accept the{" "}
                  <a href="politica-de-privacidad" className="underline text-[#00AEEF]">
                    privacy policy
                  </a>{" "}
                  and{" "}
                  <a href="terminos-de-servicio" className="underline text-[#00AEEF]">
                    terms of service
                  </a>
                  .
                </label>
              </motion.div>
            </div>

            {/* Botón */}
            <motion.div
              className="w-full flex items-center justify-center"
              variants={slideLeftToRight}
            >
              <button
                type="submit"
                disabled={isAnimating}
                className="bg-[#00AEEF] rounded-full text-white text-sm md:text-lg uppercase w-32 md:w-40 lg:w-48 h-auto p-2 flex items-center justify-center"
              >
                {isAnimating ? <LoadingSpinner size={18} /> : "Submit"}
              </button>
            </motion.div>
          </motion.div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
