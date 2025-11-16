import { motion } from "framer-motion";
import { gridFeatures } from "./data";

export default function About() {
  const headingText = "What we do at Chencat Labs";

  return (
    <section className="px-4 sm:px-8 lg:px-20 py-16" id="about">
      <div className="max-w-[1200px] mx-auto">
        {/* H2 WOW-type animation on scroll */}
        <motion.h2
          className="font-raveo text-3xl mb-10 sm:text-4xl font-semibold flex flex-wrap justify-start"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {headingText.split(" ").map((word, i) => (
            <motion.span
              key={i}
              className="inline-block mr-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px">
          {gridFeatures.map((feature, index) => (
            <motion.div
              key={feature.id}
              className="relative aspect-[3/2] overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Zooming image */}
              <motion.img
                src={feature.image}
                alt={feature.title}
                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:brightness-125 group-hover:sepia group-hover:saturate-150 group-hover:contrast-125 transition-all duration-500"
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              />

              {/* Dashed border */}
              <div className="absolute inset-0 border border-dashed border-[#1C1C1C] z-10" />

              {/* Title with WOW-type */}
              <div className="absolute bottom-8 left-8 z-20">
                <motion.h3
                  className="text-white text-2xl font-inter flex flex-wrap"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={{
                    hidden: {},
                    show: { transition: { staggerChildren: 0.1 } },
                  }}
                >
                  {feature.title.split(" ").map((word, i) => (
                    <motion.span
                      key={i}
                      className="mr-2 inline-block"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.5, delay: i * 0.08 }}
                    >
                      {word}
                    </motion.span>
                  ))}
                </motion.h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
