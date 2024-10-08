"use client";
import React, { useState } from "react";
import AddServiceDetails from "../../Components/AddCategory/page";

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
            <button onClick={() => setService("catering")} className="border md:w-auto h-auto p-5 rounded-lg">
              <h1>Catering</h1>
            </button>
            <button onClick={() => setService("photography")} className="border w-auto h-auto p-5 rounded-lg">
              <h1>
                Photography
              </h1>
            </button>
            <button onClick={() => setService("mehandi")} className="border w-auto h-auto p-5 rounded-lg">
              <h1>Mehandi</h1>
            </button>
            <button onClick={() => setService("rental")} className="border w-auto h-auto p-5 rounded-lg">
              <h1>Rental</h1>
            </button>
            <button onClick={() => setService("venue")} className="border w-auto h-auto p-5 rounded-lg">
              <h1>Venue</h1>
            </button>
            <button onClick={() => setService("decoration")} className="border w-auto h-auto p-5 rounded-lg">
              <h1>
                Decorations
              </h1>
            </button>
            <button onClick={() => setService("lights")} className="border w-auto h-auto p-5 rounded-lg">
              <h1>
                Light and Sounds
              </h1>
            </button>
            <button onClick={() => setService("lights")} className="border w-auto h-auto p-5 rounded-lg">
              <h1>
                Honey moon
              </h1>
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}

      {service == "photography" ?<AddServiceDetails service={"photography"} />:<></>}
      {service == "catering" ? <AddServiceDetails service={"catering"} />:<></>}
      {service == "mehandi" ? <AddServiceDetails service={"mehandi"} /> : <></>}
      {service == "venue" ? <AddServiceDetails service={"venue"} /> : <></>}
      {service == "rental" ? <AddServiceDetails service={"rental"} /> : <></>}
      {service == "decoration" ? <AddServiceDetails service={"decoration"} />: (<></>)}
      {service == "lights" ? <AddServiceDetails service={"lights and sound"} /> : <></>}

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
