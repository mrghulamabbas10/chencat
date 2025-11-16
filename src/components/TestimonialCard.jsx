"use client";

import { Globe } from "lucide-react";
import Twitter from "../assets/Twitter";
import Telegram from "../assets/Telegram";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function TestimonialCard({ testimonial }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const imageVariants = {
    hidden: { opacity: 0, y: 50, scale: 1.1 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.4,
        type: "spring",
        stiffness: 120,
      },
    }),
  };

  return (
    <div
      ref={ref}
      className="w-full lg:w-[1200px] h-auto lg:h-[500px] flex flex-col lg:flex-row mx-auto"
    >
      {/* Left side - Image */}
      <motion.div
        className="w-full lg:w-[400px] h-[400px] lg:h-[500px] relative border-r border-b border-[#1C1C1C]"
        style={{ borderStyle: "dashed", borderWidth: "1px" }}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={imageVariants}
      >
        <div className="absolute inset-1 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-full h-full object-cover scale-125 -translate-x-12 -translate-y-1"
            />
          </div>
        </div>
      </motion.div>

      {/* Right side - Content */}
      <motion.div
        className="w-full lg:w-[800px] h-auto lg:h-[500px] relative border-b border-r border-[#1C1C1C] p-6 lg:p-14"
        style={{ borderStyle: "dashed", borderWidth: "1px" }}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={textVariants}
      >
        {/* Social icons */}
        <div className="flex gap-3 mb-8 lg:mb-12">
          {testimonial.socials.x && (
            <motion.a
              href={testimonial.socials.x}
              className="w-16 h-16 rounded-full bg-[#00E6C5] text-black flex items-center justify-center hover:bg-[#00FFF7] transition-colors"
              custom={0}
              variants={iconVariants}
            >
              <Twitter />
            </motion.a>
          )}
          {testimonial.socials.telegram && (
            <motion.a
              href={testimonial.socials.telegram}
              className="w-16 h-16 rounded-full bg-[#00E6C5] text-black flex items-center justify-center hover:bg-[#00FFF7] transition-colors"
              custom={1}
              variants={iconVariants}
            >
              <Telegram />
            </motion.a>
          )}
          {testimonial.socials.website && (
            <motion.a
              href={testimonial.socials.website}
              className="w-16 h-16 rounded-full bg-[#00E6C5] text-black flex items-center justify-center hover:bg-[#00FFF7] transition-colors"
              custom={2}
              variants={iconVariants}
            >
              <Globe />
            </motion.a>
          )}
        </div>

        {/* Quote */}
        <motion.div
          className="mb-8 lg:mb-12"
          variants={textVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <p className="text-white text-2xl lg:text-[28px] leading-[36.4px] tracking-[-0.28px] max-w-[466px]">
            {testimonial.quote}
          </p>
        </motion.div>

        {/* Name */}
        <motion.div
          className="absolute bottom-6 lg:bottom-14 left-6 lg:left-14"
          variants={textVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <p className="text-white text-2xl leading-[33.6px] tracking-[-0.24px]">
            {testimonial.name}
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
