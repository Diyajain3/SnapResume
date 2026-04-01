import React, { useState } from "react";

// Professional Logo Component
const Logo = () => (
  <div className="flex items-center gap-2">
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
    <span className="font-bold text-xl tracking-tight text-black">
      SnapResume
    </span>
  </div>
);

const Footer = () => {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you'd send this to your email service API
    console.log("Query from:", email, "Message:", message);
    alert("Thanks! We'll get back to you at " + email);
    setMessage("");
    setEmail("");
  };

  return (
    <div className="w-full">
      <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8 px-4 md:px-16 lg:px-24 xl:px-32 font-sans">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand & Description */}
          <div className="col-span-1">
            <Logo />
            <p className="mt-4 text-slate-500 text-sm leading-relaxed">
              Stop staring at a blank page. SnapResume uses intelligent AI to
              transform your work history into a high-impact, ATS-optimized
              professional story.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">
              Product
            </h4>
            <ul className="space-y-4 text-sm text-slate-600">
              <li>
                <a href="#builder" className="hover:text-purple-600 transition">
                  AI Resume Builder
                </a>
              </li>
              <li>
                <a
                  href="#templates"
                  className="hover:text-purple-600 transition"
                >
                  Professional Templates
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-purple-600 transition">
                  Pricing Plans
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">
              Support
            </h4>
            <ul className="space-y-4 text-sm text-slate-600">
              <li>
                <a href="#about" className="hover:text-purple-600 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-purple-600 transition">
                  Career Advice
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-purple-600 transition">
                  Help Center
                </a>
              </li>
            </ul>
          </div>

          {/* Query Form */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">
              Have a Question?
            </h4>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="email"
                required
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white border border-slate-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/20"
              />
              <textarea
                placeholder="How can we help?"
                rows="2"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 resize-none"
              />
              <button className="bg-purple-700 text-white px-4 py-2.5 rounded-xl text-sm font-bold hover:bg-purple-600 transition shadow-md shadow-indigo-100 active:scale-95">
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400 font-medium">
          <p>© 2026 SnapResume. Your career, optimized.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-600">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-slate-600">
              Terms of Service
            </a>
            <a href="#" className="hover:text-slate-600">
              Cookie Settings
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
