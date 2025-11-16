import { features } from "./data";

import { motion } from "framer-motion";

export default function Features() {
  const headingText = "Built for clarity, built for speed";

  return (
    <section className="px-4 sm:px-8 lg:px-20 py-10" id="features">
      <div className="max-w-[1200px] mx-auto">
        <div className="md:mb-16 mb-10">
          {/* Subheading fade in on scroll */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            style={{
              background:
                "linear-gradient(90deg, rgba(0,230,197,0.25), rgba(0,230,197,0), rgba(0,230,197,0.25))",
              backgroundSize: "200% 100%",
              animation: "slideGradient 3s linear infinite",
            }}
            className="inline-flex items-center gap-2 bg-[#00FFF7]/25 rounded-2xl px-3 py-1 mb-6"
          >
            <span className="text-[#00FFF7] text-xs font-geist-mono font-medium uppercase">
              Features
            </span>
          </motion.div>

          {/* H2 WOW-type animation on scroll */}
          <motion.h2
            className="font-raveo text-3xl sm:text-4xl font-semibold flex flex-wrap justify-start"
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-chencat-dark rounded-[10px] overflow-hidden flex flex-col"
            >
              {/* Image with zoom effect */}
              <motion.div
                className="overflow-hidden"
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-[250px] object-cover opacity-80"
                />
              </motion.div>

              {/* Content */}
              <div className="p-5 bg-[#121212]">
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.25 + 0.1 }}
                  className="text-white text-base font-medium"
                >
                  {feature.title}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.25 + 0.2 }}
                  className="text-white/50 text-sm leading-relaxed"
                >
                  {feature.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
