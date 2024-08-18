"use client";
import React from "react";
import { useRouter } from "next/navigation";
function AddServiceDetails({service}:{service:string}) {
  const router = useRouter();
  const handleAddService = ()=>{
    router.push('/');
  }
  
  return (
    <div className="flex flex-col items-start justify-center w-1/2 md:ms-28">
      <h1 className="font-bold  text-xl md:text-3xl">More details</h1>
      <p className="text-xs w-full text-gray-500">
        Tell us more about the {service} service
      </p>
      <label htmlFor="min-rate" className="mt-4 text-sm font-semibold">
        Rate per day
      </label>
      <input
        type="number"
        name="rate-per-day"
        className="border rounded-lg focus:outline-0 focus:border-green-800 w-72"
      />
      <label htmlFor="phone" className="mt-4 text-sm font-semibold">
        About
      </label>
      <textarea
        placeholder=""
        name="phone"
        className="border rounded-lg focus:outline-0 focus:border-green-800 w-72"
      />
      <label htmlFor="image" className="mt-4 text-sm font-semibold">
        Image
      </label>
      <input
        type="file"
        name="image"
        className="border rounded-lg focus:outline-0 focus:border-green-800 w-72"
      />
      <p className="text-xs text-gray-500">Showcase you previous work to attract more customers</p>
      
      <button className="border mt-3 w-72 py-1 bg-green-800 text-white rounded-lg" onClick={handleAddService}>
        Continue
      </button>
    </div>
  );
}

export default AddServiceDetails;
