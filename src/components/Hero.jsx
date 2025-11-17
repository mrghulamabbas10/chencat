import ArrowIcon from "../assets/arrow";
import HeaderSection from "./Header";
import LogoSlider from "./LogoSlider";

import { motion } from "framer-motion";

export default function Hero() {
  const title = "Shaping the Future of Web3 Infrastructure";
  const paragraph =
    "Chencat Labs is a developer-driven collective funding and building high-impact Web3 products.";

  const word = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const container = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const floatUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" } },
  };

  return (
    <section className="relative md:pt-60 pt-40 pb-20 header">
      <HeaderSection />
      <div className="max-w-[1160px] mx-auto text-center px-6 sm:px-8 lg:px-20">
        {/* <div
          className="relative inline-flex items-center gap-2 rounded-full px-3 py-2 mb-3 md:mb-10 backdrop-blur-sm overflow-hidden"
          style={{
            background:
              "linear-gradient(90deg, rgba(0,230,197,0.25), rgba(0,230,197,0), rgba(0,230,197,0.25))",
            backgroundSize: "200% 100%",
            animation: "slideGradient 3s linear infinite",
          }}
        >
          <span className="text-[#00E6C5] text-xs font-geist-mono font-medium uppercase tracking-wider">
            LOREM IPSUM DOLOR SIT
          </span>

          <div className="w-4 h-4 rounded-full bg-[#00E6C5] flex items-center justify-center">
            <ArrowIcon />
          </div>
        </div> */}

        <motion.h1
          variants={container}
          initial="hidden"
          animate="show"
          className="font-raveo text-4xl text-center justify-center sm:text-5xl md:text-6xl lg:text-[70px] font-semibold leading-tight lg:leading-[77px] tracking-tight lg:tracking-[-2.8px] mb-2 md:mb-6 max-w-[762px] mx-auto flex flex-wrap"
        >
          {title.split(" ").map((word, i) => (
            <motion.span
              key={i}
              variants={floatUp}
              className="inline-block mr-2"
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-white/50 text-base text-center justify-center sm:text-lg max-w-[437px] mx-auto mb-12 flex flex-wrap"
        >
          {paragraph.split(" ").map((wordText, i) => (
            <motion.span key={i} variants={word} className="mr-1 inline-block">
              {wordText}
            </motion.span>
          ))}
        </motion.p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:w-full w-2/3 mx-auto">
          {/* Button 1 */}
          <motion.a
          href="#ExploreEcosystem"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white text-black px-6 py-3 rounded-full text-sm hover:bg-[#00E6C5] transition-colors w-full sm:w-auto"
          >
            Explore Ecosystem
          </motion.a>

          {/* Button 2 */}
          <motion.a
          href="#team"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#171717] text-white px-6 py-3 rounded-full text-sm hover:bg-[#00E6C5] transition-colors w-full sm:w-auto"
          >
            Meet the Developers
          </motion.a>
        </div>
      </div>
      <LogoSlider />
    </section>
  );
}
