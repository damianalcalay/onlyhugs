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
  contentType: string;
  contentCreationStyle: string;
  experience: string;
  niche: string[];
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
    email: "",
    countryCode: "",
    phone: "",
    message: "",
    termsAccepted: false,
    contentType: "",
    contentCreationStyle: "",
    experience: "",
    niche: [],
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

  const handlePhoneChange = (value: string) => {
    setFormData(prevData => ({
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
    <section id="contact-us" className="pb-20 ">
      <div className="container mx-auto px-4">
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
          className="space-y-6 pt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideLeftToRight}
        >
          <motion.div className="relative" variants={slideLeftToRight}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              required
              className="w-full p-2 text-white border-b-2 bg-black placeholder:text-white rounded-md"
            />
          </motion.div>

          <motion.div className="relative" variants={slideLeftToRight}>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="w-full p-2 text-white border-b-2 bg-black placeholder:text-white rounded-md"
            />
          </motion.div>

          <motion.div className="relative" variants={slideLeftToRight}>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows={4}
              required
              className="w-full p-2 text-white border-b-2 bg-black placeholder:text-white rounded-md"
            ></textarea>
          </motion.div>

          <motion.div className="relative" variants={slideLeftToRight}>
            <PhoneInput
              country={"us"}
              value={formData.phone}
              onChange={handlePhoneChange}
              inputClass="w-full p-2 text-black border-b-2 border-primary focus:outline-none focus:border-primary"
              containerClass="phone-input-container text-black border-primary "
              buttonClass="phone-input-button"
              dropdownClass="phone-input-dropdown"
              enableSearch={true}
            />
          </motion.div>

          <motion.div className="relative" variants={slideLeftToRight}>
            <select
              name="contentType"
              value={formData.contentType}
              onChange={handleChange}
              required
              className="w-full p-2 text-white border-b-2 bg-black placeholder:text-white rounded-md"
            >
              <option value="">Tipo de contenido</option>
              <option value="video">Video</option>
              <option value="fotos">Fotos</option>
              <option value="artículos">Artículos</option>
              <option value="streams en vivo">Streams en vivo</option>
            </select>
          </motion.div>

          <motion.div className="relative" variants={slideLeftToRight}>
            <select
              name="contentCreationStyle"
              value={formData.contentCreationStyle}
              onChange={handleChange}
              required
              className="w-full p-2 text-white border-b-2 bg-black placeholder:text-white rounded-md"
            >
              <option value="">¿Cómo creas contenido?</option>
              <option value="solo">Solo</option>
              <option value="con otra chica">Con otra chica</option>
              <option value="con otro chico">Con otro chico</option>
              <option value="en grupo">En grupo</option>
            </select>
          </motion.div>

          <motion.div className="relative" variants={slideLeftToRight}>
            <select
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              required
              className="w-full p-2 text-white border-b-2 bg-black placeholder:text-white rounded-md"
            >
              <option value="">Experiencia</option>
              <option value="menos de 1 año">Menos de 1 año</option>
              <option value="entre 1 y 2 años">Entre 1 y 2 años</option>
              <option value="más de 2 años">Más de 2 años</option>
            </select>
          </motion.div>

          <motion.div className="relative" variants={slideLeftToRight}>
            <select
              name="niche"
              value={formData.niche}
              onChange={handleChange}
              multiple
              required
              className="w-full p-2 text-white border-b-2 bg-black placeholder:text-white rounded-md"
            >
              <option value="fitness">Fitness</option>
              <option value="lifestyle">Lifestyle</option>
              <option value="moda">Moda</option>
              <option value="tecnología">Tecnología</option>
              <option value="gaming">Gaming</option>
              <option value="viajes">Viajes</option>
            </select>
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
            <label className="text-black">
              I have read and accept the <a href="politica-de-privacidad">privacy policy</a> and{" "}
              <a href="terminos-de-servicio">terms of service</a>.
            </label>
          </motion.div>

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
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
