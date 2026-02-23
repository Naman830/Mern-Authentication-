import { assets } from "../assets/assets";
import { useRef, useContext, useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AppContent } from "../context/AppContext";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setNewPassword] = useState("");

  const [isEmailSent, setIsEmailSent] = useState("");
  const [otp, setOtp] = useState(0);
  const [isOtpVerified, setIsOtpVerified] = useState(false);

  const inputRefs = React.useRef([]);
  // axios.defaults.withCredentials = true;
  // const { userData, backendUrl, isLoggedin, getUserData } =
  //   useContext(AppContent);

  const handleInput = (e, index) => {
    if (e.target.value.length > 0 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && e.target.value.length === 0 && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    const paste = e.clipboardData.getData("text");
    const pasteArray = paste.split("").slice(0, 6);
    pasteArray.forEach((char, index) => {
      if (inputRefs.current[index]) {
        inputRefs.current[index].value = char;
      }
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-6 sm:px-0 bg-gradient-to-br from-blue-200 to-purple-400">
      <img
        onClick={() => navigate("/")}
        src={assets.logo}
        alt=""
        className="absolute left-5 sm:left-20 top-5  w-28 cursor-pointer"
      />

      {/* ENTER EMAIL ID*/}

      {!isEmailSent && (
        <form className="bg-slate-900 p-8 rounded-lg shadow-lg w-96 text-sm ">
          <h1 className="text-white text-2xl font-semibold text-center mb-4">
            Reset Password
          </h1>
          <p className="text-center mb-6 text-indigo-300">
            Enter your registered email address to receive a password reset
            link.
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
      )}

      {/* OTP INPUT FORM */}
      {!isOtpVerified && isEmailSent && (
        <form className="bg-slate-900 p-8 rounded-lg shadow-lg w-96 text-sm ">
          <h1 className="text-white text-2xl font-semibold text-center mb-4">
            Reset Password Otp
          </h1>
          <p className="text-center mb-6 text-indigo-300">
            Enter the 6-Digit code sent to your email
          </p>

          <div className="flex justify-between mb-8 " onPaste={handlePaste}>
            {Array(6)
              .fill(0)
              .map((_, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  className="w-12 h-12 bg-[#333A6C] text-white text-center text-xl rounded-md"
                  ref={(e) => (inputRefs.current[index] = e)}
                  onInput={(e) => handleInput(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  required
                />
              ))}
          </div>

          <button className="w-full py-3 bg-gradient-to-r from-indigo-500  to-indigo-900 text-white rounded-full">
            Submit
          </button>
        </form>
      )}

      {/* ENTER NEW PASSWORD*/}
      {!isOtpVerified && isEmailSent &&   <form className="bg-slate-900 p-8 rounded-lg shadow-lg w-96 text-sm ">
        <h1 className="text-white text-2xl font-semibold text-center mb-4">
          New Password
        </h1>
        <p className="text-center mb-6 text-indigo-300">
          Enter your new password for your account.
        </p>

        <div className="mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333A5c]">
          <img src={assets.lock_icon} alt="" className="w-3 h-3" />
          <input
            type="password"
            placeholder="Password"
            className="bg-transparent outline-none text-white"
            value={password}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>

        <button className="w-full py-3 bg-gradient-to-r from-indigo-500  to-indigo-900 text-white rounded-full mt-3">
          Submit
        </button>
      </form>}
    
    </div>
  );
};

export default ResetPassword;
