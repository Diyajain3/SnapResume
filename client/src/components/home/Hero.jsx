import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ParticleBackground from "./Glitter";

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Logo Component for consistency
  const Logo = () => (
    <div className="flex items-center gap-2 cursor-pointer">
      <svg
        width="32"
        height="32"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 6C10 4.89543 10.8954 4 12 4H22L30 12V34C30 35.1046 29.1046 36 28 36H12C10.8954 36 10 35.1046 10 34V6Z"
          fill="#4338ca"
        />
        <path d="M22 4V12H30L22 4Z" fill="#a5b4fc" />
        <path d="M19 16L15 23H20L19 30L23 23H18L19 16Z" fill="white" />
        <path
          d="M30 4L31.5 7L35 8.5L31.5 10L30 13L28.5 10L25 8.5L28.5 7L30 4Z"
          fill="#fbbf24"
        />
      </svg>
      <span className="font-bold text-xl tracking-tight text-black select-none">
        Snap Resume
      </span>
    </div>
  );

  // Animation variants for framer-motion
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.15, duration: 0.6 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.6 } },
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden font-poppins">
      {/* Navigation */}
      <nav className="z-[110] sticky top-0 flex items-center justify-between w-full py-4 px-4 md:px-16 lg:px-24 xl:px-32 bg-white/80 backdrop-blur-md border-b border-slate-100 text-black select-none">
        <a href="/">
          <Logo />
        </a>

        <div className="hidden md:flex items-center gap-8 font-medium">
          {["Home", "Features", "Testimonial", "Contact"].map((item) => (
            <a
              key={item}
              href="/"
              className="hover:text-indigo-600 transition duration-300 ease-in-out"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="hidden md:flex space-x-3">
          <button className="active:scale-95 hover:bg-slate-50 transition px-4 py-2 border border-slate-200 rounded-full text-sm font-semibold">
            Login
          </button>
          <button className="px-6 py-2 bg-indigo-700 text-white active:scale-95 hover:bg-indigo-600 transition rounded-full text-sm font-semibold shadow-lg shadow-indigo-100">
            Get started
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden active:scale-90 transition p-2 text-slate-600"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="inline-block"
            >
              <path d="M18 6L6 18" />
              <path d="M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="inline-block"
            >
              <path d="M4 5h16" />
              <path d="M4 12h16" />
              <path d="M4 19h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, transition: { duration: 0.25 } }}
            exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
            className="fixed inset-0 z-[100] bg-white text-black flex flex-col items-center justify-center text-xl font-bold gap-8 md:hidden select-none"
          >
            {["Home", "Features", "Testimonial", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="hover:text-indigo-600 transition"
              >
                {item}
              </a>
            ))}
            <button className="mt-4 px-8 py-3 bg-indigo-700 text-white rounded-full shadow-lg hover:bg-indigo-600 transition">
              Get Started
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center text-black pb-32 pt-20 px-4 overflow-hidden">
        {/* Particle Background */}
        <ParticleBackground />

        {/* Radial Glow */}
        <div
          className="absolute top-0 left-1/2 -z-10 h-[600px] w-[1000px] -translate-x-1/2 opacity-20"
          style={{
            background:
              "radial-gradient(circle at center, #4f46e5 0%, transparent 70%)",
          }}
        />

        {/* Animated content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl text-center"
        >
          <motion.h1
            variants={itemVariants}
            className="text-[44px] md:text-7xl font-extrabold max-w-4xl tracking-tight leading-[1.1]"
          >
            Create Your{" "}
            <span className="text-indigo-600">AI-powered</span> Resume{" "}
            <div className="text-slate-400 text-xl md:text-2xl mt-2">
              In seconds
            </div>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-slate-600 max-w-xl mt-8 leading-relaxed"
          >
            The fastest way to build a professional, recruiter-ready resume that
            passes ATS filters effortlessly.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-12 flex flex-col sm:flex-row gap-4 w-full justify-center items-center"
          >
            <button
              className="w-full sm:w-auto px-10 py-4 bg-indigo-700 text-white font-bold rounded-2xl active:scale-95 hover:bg-indigo-600 transition-all shadow-xl shadow-indigo-200"
              whileTap={{ scale: 0.95 }}
            >
              Build My Resume
            </button>
            <button
              className="w-full sm:w-auto px-10 py-4 border-2 border-slate-200 text-slate-700 font-bold rounded-2xl active:scale-95 hover:bg-slate-50 transition-all"
              whileTap={{ scale: 0.95 }}
            >
              Try Demo
            </button>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Hero;