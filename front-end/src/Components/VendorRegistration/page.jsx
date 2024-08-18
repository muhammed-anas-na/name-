"use client";

import { useState } from "react";
import Link from "next/link";

function VendorRegisterForm() {
  const [name, setName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [businessNumber, setBusinessNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [location, setLocation] = useState("");
  const [step, setStep] = useState("personal");
  const [error, setError] = useState({
    name: false,
    phone: false,
    businessName: false,
    businessNumber: false,
    email: false,
  });

  const handleNext = () => {
    if (name.length >= 3 && phone.length == 10) {
      setStep("otp");
    }
    if (name.length < 3) {
      setError({ ...error, name: true });
    }
    if (phone != 10) {
      setError({ ...error, phone: true });
    }
  };
  const verifyOtp = () => {
    setStep("business");
  };

  const handleFinish = () => {
    setStep("finish");
  };
  return (
    <div className="flex h-screen my-5 gap-5 overflow-hidden">
      <div className="flex flex-col items-start justify-center md:w-1/2 md:ms-28 ms-10">
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
            {error.name == true ? (
              <p className="text-xs text-red-700">Name must be 3 charecters</p>
            ) : (
              <></>
            )}

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
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
            {error.phone == true ? (
              <p className="text-xs text-red-700">
                Phone number must be 10 digits
              </p>
            ) : (
              <></>
            )}

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
              value={otp}
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
            <h1 className="flex-start font-bold text-3xl">Business Details</h1>
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
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
            />
            <label htmlFor="number" className="mt-4 text-sm font-semibold">
              Business Number
            </label>
            <input
              placeholder="Enter Phone number"
              type="number"
              name=" number"
              className="border rounded-lg focus:outline-0 focus:border-green-800 w-72 h-8"
              value={businessNumber}
              onChange={(e) => setBusinessNumber(e.target.value)}
            />
            <p className="text-xs text-gray-500">
              (Nb:This number will be display to your customers)
            </p>

            <label htmlFor="number" className="mt-4 text-sm font-semibold">
              Location
            </label>
            <input
              placeholder="Select your location"
              type="text"
              name=" location"
              className="border rounded-lg focus:outline-0 focus:border-green-800 w-72 h-8"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            {/* {(phone.length != 10) ? (<p className="text-xs text-red-600">Phone number must be 10 digits</p>):("")} */}
            <button
              className="border mt-3 w-72 py-1 bg-green-800 text-white rounded-lg"
              onClick={handleFinish}
            >
              Finish
            </button>
          </>
        ) : (
          <></>
        )}

        {step == "finish" ? (
          <>
            <div className="flex flex-col">
              <h1 className=" text-2xl md:text-3xl font-bold">
                Profile setup Completed✅
              </h1>
              <p className="text-xs text-gray-600 md:mr-28 mt-5">
                Your business profile has been registered successfull. Now you
                can add the services that you provide for your customers.
              </p>
              <Link
                href={"/add-services"}
                className="border mt-4  w-full md:w-96 bg-green-800 text-white rounded-lg py-1 text-center"
              >
                Continue
              </Link>
            </div>
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
