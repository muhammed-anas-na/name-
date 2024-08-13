"use client";

import { useState, useRef } from "react";
import React from "react";

function UserRegisterForm() {
  const [number, setNumber] = useState("");
  const [otp, setOtp] = useState("");
  const numberRef = useRef<HTMLInputElement>(null);

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-col border border-gray-300 shadow-xl p-3 w-80">
        <h1 className="font-bold my-3">Register Form</h1>
        <div className="flex justify-center items-center">
          <h1 className="border-4 border-pink-500 rounded-full p-2 px-4">1</h1>
          <div className="border w-40 h-0"></div>
          <h1
            className={`border-2 ${
              !number ? "border-black" : "border-pink-500 border-4"
            } rounded-full p-2 px-4`}
          >
            2
          </h1>
        </div>
        {!number ? (
          <div className="my-4">
            <h1>Number</h1>
            <input
              ref={numberRef}
              placeholder="Enter Number"
              type="text"
              className="border border-gray-500 focus:outline-none h-10 w-full"
            />
            <button
              className="bg-pink-500 text-white font-bold py-2 mt-2 w-full"
              onClick={() => {
                if (numberRef.current) setNumber(numberRef.current.value);
              }}
            >
              Next
            </button>
          </div>
        ) : (
          <div className="my-4">
            <h1>OTP</h1>
            <div className="flex items-center">
              <input
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter OTP"
                type="number"
                className="border border-gray-500 border-dashed focus:outline-none h-10 w-full"
              />
            </div>
            <h1 className="text-gray-500 text-xs text-end my-3 hover:cursor-pointer">Resend OTP?</h1>
            <button
              className="bg-pink-500 text-white font-bold py-2 mt-2 w-full justify-end"
            >
              Register
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserRegisterForm;
