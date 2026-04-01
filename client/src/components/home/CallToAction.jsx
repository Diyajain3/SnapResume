import React from "react";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const CallToAction = () => {
  return (
    <div id="cta" className="w-full max-w-6xl mx-auto px-6 md:px-16 mt-20 mb-10">
      {/* Container with dashed borders */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="border-y border-dashed border-slate-200"
      >
        <div className="flex flex-col md:flex-row text-center md:text-left items-center justify-between gap-8 px-6 md:px-12 border-x border-dashed border-slate-200 py-16 w-full bg-gradient-to-b from-white to-slate-50/50">
          
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-3"
          >
            <p className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
              Ready to land your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-400">
                dream role?
              </span>
            </p>
            <p className="text-slate-500 text-sm md:text-base font-medium">
              Join 50,000+ professionals building elite, ATS-optimized resumes.
            </p>
          </motion.div>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex items-center gap-2 rounded-xl py-4 px-8 bg-purple-700 hover:bg-purple-500 transition-all duration-300 text-white font-bold shadow-xl shadow-indigo-100 group"
          >
            <Sparkles className="size-5 group-hover:animate-spin-slow" />
            <span>Build Your Resume — It's Free</span>
          </motion.button>
          
        </div>
      </motion.div>
    </div>
  );
};

export default CallToAction;