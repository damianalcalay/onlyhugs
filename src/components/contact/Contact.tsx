"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

interface FormData {
  name: string;
  email: string;
  countryCode: string;
  phone: string;
  message: string;
  termsAccepted: boolean;
}

// Definimos la animación como un variant
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
    email: "",
    countryCode: "+34",
    phone: "",
    message: "",
    termsAccepted: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const target = e.target as HTMLInputElement;
      setFormData((prevData) => ({
        ...prevData,
        [name]: target.checked,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handlePhoneChange = (value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      phone: value,
    }));
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
    <section id="connect-with-us" className="pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="relative"
          variants={slideLeftToRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center uppercase text-black">
            Connect with us.
          </h2>
        </motion.div>

        {/* Aplicamos motion.div con la animación */}
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6 pt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideLeftToRight}
        >
          {/* Name field */}
          <motion.div className="relative" variants={slideLeftToRight}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              required
              className="w-full p-2 text-black border-b-2 border-primary focus:outline-none focus:border-primary"
            />
          </motion.div>

          {/* Email field */}
          <motion.div className="relative" variants={slideLeftToRight}>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="w-full p-2 text-black border-b-2 border-primary focus:outline-none focus:border-primary"
            />
          </motion.div>

          {/* Message field */}
          <motion.div className="relative" variants={slideLeftToRight}>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows={4}
              required
              className="w-full p-2 text-black border-b-2 border-primary focus:outline-none focus:border-primary"
            ></textarea>
          </motion.div>

          {/* Phone field with custom styles */}
          <motion.div className="relative" variants={slideLeftToRight}>
            <PhoneInput
              country={"us"} // País predeterminado
              value={formData.phone}
              onChange={handlePhoneChange}
              inputClass="w-full p-2 text-black border-b-2 border-primary focus:outline-none focus:border-primary"
              containerClass="phone-input-container text-black border-primary" // Clase personalizada para el contenedor
              buttonClass="phone-input-button" // Clase personalizada para el botón de bandera
              dropdownClass="phone-input-dropdown" // Clase personalizada para el desplegable
              enableSearch={true} // Habilitar búsqueda de país
            />
          </motion.div>

          {/* Terms and conditions checkbox */}
          <motion.div className="flex items-center" variants={slideLeftToRight}>
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              required
              className="mr-2"
            />
            <label className="text-black">
              I have read and accept the privacy policy and terms of service.
            </label>
          </motion.div>

          {/* Submit button */}
          <motion.div
            className="w-full flex items-center justify-center"
            variants={slideLeftToRight}
          >
            <button
              className="relative bg-transparent rounded-xl border border-black text-black text-2xl uppercase w-48 h-auto p-2 overflow-hidden group"
              type="submit"
            >
              <span className="relative z-10">Submit</span>
              <span className="absolute inset-0 bg-primary transition-transform duration-300 ease-out transform translate-x-[-100%] group-hover:translate-x-0" />
            </button>
          </motion.div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
