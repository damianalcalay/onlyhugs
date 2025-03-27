"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { createPortal } from "react-dom";
import { FancyButton } from "../buttons/FancyButton";
import { saveFormData } from "@/lib/actions/saveFormData";
import LoadingSpinner from "../buttons/loadingSpinner";

export interface FormData {
  name?: string;
  email?: string;
  creatorType?: "A" | "B" | "C";
  experience?: string;
  socialActivity?: string;
  socials?: string;
  ofLink?: string;
  mainPlatform?: string;
}

type Step = "initial" | "A" | "B" | "C" | "contact" | "thankyou";
type AStep = "experience" | "socialMedia" | "nameEmail";
type BStep = "ofLink" | "socialActivity" | "mainPlatform" | "nameEmail";
type CStep = "ofLink" | "socialActivity" | "mainPlatform" | "nameEmail";

const QuestionnaireModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [formData, setFormData] = useState<FormData>({});
  const [formStep, setFormStep] = useState<Step>("initial");
  const [aStep, setAStep] = useState<AStep>("experience");
  const [bStep, setBStep] = useState<BStep>("ofLink");
  const [cStep, setCStep] = useState<CStep>("ofLink");
  const [fadeKey, setFadeKey] = useState(0);
  const [inputErrors, setInputErrors] = useState<{ [key: string]: string }>({});
  const [isAnimating, setIsAnimating] = useState(false);

  const handleAnimatedSelection = (field: keyof FormData, value: string, nextStep: () => void) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setIsAnimating(true);

    setTimeout(() => {
      setFadeKey(k => k + 1);

      setTimeout(() => {
        nextStep();
        setIsAnimating(false);
      }, 300);
    }, 400);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleOptionClick = (value: "A" | "B" | "C") => {
    setFormData(prev => ({ ...prev, creatorType: value }));
    setFormStep(value);
  };

  const handleClose = () => {
    setFormStep("initial");
    setAStep("experience");
    setBStep("ofLink");
    setCStep("ofLink");
    setFormData({});
    setInputErrors({});
    onClose();
  };

  useEffect(() => {
    if (!isOpen) {
      setFormStep("initial");
      setAStep("experience");
      setBStep("ofLink");
      setCStep("ofLink");
      setInputErrors({});
      setFormData({});
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const creatorOptions = [
    { label: "No - Not at the moment!", value: "A" },
    { label: "Yes - I’m doing it part-time!", value: "B" },
    { label: "Yes - I’m doing it full-time!", value: "C" },
  ];

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center  bg-opacity-70 backdrop-blur-md">
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
            {creatorOptions.map(({ label, value }) => (
              <FancyButton
                key={value}
                selected={formData.creatorType === value}
                onClick={() =>
                  handleAnimatedSelection("creatorType", value as "A" | "B" | "C", () =>
                    handleOptionClick(value as "A" | "B" | "C")
                  )
                }
              >
                {label}
              </FancyButton>
            ))}
          </div>
        )}

        {formStep === "A" && (
          <>
            <AnimatePresence mode="wait">
              <motion.div
                key={fadeKey}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {aStep === "experience" && (
                  <div className="flex flex-col space-y-4">
                    <span className="font-medium">Do you have any experience?</span>
                    {[
                      "No. I have never done this.",
                      "Yes. But it never got serious.",
                      "Yes. I’m doing this full-time.",
                    ].map(option => (
                      <FancyButton
                        key={option}
                        selected={formData.experience === option}
                        onClick={() => {
                          setFormData(prev => ({ ...prev, experience: option }));
                          handleAnimatedSelection("experience", option, () =>
                            setAStep("socialMedia")
                          );
                        }}
                      >
                        {option}
                      </FancyButton>
                    ))}
                  </div>
                )}

                {aStep === "socialMedia" && (
                  <div className="flex flex-col space-y-4">
                    <span className="font-medium">Are you familiar with social media?</span>
                    <textarea
                      name="socials"
                      placeholder="Optional: place your social links here"
                      onChange={handleChange}
                      className="w-full bg-[#1a1a1a] border border-transparent rounded-md px-4 py-2 mt-2 h-[100px] focus:outline-none focus:border-[#00AEEF] placeholder:text-gray-400"
                    />
                    {[
                      "No. I never took socials seriously.",
                      "Yes. But not in a professional way.",
                      "Yes. I know how social media works.",
                    ].map(option => (
                      <FancyButton
                        key={option}
                        selected={formData.socialActivity === option}
                        onClick={() => {
                          setFormData(prev => ({ ...prev, socialActivity: option }));
                          handleAnimatedSelection("socialActivity", option, () =>
                            setAStep("nameEmail")
                          );
                        }}
                      >
                        {option}
                      </FancyButton>
                    ))}
                  </div>
                )}

                {aStep === "nameEmail" && (
                  <>
                    <div className="flex flex-col space-y-2 w-full">
                      <span>What is your name?</span>
                      <input
                        name="name"
                        onChange={handleChange}
                        className={`w-full bg-[#1a1a1a] border rounded-lg px-4 py-2 focus:outline-none placeholder:text-gray-400 ${
                          inputErrors.name
                            ? "border-red-500"
                            : "border-transparent focus:border-[#00AEEF]"
                        }`}
                      />
                      {inputErrors.name && (
                        <span className="text-red-500 text-sm">{inputErrors.name}</span>
                      )}
                    </div>

                    <div className="flex flex-col space-y-2 w-full mt-4">
                      <span>What is your email?</span>
                      <input
                        name="email"
                        onChange={handleChange}
                        className={`w-full bg-[#1a1a1a] border rounded-lg px-4 py-2 focus:outline-none placeholder:text-gray-400 ${
                          inputErrors.email
                            ? "border-red-500"
                            : "border-transparent focus:border-[#00AEEF]"
                        }`}
                      />
                      {inputErrors.email && (
                        <span className="text-red-500 text-sm">{inputErrors.email}</span>
                      )}
                    </div>

                    <div className="flex items-center justify-center mt-6">
                      <button
                        className="w-[200px] bg-[#00AEEF] rounded-md px-4 py-2 flex items-center justify-center"
                        onClick={async () => {
                          const name = formData.name?.trim() || "";
                          const email = formData.email?.trim() || "";
                          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                          const errors: { [key: string]: string } = {};

                          if (!name) {
                            errors.name = "Please enter your name.";
                          }

                          if (!email || !emailRegex.test(email)) {
                            errors.email = "Please enter a valid email address.";
                          }

                          if (Object.keys(errors).length > 0) {
                            setInputErrors(errors);
                            return;
                          }

                          // Sin errores
                          setInputErrors({});

                          const success = await saveFormData(formData);

                          if (success) {
                            handleAnimatedSelection("email", email, () => setFormStep("thankyou"));
                          } else {
                            setInputErrors(prev => ({
                              ...prev,
                              email: "Something went wrong. Please try again.",
                            }));
                          }
                        }}
                      >
                        {isAnimating ? <LoadingSpinner size={18} /> : "Submit"}
                      </button>
                    </div>
                  </>
                )}
              </motion.div>
            </AnimatePresence>
          </>
        )}

        {formStep === "B" && (
          <>
            {bStep === "ofLink" && (
              <div className="flex flex-col space-y-4">
                <label className="font-medium">Can you please link your OnlyFans page?</label>
                <input
                  name="ofLink"
                  placeholder="onlyfans.com/..."
                  onChange={handleChange}
                  className={`w-full bg-[#1a1a1a] border rounded-lg px-4 py-2 focus:outline-none placeholder:text-gray-400 ${
                    inputErrors.ofLink
                      ? "border-red-500"
                      : "border-transparent focus:border-[#00AEEF]"
                  }`}
                  required
                />
                <AnimatePresence mode="wait">
                  {inputErrors.ofLink && (
                    <motion.span
                      key="ofLinkError"
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="text-red-500 text-sm"
                    >
                      {inputErrors.ofLink}
                    </motion.span>
                  )}
                </AnimatePresence>
                <div className="flex justify-center">
                  <button
                    className="w-[200px] bg-[#00AEEF] rounded-md px-4 py-2 flex items-center justify-center"
                    disabled={isAnimating}
                    onClick={() => {
                      const value = formData.ofLink?.trim() || "";

                      if (!value.includes("onlyfans.com/")) {
                        setInputErrors(prev => ({
                          ...prev,
                          ofLink: "Please include a valid OnlyFans link.",
                        }));
                        return;
                      }

                      setInputErrors(prev => ({ ...prev, ofLink: "" }));
                      handleAnimatedSelection("ofLink", value, () => setBStep("socialActivity"));
                    }}
                  >
                    {isAnimating ? <LoadingSpinner size={18} /> : "Next"}
                  </button>
                </div>
              </div>
            )}

            {bStep === "socialActivity" && (
              <div className="flex flex-col space-y-4">
                <label className="font-medium">
                  Are you active on social media? <br />
                  <textarea
                    name="socials"
                    placeholder="Optional social links"
                    onChange={handleChange}
                    className="w-full bg-[#1a1a1a] border border-transparent rounded-md px-4 py-2 mt-2 h-[100px] focus:outline-none focus:border-[#00AEEF] placeholder:text-gray-400"
                  />
                </label>

                {[
                  "No. I never took socials seriously.",
                  "Yes. But not in a professional way.",
                  "Yes. I know how social media works.",
                ].map(option => (
                  <FancyButton
                    key={option}
                    selected={formData.socialActivity === option}
                    onClick={() =>
                      handleAnimatedSelection("socialActivity", option, () =>
                        setBStep("mainPlatform")
                      )
                    }
                  >
                    {option}
                  </FancyButton>
                ))}
              </div>
            )}

            {bStep === "mainPlatform" && (
              <div className="flex flex-col space-y-4">
                <label className="font-medium">What social media do you use the most?</label>
                <input
                  name="mainPlatform"
                  placeholder="Instagram, TikTok, X..."
                  onChange={handleChange}
                  className={`w-full bg-[#1a1a1a] border rounded-lg px-4 py-2 focus:outline-none placeholder:text-gray-400 ${
                    inputErrors.mainPlatform
                      ? "border-red-500"
                      : "border-transparent focus:border-[#00AEEF]"
                  }`}
                />
                {inputErrors.mainPlatform && (
                  <span className="text-red-500 text-sm">{inputErrors.mainPlatform}</span>
                )}
                <div className="flex justify-center">
                  <button
                    className="w-[200px] bg-[#00AEEF] rounded-md px-4 py-2 flex items-center justify-center"
                    disabled={isAnimating}
                    onClick={() => {
                      const value = formData.mainPlatform?.trim() || "";

                      if (value === "") {
                        setInputErrors(prev => ({
                          ...prev,
                          mainPlatform: "Please include at least one social media.",
                        }));
                        return;
                      }

                      setInputErrors(prev => ({ ...prev, mainPlatform: "" }));
                      handleAnimatedSelection("mainPlatform", value, () => setBStep("nameEmail"));
                    }}
                  >
                    {isAnimating ? <LoadingSpinner size={18} /> : "Next"}
                  </button>
                </div>
              </div>
            )}

            {bStep === "nameEmail" && (
              <>
                <div className="flex flex-col space-y-2 w-full">
                  <span>What is your name?</span>
                  <input
                    name="name"
                    onChange={handleChange}
                    className={`w-full bg-[#1a1a1a] border rounded-lg px-4 py-2 focus:outline-none placeholder:text-gray-400 ${
                      inputErrors.name
                        ? "border-red-500"
                        : "border-transparent focus:border-[#00AEEF]"
                    }`}
                  />
                  {inputErrors.name && (
                    <span className="text-red-500 text-sm">{inputErrors.name}</span>
                  )}
                </div>

                <div className="flex flex-col space-y-2 w-full mt-4">
                  <span>What is your email?</span>
                  <input
                    name="email"
                    onChange={handleChange}
                    className={`w-full bg-[#1a1a1a] border rounded-lg px-4 py-2 focus:outline-none placeholder:text-gray-400 ${
                      inputErrors.email
                        ? "border-red-500"
                        : "border-transparent focus:border-[#00AEEF]"
                    }`}
                  />
                  {inputErrors.email && (
                    <span className="text-red-500 text-sm">{inputErrors.email}</span>
                  )}
                </div>

                <div className="flex items-center justify-center mt-6">
                  <button
                    className="w-[200px] bg-[#00AEEF] rounded-md px-4 py-2 flex items-center justify-center"
                    onClick={async () => {
                      const name = formData.name?.trim() || "";
                      const email = formData.email?.trim() || "";
                      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                      const errors: { [key: string]: string } = {};

                      if (!name) {
                        errors.name = "Please enter your name.";
                      }

                      if (!email || !emailRegex.test(email)) {
                        errors.email = "Please enter a valid email address.";
                      }

                      if (Object.keys(errors).length > 0) {
                        setInputErrors(errors);
                        return;
                      }

                      // Sin errores
                      setInputErrors({});

                      const success = await saveFormData(formData);

                      if (success) {
                        handleAnimatedSelection("email", email, () => setFormStep("thankyou"));
                      } else {
                        setInputErrors(prev => ({
                          ...prev,
                          email: "Something went wrong. Please try again.",
                        }));
                      }
                    }}
                  >
                    {isAnimating ? <LoadingSpinner size={18} /> : "Submit"}
                  </button>
                </div>
              </>
            )}
          </>
        )}

        {formStep === "C" && (
          <>
            {cStep === "ofLink" && (
              <div className="flex flex-col space-y-4">
                <label className="font-medium">Can you please link your OnlyFans page?</label>
                <input
                  name="ofLink"
                  placeholder="onlyfans.com/..."
                  onChange={handleChange}
                  className={`w-full bg-[#1a1a1a] border rounded-lg px-4 py-2 focus:outline-none placeholder:text-gray-400 ${
                    inputErrors.ofLink
                      ? "border-red-500"
                      : "border-transparent focus:border-[#00AEEF]"
                  }`}
                  required
                />
                <AnimatePresence mode="wait">
                  {inputErrors.ofLink && (
                    <motion.span
                      key="ofLinkError"
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="text-red-500 text-sm"
                    >
                      {inputErrors.ofLink}
                    </motion.span>
                  )}
                </AnimatePresence>
                <div className="flex justify-center">
                  <button
                    className="w-[200px] bg-[#00AEEF] rounded-md px-4 py-2 flex items-center justify-center"
                    disabled={isAnimating}
                    onClick={() => {
                      const value = formData.ofLink?.trim() || "";

                      if (!value.includes("onlyfans.com/")) {
                        setInputErrors(prev => ({
                          ...prev,
                          ofLink: "Please include a valid OnlyFans link.",
                        }));
                        return;
                      }

                      setInputErrors(prev => ({ ...prev, ofLink: "" }));
                      handleAnimatedSelection("ofLink", value, () => setCStep("socialActivity"));
                    }}
                  >
                    {isAnimating ? <LoadingSpinner size={18} /> : "Next"}
                  </button>
                </div>
              </div>
            )}

            {cStep === "socialActivity" && (
              <div className="flex flex-col space-y-4">
                <label className="font-medium">
                  Are you active on social media? <br />
                  <textarea
                    name="socials"
                    placeholder="Optional social links"
                    onChange={handleChange}
                    className="w-full bg-[#1a1a1a] border border-transparent rounded-md px-4 py-2 mt-2 h-[100px] focus:outline-none focus:border-[#00AEEF] placeholder:text-gray-400"
                  />
                </label>

                {[
                  "No. I never took socials seriously.",
                  "Yes. But not in a professional way.",
                  "Yes. I know how social media works.",
                ].map(option => (
                  <FancyButton
                    key={option}
                    selected={formData.socialActivity === option}
                    onClick={() =>
                      handleAnimatedSelection("socialActivity", option, () =>
                        setCStep("mainPlatform")
                      )
                    }
                  >
                    {option}
                  </FancyButton>
                ))}
              </div>
            )}

            {cStep === "mainPlatform" && (
              <div className="flex flex-col space-y-4">
                <label className="font-medium">What social media do you use the most?</label>
                <input
                  name="mainPlatform"
                  placeholder="Instagram, TikTok, X..."
                  onChange={handleChange}
                  className={`w-full bg-[#1a1a1a] border rounded-lg px-4 py-2 focus:outline-none placeholder:text-gray-400 ${
                    inputErrors.mainPlatform
                      ? "border-red-500"
                      : "border-transparent focus:border-[#00AEEF]"
                  }`}
                />
                {inputErrors.mainPlatform && (
                  <span className="text-red-500 text-sm">{inputErrors.mainPlatform}</span>
                )}
                <div className="flex justify-center">
                  <button
                    className="w-[200px] bg-[#00AEEF] rounded-md px-4 py-2 flex items-center justify-center"
                    disabled={isAnimating}
                    onClick={() => {
                      const value = formData.mainPlatform?.trim() || "";

                      if (value === "") {
                        setInputErrors(prev => ({
                          ...prev,
                          mainPlatform: "Please include at least one social media.",
                        }));
                        return;
                      }

                      setInputErrors(prev => ({ ...prev, mainPlatform: "" }));
                      handleAnimatedSelection("mainPlatform", value, () => setCStep("nameEmail"));
                    }}
                  >
                    {isAnimating ? <LoadingSpinner size={18} /> : "Next"}
                  </button>
                </div>
              </div>
            )}

            {cStep === "nameEmail" && (
              <>
                <div className="flex flex-col space-y-2 w-full">
                  <span>What is your name?</span>
                  <input
                    name="name"
                    onChange={handleChange}
                    className={`w-full bg-[#1a1a1a] border rounded-lg px-4 py-2 focus:outline-none placeholder:text-gray-400 ${
                      inputErrors.name
                        ? "border-red-500"
                        : "border-transparent focus:border-[#00AEEF]"
                    }`}
                  />
                  {inputErrors.name && (
                    <span className="text-red-500 text-sm">{inputErrors.name}</span>
                  )}
                </div>

                <div className="flex flex-col space-y-2 w-full mt-4">
                  <span>What is your email?</span>
                  <input
                    name="email"
                    onChange={handleChange}
                    className={`w-full bg-[#1a1a1a] border rounded-lg px-4 py-2 focus:outline-none placeholder:text-gray-400 ${
                      inputErrors.email
                        ? "border-red-500"
                        : "border-transparent focus:border-[#00AEEF]"
                    }`}
                  />
                  {inputErrors.email && (
                    <span className="text-red-500 text-sm">{inputErrors.email}</span>
                  )}
                </div>

                <div className="flex items-center justify-center mt-6">
                  <button
                    className="w-[200px] bg-[#00AEEF] rounded-md px-4 py-2 flex items-center justify-center"
                    onClick={async () => {
                      const name = formData.name?.trim() || "";
                      const email = formData.email?.trim() || "";
                      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                      const errors: { [key: string]: string } = {};

                      if (!name) {
                        errors.name = "Please enter your name.";
                      }

                      if (!email || !emailRegex.test(email)) {
                        errors.email = "Please enter a valid email address.";
                      }

                      if (Object.keys(errors).length > 0) {
                        setInputErrors(errors);
                        return;
                      }

                      setInputErrors({});

                      const success = await saveFormData(formData);

                      if (success) {
                        handleAnimatedSelection("email", email, () => setFormStep("thankyou"));
                      } else {
                        setInputErrors(prev => ({
                          ...prev,
                          email: "Something went wrong. Please try again.",
                        }));
                      }
                    }}
                  >
                    {isAnimating ? <LoadingSpinner size={18} /> : "Submit"}
                  </button>
                </div>
              </>
            )}
          </>
        )}

        {formStep === "thankyou" && (
          <motion.div
            key="thankyou"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center text-center space-y-4 py-10"
          >
            <h2 className="text-2xl font-bold text-[#00AEEF]">Thank you!</h2>
            <p className="text-white">We’ve received your form and we’ll contact you very soon.</p>
            <button onClick={handleClose} className="w-[200px] bg-[#00AEEF] rounded-md px-4 py-2">
              Close
            </button>
          </motion.div>
        )}
      </motion.div>
    </div>,
    document.body
  );
};

export default QuestionnaireModal;
