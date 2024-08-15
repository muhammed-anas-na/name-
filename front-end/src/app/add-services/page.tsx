"use client"
import React, { useState } from "react";
import AddPhotography from "../../Components/AddCategory/Photography/page";

function AddServices() {
  const [service, setService] = useState("service");
  return (
    <div className="flex h-screen my-5 gap-5 overflow-hidden ms-12">
      {service == "service" ? (
        <div className="flex flex-col justify-center md:w-1/2">
          <h1 className="font-bold text-3xl">Add Services</h1>
          <p className="text-xs text-gray-500">
           Select a service that you wish to add to you profile
          </p>

          <div className="flex flex-col md:flex-row flex-wrap w-auto mt-3 md:me-5 gap-4">
            <div className="border md:w-auto h-auto p-5 rounded-lg">
              <button onClick={()=>setService("catering")}>Catering</button>
            </div>
            <div className="border w-auto h-auto p-5 rounded-lg">
              <button onClick={()=>setService("photography")}>Photography</button>
            </div>
            <div className="border w-auto h-auto p-5 rounded-lg">
              <button onClick={()=>setService("mehandi")}>Mehandi</button>
            </div>
            <div className="border w-auto h-auto p-5 rounded-lg">
              <button onClick={()=>setService("rental")}>Rental</button>
            </div>
            <div className="border w-auto h-auto p-5 rounded-lg">
              <button onClick={()=>setService("venue")}>Venue</button>
            </div>
            <div className="border w-auto h-auto p-5 rounded-lg">
              <button onClick={()=>setService("decoration")}>Decorations</button>
            </div>
            <div className="border w-auto h-auto p-5 rounded-lg">
              <button onClick={()=>setService("lights")}>Light and Sounds</button>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}

      {
        service == "photography" ? (<AddPhotography/>) : (<></>)
      }

      <div className="w-1/2 hidden md:block">
        <img
          src="/vendor-login-img.jpg"
          alt="image"
          className="object-cover h-full w-full rounded-2xl"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
}

export default AddServices;
