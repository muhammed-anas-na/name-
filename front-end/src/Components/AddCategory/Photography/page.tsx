import React from "react";
function AddPhotography() {
  return (
    <div className="flex flex-col items-start justify-center w-1/2 md:ms-28 ms-10">
      <h1 className="flex-start font-bold text-3xl">More details</h1>
      <p className="text-xs text-gray-500">
        Tell us more about the photography service
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
        Contact
      </label>
      <input
      placeholder="(Optional)"
        type="number"
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
      
      <button className="border mt-3 w-72 py-1 bg-green-800 text-white rounded-lg">
        Continue
      </button>
    </div>
  );
}

export default AddPhotography;
