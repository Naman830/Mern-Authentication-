import { assets } from "../assets/assets";
import { useRef } from "react";
import React from "react";

const EmailVerify = () => {
  const inputRefs = React.useRef([]);

  const handleInput = (e, index) => {
    e.preventDefault();
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

      <form className="bg-slate-900 p-8 rounded-lg shadow-lg w-96 text-sm ">
        <h1 className="text-white text-2xl font-semibold text-center mb-4">
          Email Verify Otp
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
          Verify Email
        </button>
      </form>
    </div>
  );
};

export default EmailVerify;
