"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function HeaderSection() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Features", href: "#features" },
    { label: "Team", href: "#chencat" },
    { label: "FAQs", href: "/faqs" },
    { label: "Lorem ipsum", href: "#join" },
  ];

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: -15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
  };

  const child = {
    hidden: { opacity: 0, y: -15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
  };

  return (
    <>
      {/* Existing Header */}
      <header className="absolute w-full md:top-10 top-6 px-4 sm:px-8 lg:px-20">
        <motion.nav
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-[750px] mx-auto bg-[#121212D9] backdrop-blur-md rounded-[10px] px-4 py-2 flex items-center justify-between"
        >
          {/* Logo */}
          <motion.div variants={child} className="flex items-center gap-2">
            <img src="/images/logo.png" className="md:w-9 w-5" />
            <span className="font-raveo text-lg md:text-[22px] font-semibold">
              Chencat
            </span>
          </motion.div>

          {/* Links */}
          <div className="hidden md:flex items-center gap-5 text-[13px] font-medium">
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                variants={child}
                href={link.href}
                className="text-white hover:text-[#00E6C5] transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          {/* CTA button */}
          <motion.a
            variants={child}
            href="#"
            className="bg-white md:block hidden text-black px-[13px] py-2 rounded-md text-[13px] font-medium hover:bg-[#00E6C5]"
          >
            Join Telegram
          </motion.a>

          {/* Mobile menu */}
          <motion.button
            variants={child}
            className="md:hidden block"
            onClick={() => setOpen(true)}
          >
            <Menu />
          </motion.button>
        </motion.nav>
      </header>

      {/* Bubble Sidebar */}
      {open && (
        <>
          {/* Background overlay */}
          <motion.div
            className="fixed inset-0 bg-[#121212D9] backdrop-blur-sm h-fit z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />

          {/* Bubble Menu */}
          <motion.div
            className="fixed top-6 right-4 z-50 bg-[#121212] text-white p-4"
            style={{
              borderTopLeftRadius: "12px",
              borderBottomLeftRadius: open ? "12px" : "50px",
              borderTopRightRadius: "12px",
              borderBottomRightRadius: "50px",
              overflow: "hidden",
            }}
            initial={{ width: 60, height: 60 }}
            animate={{
              width: open ? 260 : 60,
              height: open ? "auto" : 60,
              transition: { type: "spring", stiffness: 200, damping: 22 },
            }}
            exit={{
              width: 60,
              height: 60,
              transition: { type: "spring", stiffness: 200, damping: 22 },
            }}
          >
            {/* Close button */}
            <button
              className="ml-auto mb-3 block"
              onClick={() => setOpen(false)}
            >
              <X size={20} />
            </button>

            {/* Nav Links */}
            <div className="flex flex-col gap-4 text-[15px]">
              {navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="hover:text-[#00E6C5]"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <a
              href="#"
              className="mt-4 block w-fit bg-white text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-[#00E6C5]"
            >
              Join Telegram
            </a>
          </motion.div>
        </>
      )}
    </>
  );
}
