import React from "react";
function ServiceDetailPage() {
  return (
    <div className="flex my-5 gap-10">
      <div className="w-1/2 h-1/2 flex flex-col gap-5">
        <img
          className="object-cover rounded-lg"
          src="/banner01.jpg"
          alt="banner01"
        />

        <h1 className="text-4xl font-bold">Business Name</h1>
      </div>

      <div>
        <h1 className="text-3xl font-bold">Deatails</h1>
      </div>
    </div>
  );
}

export default ServiceDetailPage;
