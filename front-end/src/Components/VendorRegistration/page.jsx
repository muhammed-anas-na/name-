"use client";
import { useState } from "react";

function VendorRegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState("business");

  const handleNext = () => {
    if (name.length >= 3 && phone.length == 10) {
      setStep("otp");
    }
  };

  const verifyOtp = () => {
    setStep("business");
  };
  return (
    <div className="flex h-screen my-5 gap-5 overflow-hidden">
      <div className="flex flex-col items-start justify-center w-1/2 md:ms-28 ms-10">
        {step == "personal" ? (
          <>
            <h1 className="flex-start font-bold text-3xl">Get Started</h1>
            <p className="text-xs text-gray-500">
              Welcome to Kamasuthra, Let&apos;s create an account
            </p>

            <label htmlFor="name" className="mt-4 text-sm font-semibold">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="border rounded-lg focus:outline-0 focus:border-green-800 w-72"
              onChange={(e) => setName(e.target.value)}
            />
            {/* {name.length <= 0 ? (<p className="text-xs text-red-600">Name must be minimum 3 charecters</p>):("")} */}

            <label htmlFor="email" className="mt-4 text-sm font-semibold">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="border rounded-lg focus:outline-0 focus:border-green-800 w-72"
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="number" className="mt-4 text-sm font-semibold">
              Phone
            </label>
            <input
              type="number"
              name="number"
              className="border rounded-lg focus:outline-0 focus:border-green-800 w-72"
              onChange={(e) => setPhone(e.target.value)}
            />
            {/* {(phone.length != 10) ? (<p className="text-xs text-red-600">Phone number must be 10 digits</p>):("")} */}

            <button
              className="border mt-3 w-72 py-1 bg-green-800 text-white rounded-lg"
              onClick={handleNext}
            >
              Next
            </button>
          </>
        ) : (
          <></>
        )}

        {step == "otp" ? (
          <>
            <h1 className="flex-start font-bold text-3xl">Verification code</h1>
            <p className="text-xs text-gray-500">
              We have send a one-time verification code to the phone number.
            </p>

            <label htmlFor="otp" className="mt-4 text-sm font-semibold">
              OTP
            </label>
            <input
              placeholder="Enter otp"
              type="number"
              name="otp"
              className="border rounded-lg focus:outline-0 focus:border-green-800 w-72 h-8"
              onChange={(e) => setOtp(e.target.value)}
            />
            {/* {(phone.length != 10) ? (<p className="text-xs text-red-600">Phone number must be 10 digits</p>):("")} */}
            <button
              className="border mt-3 w-72 py-1 bg-green-800 text-white rounded-lg"
              onClick={verifyOtp}
            >
              Continue
            </button>
          </>
        ) : (
          <></>
        )}

        {step == "business" ? (
          <>
            <h1 className="flex-start font-bold text-3xl">Service Details</h1>
            <p className="text-xs text-gray-500">
              Let us know what type of services you can provide.
            </p>

            <label htmlFor="name" className="mt-4 text-sm font-semibold">
              Business Name
            </label>
            <input
              placeholder="Enter Business Name"
              type="text"
              name="name"
              className="border rounded-lg focus:outline-0 focus:border-green-800 w-72 h-8"
              onChange={(e) => setOtp(e.target.value)}
            />

            <label htmlFor="number" className="mt-4 text-sm font-semibold">
              Business Number
            </label>
            <input
              placeholder="Enter Phone number"
              type="number"
              name=" number"
              className="border rounded-lg focus:outline-0 focus:border-green-800 w-72 h-8"
              onChange={(e) => setOtp(e.target.value)}
            />
            <p className="text-xs text-gray-500">(Note:This number will be display to your customers)</p>
            {/* {(phone.length != 10) ? (<p className="text-xs text-red-600">Phone number must be 10 digits</p>):("")} */}
            <button
              className="border mt-3 w-72 py-1 bg-green-800 text-white rounded-lg"
              onClick={verifyOtp}
            >
              Finish
            </button>
          </>
        ) : (
          <></>
        )}
      </div>
      <div className="w-1/2 hidden md:block">
        <img
          src="/vendor-login-img.jpg"
          alt="image"
          className="object-cover h-full w-full rounded-2xl"
        />
      </div>
    </div>
  );
}

export default VendorRegisterForm;
