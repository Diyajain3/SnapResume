import React from "react";
import Title from "./Title";
import { motion } from "framer-motion";

const featuresData = [
  {
    iconColor: "violet",
    title: "Real-Time Analytics",
    description:
      "Get instant insights into your finances with live dashboards.",
    iconPath: (
      <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z" />
    ),
  },
  {
    iconColor: "green",
    title: "Bank-Grade Security",
    description:
      "End-to-end encryption, 2FA, compliance with GDPR standards.",
    iconPath: (
      <>
        <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" />
      </>
    ),
  },
  {
    iconColor: "orange",
    title: "Customizable Reports",
    description:
      "Export professional, audit-ready financial reports for tax or internal review.",
    iconPath: (
      <>
        <path d="M12 15V3" />
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <path d="m7 10 5 5 5-5" />
      </>
    ),
  },
];

const Feature = () => {
  return (
    <div id="features" className="flex flex-col items-center my-10 scroll-mt-12">
      {/* Section Badge */}
      <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-1.5 text-xs font-bold text-indigo-700 mb-8 uppercase tracking-wider">
        <span className="flex h-2 w-2 rounded-full bg-indigo-600 animate-pulse"></span>
        Simple Process
      </div>

      {/* Title */}
      <Title
        title="Build your resume"
        description="Master the modern job market with AI-driven precision. SnapResume transforms your career trajectory into an ATS-optimized narrative, designed to capture recruiter attention and secure elite opportunities in record time."
      />

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center xl:-mt-10 justify-center gap-12 mt-10">
        {/* Image */}
        <motion.img
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl w-full xl:-ml-32"
          src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/group-image-1.png"
          alt="Feature Illustration"
        />

        {/* Feature Cards */}
        <motion.div
          className="flex flex-col gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {featuresData.map((feature, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
              className={`p-6 border border-transparent rounded-xl cursor-pointer transition-colors bg-${feature.iconColor}-100 hover:bg-${feature.iconColor}-200 hover:border-${feature.iconColor}-300 flex gap-4`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`w-6 h-6 stroke-${feature.iconColor}-600 flex-shrink-0`}
              >
                {feature.iconPath}
              </svg>
              <div className="space-y-2">
                <h3 className="text-base font-semibold text-slate-700">{feature.title}</h3>
                <p className="text-sm text-slate-600 max-w-xs">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Feature;