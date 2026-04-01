import { Lock, Mail, User2Icon } from "lucide-react";
import React from "react";

const Login = () => {

  const query=new URLSearchParams(window.location.search)
  const urlState=query.get('state')
  const [state, setState] = React.useState(urlState || "login");

  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-100">
      <form
        onSubmit={handleSubmit}
        className="sm:w-[380px] w-full text-center border border-purple-200 rounded-2xl px-8 bg-white shadow-xl"
      >
        <h1 className="text-purple-700 text-3xl mt-10 font-semibold">
          {state === "login" ? "Login" : "Sign up"}
        </h1>

        <p className="text-purple-400 text-sm mt-2">
          Please {state} to continue
        </p>

        {state !== "login" && (
          <div className="flex items-center mt-6 w-full bg-purple-50 border border-purple-200 h-12 rounded-full overflow-hidden pl-6 gap-2">
            <User2Icon size={16} className="text-violet-300 "/>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="bg-transparent outline-none w-full text-purple-700 placeholder-purple-400"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
        )}

        <div className="flex items-center w-full mt-4 bg-purple-50 border border-purple-200 h-12 rounded-full overflow-hidden pl-6 gap-2">
          <Mail size={16} className="text-violet-300 font-light"/>
          <input
            type="email"
            name="email"
            placeholder="Email id"
            className="bg-transparent outline-none w-full text-purple-700 placeholder-purple-400"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex items-center mt-4 w-full bg-purple-50 border border-purple-200 h-12 rounded-full overflow-hidden pl-6 gap-2">
          <Lock size={16} className="text-violet-300 font-light"/>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="bg-transparent outline-none w-full text-purple-700 placeholder-purple-400"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mt-4 text-left text-purple-600">
          <button className="text-sm hover:underline" type="reset">
            Forgot password?
          </button>
        </div>

        <button
          type="submit"
          className="mt-4 w-full h-11 rounded-full text-white bg-purple-600 hover:bg-purple-700 transition-all duration-300 shadow-md"
        >
          {state === "login" ? "Login" : "Sign up"}
        </button>

        <p
          onClick={() =>
            setState((prev) => (prev === "login" ? "register" : "login"))
          }
          className="text-purple-500 text-sm mt-4 mb-10 cursor-pointer"
        >
          {state === "login"
            ? "Don't have an account?"
            : "Already have an account?"}{" "}
          <span className="text-purple-700 font-medium hover:underline">
            Click here
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
