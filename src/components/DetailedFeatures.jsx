"use client";

import { detailedFeatures } from "./data";
import { Check } from "lucide-react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function DetailedFeatures() {
  return (
    <section className="px-4 sm:px-8 lg:px-20 pt-20" id="ExploreEcosystem">
      <div className="max-w-[1320px] mx-auto space-y-0">
        {detailedFeatures.map((feature) => (
          <FeatureCard key={feature.id} feature={feature} />
        ))}
      </div>
    </section>
  );
}

function FeatureCard({ feature }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const controls = useAnimation();

  if (inView) controls.start("visible");

  const imageVariants = {
    hidden: { scale: 0, opacity: 0 }, // start from 0 scale
    visible: {
      scale: 1, // animate to actual size
      opacity: 1,
      transition: { duration: 2, ease: "easeOut" },
    },
  };

  const labelVariants = {
    hidden: { backgroundPosition: "0%" },
    visible: {
      backgroundPosition: "100%",
      transition: { duration: 2, repeat: Infinity, repeatType: "reverse" },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const listVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 lg:grid-cols-2 border border-dashed border-[#FFFFFF20] ${
        feature.reverse ? "lg:flex-row-reverse " : ""
      }`}
    >
      {!feature.reverse ? (
        <>
          {/* Text Column */}
          <div className="flex flex-col justify-center p-8 lg:p-12 border border-dashed border-[#FFFFFF20] md:order-1 order-2">
            {/* Label */}
            <motion.div
              className={`inline-flex items-center gap-2 rounded-2xl px-3 py-1 mb-6 w-fit bg-gradient-to-r from-[#00E6C5] via-[#D85CE0] to-[#00E6C5] bg-clip-text text-transparent`}
              variants={labelVariants}
              initial="hidden"
              animate={controls}
            >
              <span className="text-xs font-geist-mono font-medium uppercase tracking-wider">
                {feature.label}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h3
              className="text-white text-3xl sm:text-4xl font-inter mb-4 leading-tight"
              variants={titleVariants}
              initial="hidden"
              animate={controls}
            >
              {feature.title}
            </motion.h3>

            {/* Description */}
            <p className="text-white/50 text-base mb-8 leading-relaxed">
              {feature.description}
            </p>

            {/* Checks List */}
            <div className="space-y-3">
              {feature.checks.map((check, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-center gap-3"
                  custom={idx}
                  initial="hidden"
                  animate={controls}
                  variants={listVariants}
                >
                  <div
                    className={`w-8 h-8 ${feature.iconColor} rounded flex items-center justify-center flex-shrink-0`}
                  >
                    <Check className="w-5 h-5 text-[#00E6C5]" />
                  </div>
                  <span className="text-white text-base">{check}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Image Column */}
          <motion.div
            className="bg-black rounded-lg overflow-hidden relative min-h-[400px] lg:min-h-[650px] md:order-2 order-1"
            variants={imageVariants}
            initial="hidden"
            animate={controls}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/80 z-10" />
            <img
              src={feature.image}
              alt={feature.title}
              className="w-full h-full object-cover opacity-80"
            />
          </motion.div>
        </>
      ) : (
        <>
          {/* Image Column */}
          <motion.div
            className="bg-black rounded-lg overflow-hidden relative min-h-[400px] lg:min-h-[650px] lg:order-1 border border-dashed border-[#FFFFFF20]"
            variants={imageVariants}
            initial="hidden"
            animate={controls}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/80 z-10" />
            <img
              src={feature.image}
              alt={feature.title}
              className="w-full h-full object-cover opacity-80"
            />
          </motion.div>

          {/* Text Column */}
          <div className="flex flex-col justify-center p-8 lg:p-12 lg:order-2">
            {/* Label */}
            <motion.div
              className={`inline-flex items-center gap-2 rounded-2xl px-3 py-1 mb-6 w-fit bg-gradient-to-r from-[#D85CE0] via-[#00E6C5] to-[#D85CE0] bg-clip-text text-transparent`}
              variants={labelVariants}
              initial="hidden"
              animate={controls}
            >
              <span className="text-xs font-geist-mono font-medium uppercase tracking-wider">
                {feature.label}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h3
              className="text-white text-3xl sm:text-4xl font-inter mb-4 leading-tight"
              variants={titleVariants}
              initial="hidden"
              animate={controls}
            >
              {feature.title}
            </motion.h3>

            {/* Description */}
            <p className="text-white/50 text-base mb-8 leading-relaxed">
              {feature.description}
            </p>

            {/* Checks List */}
            <div className="space-y-3">
              {feature.checks.map((check, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-center gap-3"
                  custom={idx}
                  initial="hidden"
                  animate={controls}
                  variants={listVariants}
                >
                  <div
                    className={`w-8 h-8 ${feature.iconColor} rounded flex items-center justify-center flex-shrink-0`}
                  >
                    <Check className="w-5 h-5 text-[#D85CE0]" />
                  </div>
                  <span className="text-white text-base">{check}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
