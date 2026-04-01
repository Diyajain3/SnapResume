import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const user = { name: "John Doe" };
  const navigate = useNavigate();
  const logoutUser = () => {
    navigate("/");
  };
  return (
    <div className="shadow bg-white">
      <nav className="flex items-center justify-between max-w-7xl mx-auto px-4 py-3.5 text-slate-800 transition-all">
        <Link>
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
              Snap Resume
            </span>
          </div>
        </Link>
        <div className="flex items-center gap-4 text-sm">
          <p className="max-sm:hidden">hi,{user?.name}</p>
          {/* Logout Button - Red Theme */}
          <button
            onClick={logoutUser}
            className="bg-red-50 text-red-600 border border-red-200 hover:bg-red-600 hover:text-white font-semibold px-6 py-2 rounded-full transition-all duration-200 active:scale-95 shadow-sm"
          >
            Logout
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
