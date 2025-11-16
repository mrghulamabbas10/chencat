"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function CTASection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const controls = useAnimation();

  if (inView) controls.start("visible");

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delay: 0.6, duration: 0.5, type: "spring", stiffness: 120 },
    },
  };

  const bgVariants = {
    hidden: { scale: 1.05, opacity: 0.5 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="w-full max-w-[1200px] mx-auto px-4 lg:px-0 py-12 lg:py-20"
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      id="join"
    >
      <motion.div
        className="relative rounded-[10px] bg-[#121212] overflow-hidden border border-[rgba(255,255,255,0.05)]"
        variants={bgVariants}
      >
        {/* Background images */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.img
            src="https://api.builder.io/api/v1/image/assets/TEMP/e4b9d2034641cd8707bb3d31854baf7b5920ac47?width=2400"
            alt=""
            className="absolute inset-0 w-full h-full object-cover md:scale-100 scale-125"
            animate={{ x: ["0%", "-10%", "0%"] }} // move left and back
            transition={{
              duration: 15, // slow movement
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 px-6 lg:px-[30px] py-12 lg:py-[50px]">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-[60px]">
            <div className="flex-1">
              <motion.h2
                className="text-white text-2xl lg:text-[24px] leading-[35.84px] font-medium mb-1"
                variants={textVariants}
                custom={0}
                initial="hidden"
                animate={controls}
              >
                Ready to build faster?
              </motion.h2>
              <motion.p
                className="text-[rgba(255,255,255,0.7)] text-[15px] leading-[19.2px] font-normal max-w-[354px]"
                variants={textVariants}
                custom={1}
                initial="hidden"
                animate={controls}
              >
                Unlock instant performance upgrades and ship better products
                with Chencat Labs.
              </motion.p>
            </div>
            <motion.a
              href="#"
              className="px-[15px] py-[6px] rounded-md bg-white hover:bg-gray-100 transition-colors flex-shrink-0"
              variants={buttonVariants}
              initial="hidden"
              animate={controls}
            >
              <span className="text-black text-[13px] leading-[16.9px] font-medium">
                Get started
              </span>
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
