"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

function Page() {
  const [category, setCategory] = useState();
  const [exist, setExist] = useState();
  const router = useRouter();

  if (category == "customer" && exist == true) {
    router.push("/userLogin");
  } else if (category == "customer" && exist == false) {
    router.push("/userRegister");
  } else if (category == "vendor" && exist == true) {
    router.push("/vendorLogin");
  } else if (category == "vendor" && exist == false) {
    router.push("/vendorRegister");
  }

  if (category) {
    return (
      <>
        <div className="flex flex-col justify-center items-center h-screen gap-5">
          <div>
            <h1 className="text-2xl lg:text-5xl font-bold ms-4">
              Are you new to our platform?
            </h1>
          </div>
          <div className="flex gap-5">
            <button
              className="border-2 border-red-200 p-2 text-3xl"
              onClick={() => setExist(false)}
            >
              Yes
            </button>
            <button
              className="border-2  border-red-200 p-2 text-3xl"
              onClick={() => setExist(true)}
            >
              No
            </button>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen gap-5">
        <div>
          <h1 className="text-2xl lg:text-5xl font-bold ms-4">
            How do you describe yourself?
          </h1>
        </div>
        <div className="flex gap-5 flex-col md:flex-row">
          <button
            className="border-2 border-red-200 p-2 text-3xl"
            onClick={() => setCategory("customer")}
          >
            🙍‍♂️Customer
          </button>
          <button
            className="border-2  border-red-200 p-2 text-3xl"
            onClick={() => setCategory("vendor")}
          >
            👷‍♂️Vendor
          </button>
        </div>
      </div>
    </>
  );
}

export default Page;
