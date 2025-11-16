"use client";

import { values } from "./data";
import { motion } from "framer-motion";

export default function ValuesSection() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3, // one by one animation
      },
    },
  };

  const boxVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="px-4 sm:px-8 lg:px-20 mb-10">
      <motion.div
        className="max-w-[1200px] mx-auto border-t-0 border border-dashed border-[#FFFFFF20] pb-10 px-5"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, idx) => (
            <motion.div
              key={idx}
              className="text-center"
              variants={boxVariants}
            >
              <div className="mb-4">
                <div className="w-8 h-8 bg-chencat-dark rounded-full mx-auto mb-2" />
                <motion.h3
                  className="text-white text-base font-inter mb-2"
                  variants={titleVariants}
                >
                  {value.title}
                </motion.h3>
              </div>
              <p className="text-white/50 text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
