"use client";

import { useState, useRef } from "react";

function UserLoginForm() {
  const [email, setEmail] = useState();
  const [number, setNumber] = useState();
  const [password, setPassword] = useState("");
  const emailRef = useRef(null);

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-col border border-gray-300 shadow-xl p-3 w-80">
        <h1 className="font-bold my-3">Login Form</h1>
        <div className="flex justify-center gap-20">
          <h1 className="border-4 border-pink-500 rounded-full p-2 px-4">1</h1>
          <h1 className={`border-4 ${!email ? "border-black" : "border-pink-500"} rounded-full p-2 px-4`}>2</h1>
        </div>
        {!email ? (
          <div className="my-4">
            <h1>Email</h1>
            <input
              ref={emailRef}
              type="text"
              className="border border-gray-500 focus:outline-none h-10 w-full"
            />
            <button
              className="bg-pink-500 text-white font-bold py-2 mt-2 w-full"
              onClick={() => {
                if (emailRef.current) setEmail(emailRef.current.value);
              }}
            >
              Next
            </button>
          </div>
        ) : (
          <div className="my-4">
            <h1>Password</h1>
            <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
              type="password"
              className="border border-gray-500 focus:outline-none h-10 w-full"
            />
            <button className="bg-pink-500 text-white font-bold py-2 mt-2 w-full" onClick={()=>{console.log(password)}}>
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserLoginForm;
