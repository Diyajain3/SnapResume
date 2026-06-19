import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Lock,
  Mail,
  User2,
  Sparkles,
  FileText,
  ArrowRight,
} from "lucide-react";
import { useDispatch } from "react-redux";
import { login } from "../app/features/authSlice";
import api from "../configs/api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch=useDispatch();
  const location = useLocation();
const navigate = useNavigate();
  const state = location.pathname === "/signup" ? "register" : "login";

  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const { data } = await api.post(
      `/api/users/${state}`,
      formData
    );

    dispatch(login(data));

    localStorage.setItem("token", data.token);

    toast.success(data.message);

    navigate("/app");
  } catch (error) {
    toast.error(
      error?.response?.data?.message ||
      error.message
    );
  }
};

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <div className="min-h-screen flex bg-gradient-to-br from-indigo-50 via-white to-purple-100 overflow-hidden">
      {/* LEFT SECTION */}
      <div className="hidden lg:flex flex-1 relative items-center justify-center p-16">
        {/* Glow */}
        <div className="absolute w-[500px] h-[500px] rounded-full bg-indigo-500/20 blur-3xl"></div>

        <div className="relative z-10 max-w-xl">
          {/* Logo */}
          <div className="flex items-center gap-4 mb-10">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center shadow-2xl shadow-indigo-300">
              <FileText className="text-white" size={30} />
            </div>

            <div>
              <h1 className="text-4xl font-black text-slate-900">
                Snap Resume
              </h1>

              <p className="text-slate-500 mt-1">AI Powered Resume Builder</p>
            </div>
          </div>

          {/* Hero Text */}
          <h2 className="text-7xl font-black leading-[1.05] text-slate-900">
            Build Your Dream Resume
          </h2>

          <p className="mt-8 text-xl leading-relaxed text-slate-600">
            Create professional ATS-friendly resumes in minutes using AI.
            Designed to help you land your next opportunity faster.
          </p>

          {/* Features */}
          <div className="mt-12 space-y-6">
            {[
              "AI Generated Professional Summaries",
              "Modern Recruiter-Friendly Templates",
              "One Click Resume Export",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-100 flex items-center justify-center">
                  <Sparkles size={20} className="text-indigo-600" />
                </div>

                <p className="text-lg font-medium text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center justify-center gap-3 mb-10">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center">
              <FileText className="text-white" size={24} />
            </div>

            <h1 className="text-3xl font-black text-slate-900">Snap Resume</h1>
          </div>

          {/* FORM CARD */}
          <div className="bg-white/90 backdrop-blur-xl border border-white shadow-2xl rounded-[36px] p-8 md:p-10">
            {/* Header */}
            <div className="text-center">
              <div className="mx-auto w-20 h-20 rounded-3xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center shadow-xl shadow-indigo-300">
                <FileText className="text-white" size={34} />
              </div>

              <h2 className="mt-6 text-5xl font-black text-slate-900">
                {state === "login" ? "Welcome Back" : "Create Account"}
              </h2>

              <p className="mt-4 text-slate-500 text-lg">
                {state === "login"
                  ? "Login to continue building resumes"
                  : "Start creating your professional resume"}
              </p>
            </div>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="mt-10">
              {/* Name */}
              {state !== "login" && (
                <div className="mb-5">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Full Name
                  </label>

                  <div className="flex items-center h-14 px-5 rounded-2xl border border-slate-200 bg-slate-50 focus-within:border-indigo-500 focus-within:ring-4 focus-within:ring-indigo-100 transition-all duration-300">
                    <User2 size={20} className="text-slate-400" />

                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      className="w-full bg-transparent outline-none border-none focus:ring-0 shadow-none px-3 text-slate-700 placeholder:text-slate-400"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              )}

              {/* Email */}
              <div className="mb-5">
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Email Address
                </label>

                <div className="flex items-center h-14 px-5 rounded-2xl border border-slate-200 bg-slate-50 focus-within:border-indigo-500 focus-within:ring-4 focus-within:ring-indigo-100 transition-all duration-300">
                  <Mail size={20} className="text-slate-400" />

                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="w-full bg-transparent outline-none border-none focus:ring-0 shadow-none px-3 text-slate-700 placeholder:text-slate-400"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Password
                </label>

                <div className="flex items-center h-14 px-5 rounded-2xl border border-slate-200 bg-slate-50 focus-within:border-indigo-500 focus-within:ring-4 focus-within:ring-indigo-100 transition-all duration-300">
                  <Lock size={20} className="text-slate-400" />

                  <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    className="w-full bg-transparent outline-none border-none focus:ring-0 shadow-none px-3 text-slate-700 placeholder:text-slate-400"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Forgot Password */}
              {state === "login" && (
                <div className="mt-4 text-right">
                  <button
                    type="button"
                    className="text-sm font-medium text-indigo-600 hover:text-indigo-700 hover:underline"
                  >
                    Forgot Password?
                  </button>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="mt-8 w-full h-14 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-lg font-bold shadow-xl shadow-indigo-200 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2"
              >
                {state === "login" ? "Login" : "Create Account"}

                <ArrowRight size={20} />
              </button>
            </form>

            {/* Switch */}
            <div className="mt-8 text-center">
              <p className="text-slate-500">
                {state === "login"
                  ? "Don't have an account?"
                  : "Already have an account?"}

                {state === "login" ? (
                  <Link
                    to="/signup"
                    className="ml-2 font-bold text-indigo-600 hover:text-indigo-700 hover:underline"
                  >
                    Sign Up
                  </Link>
                ) : (
                  <Link
                    to="/login"
                    className="ml-2 font-bold text-indigo-600 hover:text-indigo-700 hover:underline"
                  >
                    Login
                  </Link>
                )}
              </p>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-4 my-8">
              <div className="flex-1 h-[1px] bg-slate-200"></div>

              <span className="text-sm text-slate-400">OR</span>

              <div className="flex-1 h-[1px] bg-slate-200"></div>
            </div>

            {/* Google Button */}
            <button
              type="button"
              className="w-full h-14 rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 transition-all duration-300 flex items-center justify-center gap-3 text-slate-700 font-semibold"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="google"
                className="w-5 h-5"
              />
              Continue with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
