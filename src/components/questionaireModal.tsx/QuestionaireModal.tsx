"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";

const QuestionnaireModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [formStep, setFormStep] = useState<"initial" | "A" | "B" | "C" | "contact">("initial");
  const [formData, setFormData] = useState<any>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleOptionClick = (value: "A" | "B" | "C") => {
    setFormData((prev: any) => ({ ...prev, creatorType: value }));
    setFormStep(value);
  };

  const handleSubmitStep = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStep("contact");
  };

  const handleClose = () => {
    setFormStep("initial");
    setFormData({});
    onClose();
  };

  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center  bg-opacity-70 backdrop-blur-md"
      onClick={handleClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="p-6 rounded-xl max-w-2xl w-full shadow-xl relative bg-[#0e0e0e] text-white"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-2 right-4 text-white text-xl font-bold"
        >
          &times;
        </button>

        {formStep === "initial" && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold mb-4">Are you an OnlyFans content creator?</h2>
            <button
              onClick={() => handleOptionClick("A")}
              className="w-full bg-[#00AEEF] rounded-md px-4 py-2"
            >
              No - Not at the moment!
            </button>
            <button
              onClick={() => handleOptionClick("B")}
              className="w-full bg-[#00AEEF] rounded-md px-4 py-2"
            >
              Yes - I’m doing it part-time!
            </button>
            <button
              onClick={() => handleOptionClick("C")}
              className="w-full bg-[#00AEEF] rounded-md px-4 py-2"
            >
              Yes - I’m doing it full-time!
            </button>
          </div>
        )}

        {(formStep === "A" || formStep === "B" || formStep === "C") && (
          <form onSubmit={handleSubmitStep} className="flex flex-col space-y-6 mt-4">
            {formStep === "A" && (
              <>
                <div className="flex flex-col space-y-2 w-full">
                  <span>Do you have any experience?</span>
                  <textarea
                    name="experience"
                    onChange={handleChange}
                    className="w-full bg-[#1a1a1a] border border-transparent rounded-lg px-4 py-2  h-[120px] focus:outline-none focus:border-[#00AEEF] placeholder:text-gray-40"
                  />
                </div>
                <div className="flex flex-col space-y-2 w-full">
                  <span>Are you familiar with social media? Optional: links here!</span>
                  <textarea
                    name="socials"
                    onChange={handleChange}
                    className="w-full bg-[#1a1a1a] border border-transparent rounded-lg px-4 py-2  h-[120px] focus:outline-none focus:border-[#00AEEF] placeholder:text-gray-40"
                  />
                </div>
                <div className="flex items-center justify-center space-x-6">
                  <div className="flex flex-col space-y-2 w-full">
                    <span>What is your name?</span>
                    <input
                      name="name"
                      onChange={handleChange}
                      className="w-full bg-[#1a1a1a] border border-transparent rounded-lg px-4 py-2 focus:outline-none focus:border-[#00AEEF] placeholder:text-gray-40"
                    />
                  </div>
                  <div className="flex flex-col space-y-2 w-full">
                    <span>What is your email?</span>
                    <input
                      name="email"
                      onChange={handleChange}
                      className="w-full bg-[#1a1a1a] border border-transparent rounded-lg px-4 py-2  focus:outline-none focus:border-[#00AEEF] placeholder:text-gray-40"
                    />
                  </div>
                </div>
              </>
            )}
            {(formStep === "B" || formStep === "C") && (
              <>
                <input
                  name="ofLink"
                  placeholder="Link your OnlyFans page"
                  onChange={handleChange}
                  className="input"
                  required
                />
                <input
                  name="socials"
                  placeholder="What social media do you use the most? Optional: links here!"
                  onChange={handleChange}
                  className="input"
                />
                <input
                  name="email"
                  placeholder="Leave your e-mail here"
                  onChange={handleChange}
                  className="input"
                  required
                />
              </>
            )}
            <div className=" col-span-2 flex items-center justify-center">
              <button type="submit" className="w-[200px] bg-[#00AEEF] rounded-md px-4 py-2 mt-2">
                Next
              </button>
            </div>
          </form>
        )}

        {formStep === "contact" && (
          <div className="mt-4">
            <p className="text-sm text-gray-400 mb-2">Contact form goes here ↓</p>
            <pre className="text-xs text-white bg-[#111] p-2 rounded-md overflow-auto">
              {JSON.stringify(formData, null, 2)}
            </pre>
          </div>
        )}
      </motion.div>
    </div>,
    document.body
  );
};

export default QuestionnaireModal;

// Extra: usa esta clase en tu CSS para los inputs si usas Tailwind
// .input {
//   @apply w-full bg-[#1a1a1a] border border-transparent rounded-lg px-4 py-3 focus:outline-none focus:border-[#00AEEF] placeholder:text-gray-400;
// }
