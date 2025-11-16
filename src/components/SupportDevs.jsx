"use client";

import React from "react";
import PixelBlast from "./Animation/PixelBlast";
import { motion } from "framer-motion";

export default function SupportDevs() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // stagger each child animation
      },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const descriptionVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative md:px-0 px-5 overflow-hidden" id="chencat">
      <motion.div
        className="relative z-30 max-w-[1112px] mx-auto text-center rounded-2xl border border-dashed border-white/20 px-4 sm:px-8 lg:px-20 py-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible" // triggers animation when in viewport
        viewport={{ once: true, amount: 0.2 }} // animate once, when 20% visible
      >
        <div className="absolute -z-10 w-full h-full top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
          <PixelBlast
            variant="circle"
            pixelSize={6}
            color="#00E6C5"
            patternScale={3}
            patternDensity={1.2}
            pixelSizeJitter={0.5}
            enableRipples
            rippleSpeed={0.4}
            rippleThickness={0.12}
            rippleIntensityScale={1.5}
            liquid
            liquidStrength={0.12}
            liquidRadius={1.2}
            liquidWobbleSpeed={5}
            speed={0.6}
            edgeFade={0.25}
            transparent
          />
        </div>

        <motion.h2
          className="font-inter text-3xl sm:text-5xl lg:text-[70px] leading-tight lg:leading-[77px] tracking-tight lg:tracking-[-2.8px] mb-2 md:mb-6 max-w-[858px] mx-auto"
          variants={headingVariants}
        >
          Support Devs, Fund ideas, build the future.
        </motion.h2>

        <motion.p
          className="text-white/50 text-xs md:text-base max-w-[744px] mx-auto mb-5 md:mb-10 leading-relaxed"
          variants={descriptionVariants}
        >
          We believe Web3 moves forward when builders lead the way. Chencat Labs
          unites top developers, shared infrastructure, and a forward-thinking
          environment where innovation happens fast, and products ship
          constantly.
        </motion.p>

        <motion.button
          className="bg-white text-black px-6 py-2 rounded-full text-sm hover:bg-chencat-cyan transition-colors"
          variants={buttonVariants}
        >
          Explore Ecosystem
        </motion.button>
      </motion.div>

      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1200 382"
      >
        <path
          d="M1199.5 0.5V381.5H0.5"
          stroke="#1C1C1C"
          strokeDasharray="12 6"
        />
      </svg>
    </section>
  );
}
