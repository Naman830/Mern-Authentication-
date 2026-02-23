import { assets } from "../assets/assets";
import { useRef, useContext, useEffect,useState } from "react";
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AppContent } from "../context/AppContext";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  return (
    <div className="flex items-center justify-center min-h-screen px-6 sm:px-0 bg-gradient-to-br from-blue-200 to-purple-400">
      <img
        onClick={() => navigate("/")}
        src={assets.logo}
        alt=""
        className="absolute left-5 sm:left-20 top-5  w-28 cursor-pointer"
      />

      {/* enter email id */}
      <form className="bg-slate-900 p-8 rounded-lg shadow-lg w-96 text-sm ">
        <h1 className="text-white text-2xl font-semibold text-center mb-4">
          Reset Password
        </h1>
        <p className="text-center mb-6 text-indigo-300">
          Enter your registered email address to receive a password reset link.
        </p>

        <div className="mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333A5c]">
          <img src={assets.mail_icon} alt="" className="w-3 h-3" />
          <input
            type="email"
            placeholder="Email id"
            className="bg-transparent outline-none text-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <button className="w-full py-3 bg-gradient-to-r from-indigo-500  to-indigo-900 text-white rounded-full mt-3">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
