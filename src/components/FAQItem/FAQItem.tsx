"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";
import { slideLeftToRight } from "../hero/Hero";

export const faqs = [
  {
    question: "What does an OnlyFans agency do?",
    answer:
      "Management agencies work with creators to help them establish a personal brand that will drive subscription sales. Aside from that they take care of monetization, finance management, SEO, fan interactions, and much more.",
  },
  {
    question: "Do I need an agency?",
    answer:
      "Yes and no.\nWithout an agency you have to work 24/7. You’ll have to find all trends by yourself, create a niche, build your own brand and create all posts on all platforms with no one to help you with the structure. Many models try to be successful on their own for months, earning only $500-$2000.",
  },
  {
    question: "I don’t have OnlyFans yet, can I still work with Blue Belvet?",
    answer:
      "The answer is YES! Every model, influencer or those who want to become a professional creator and earn money with OnlyFans can apply to work with us. We will guide you through the process with detailed instructions and proven strategies to help you become a successful creator.",
  },
  {
    question: "How can I get started?",
    answer:
      "Before we decide to work with you, we would like to get to know you. What are your goals. Do you have enough time and most important: Do you really want it? Most people don't commit 100%, and that's why they never achieve their goals.\nTo check all this we have a free initial form so you can contact us. You can also book an initial call and we can get started.",
  },
  {
    question: "How often do I have to provide content?",
    answer:
      "Ideally, at least one to three new photos per day and 1 to 2 videos every two weeks. However, you can also pre-produce everything on one day a week. As you prefer.\nIf your fans want a custom photo or video, then it can be more. BUT you’ll get so much money for these pictures that you will be happy to provide them.",
  },
  {
    question: "How much time do I have to invest?",
    answer:
      "Usually you only need about 1–2 hours per day to create content, we’ll do the rest. Also it depends how serious you want to take the job: The more you spend, the more you win.",
  },
  {
    question: "How long does it take to see the first results?",
    answer:
      "It depends on your current social media presence. Without followers, it is possible to earn $10,000 after just 2–3 weeks.",
  },
  {
    question: "What do Blue Belvet have to offer?",
    answer:
      "We offer an all-inclusive package that is specially customized for you:\n• 24/7 Custom chat support.\n• Advice and assistance with content creation.\n• Account strategy in every platform.\n• Content Management.\n• Fan acquisition.\n• OnlyFans Account Management.\n• Social Media Consulting and Management.\n• Viral strategies.\n• Weekly Account Audit.",
  },
  {
    question: "How often will we communicate?",
    answer:
      "We're here for you around the clock, whether you prefer daily conversations or weekly check-ins, all managed through a convenient group chat platform. With our abundant resources and efficient systems, we guarantee high productivity and tailored attention.",
  },
  {
    question: "What costs are involved?",
    answer:
      "We believe in mutual success. We believe in a 'profit first, pay later' model - no upfront fees. We earn only when you do. This fosters shared objectives, and reaffirms our commitment to your profitable success.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-6 py-10">
      {faqs.map((faq, index) => (
        <motion.div
          key={index}
          className="bg-[#1a1a1a] rounded-xl p-6 text-white shadow-md"
          variants={slideLeftToRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          custom={index}
        >
          <button
            onClick={() => toggleFAQ(index)}
            className="flex items-center justify-between w-full text-left"
          >
            <span className="font-medium text-lg">{faq.question}</span>
            <span className="text-white">{openIndex === index ? <FaMinus /> : <FaPlus />}</span>
          </button>

          <AnimatePresence initial={false}>
            {openIndex === index && (
              <motion.div
                key="content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="mt-4 text-sm text-gray-300 whitespace-pre-line">{faq.answer}</div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};

export default FAQ;
