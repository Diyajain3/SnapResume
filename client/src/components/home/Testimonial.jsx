import React from "react";
import Title from "./Title";
import { BookUserIcon, Star, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const Testimonial = () => {
  const cardsData = [
    {
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
      name: "Briar Martin",
      role: "Designer @Meta",
      text: "Secured 3 interviews in a week. The AI optimization is unmatched.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
      name: "Avery Johnson",
      role: "Analyst @Google",
      text: "Turned my messy history into a recruiter-approved narrative instantly.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60",
      name: "Jordan Lee",
      role: "Engineer @Amazon",
      text: "Landed a role at my dream company. Polished, modern, and effective.",
    },
  ];

  const CreateCard = ({ card }) => (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="group relative p-5 rounded-2xl mx-3 bg-white/60 backdrop-blur-sm border border-slate-200/60 shadow-[0_4px_12px_-2px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_-12px_rgba(79,70,229,0.12)] hover:border-indigo-200 w-[280px] shrink-0 overflow-hidden"
    >
      {/* Decorative Gradient Top-Right */}
      <div className="absolute -top-4 -right-4 w-16 h-16 bg-indigo-50 rounded-full blur-2xl group-hover:bg-indigo-100 transition-colors" />

      <div className="flex gap-3 items-center mb-3">
        <img
          className="w-10 h-10 rounded-full grayscale group-hover:grayscale-0 transition-all duration-500 border border-slate-100"
          src={card.image}
          alt={card.name}
        />
        <div className="flex flex-col min-w-0">
          <p className="font-bold text-slate-800 text-[13px] leading-none truncate">
            {card.name}
          </p>
          <span className="text-[10px] font-semibold text-indigo-500 mt-1 truncate">
            {card.role}
          </span>
        </div>
      </div>

      <p className="text-[12px] text-slate-500 leading-relaxed line-clamp-3 italic">
        "{card.text}"
      </p>

      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-2.5 h-2.5 fill-amber-400 stroke-none" />
          ))}
        </div>
        <div className="flex items-center gap-1">
          <CheckCircle2 className="w-3 h-3 text-emerald-500" />
          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">
            Verified
          </span>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section className="bg-slate-50/50 py-24 overflow-hidden relative font-poppins">
      {/* Background Blur */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-indigo-100/30 rounded-full blur-[100px] pointer-events-none" />

      {/* Section Header */}
      <div
        id="testimonials"
        className="flex flex-col items-center mb-16 px-4 scroll-mt-24 relative z-10"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white px-3 py-1 text-[10px] font-bold text-indigo-600 mb-6 uppercase tracking-[0.2em] shadow-sm">
          <BookUserIcon className="w-3 h-3" />
          Social Proof
        </div>

        <Title
          title="SnapResume Outcomes"
          description="Join thousands of professionals securing interviews at top-tier companies with AI-optimized narratives."
        />
      </div>

      {/* Horizontal Marquee */}
      <div className="relative w-full overflow-hidden">
        {/* Shadow Fades */}
        <div className="absolute left-0 top-0 h-full w-32 z-20 pointer-events-none bg-gradient-to-r from-slate-50/50 to-transparent" />
        <div className="absolute right-0 top-0 h-full w-32 z-20 pointer-events-none bg-gradient-to-l from-slate-50/50 to-transparent" />

        <motion.div
          className="flex w-max gap-3"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        >
          {[...cardsData, ...cardsData, ...cardsData, ...cardsData].map(
            (card, index) => (
              <CreateCard key={index} card={card} />
            )
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;