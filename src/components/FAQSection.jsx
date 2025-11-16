"use client";

import { useState } from "react";
import { faqs } from "./data";
import { motion, AnimatePresence } from "framer-motion";

export function FAQSection() {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (id) => {
    setOpenItem((prev) => (prev === id ? null : id));
  };

  const iconVariants = {
    closed: { rotate: 0 },
    open: { rotate: 45, transition: { type: "spring", stiffness: 300 } },
  };

  const contentVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <div
      className="w-full max-w-[1200px] mx-auto px-4 lg:px-0 py-12 lg:py-20"
      id="faqs"
    >
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Left side - Header */}
        <div className="w-full lg:w-[575px]">
          <div className="inline-flex px-2.5 py-[5px] rounded-2xl bg-[rgba(0,255,247,0.25)] mb-6">
            <span className="text-[#00FFF7] text-[11px] font-medium uppercase tracking-wide font-mono leading-[13.44px]">
              Frequently Asked Questions
            </span>
          </div>

          <h2 className="text-white text-[32px] leading-[35.2px] font-normal">
            Everything you want to know
          </h2>
        </div>

        {/* Right side - Accordion */}
        <div className="w-full lg:w-[575px] space-y-[10px]">
          {faqs.map((faq) => {
            const isOpen = openItem === faq.id;

            return (
              <motion.div
                key={faq.id}
                className="bg-[#121212] rounded-[10px] overflow-hidden border-none"
                layout
              >
                {/* Trigger */}
                <motion.button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full cursor-pointer px-[15px] py-[15px] text-left flex items-center text-white text-[15px] leading-[19.2px] font-normal group"
                  whileTap={{ scale: 0.97 }}
                >
                  <span>{faq.question}</span>

                  {/* Icon */}
                  <motion.div
                    className="ml-auto pl-4 flex-shrink-0 relative w-5 h-5"
                    animate={isOpen ? "open" : "closed"}
                  >
                    <motion.div
                      className="absolute left-[5px] top-[7px] w-[2px] h-[7px] bg-white rounded-[2px]"
                      variants={iconVariants}
                    />
                    <motion.div
                      className="absolute left-[9px] top-[7px] w-[2px] h-[7px] bg-white rounded-[2px]"
                      variants={iconVariants}
                    />
                  </motion.div>
                </motion.button>

                {/* Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      className="px-[15px] text-[rgba(255,255,255,0.7)] text-[15px] leading-[19.2px] font-normal overflow-hidden"
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={contentVariants}
                    >
                      <div
                        className="pt-2 pb-4"
                        dangerouslySetInnerHTML={{ __html: faq.answer }}
                      ></div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
