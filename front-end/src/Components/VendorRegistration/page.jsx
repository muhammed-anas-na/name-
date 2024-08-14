"use client";
import { useState } from "react";

function VendorRegisterForm(){

    const [name,setName] = useState("1")
    const [email,setEmail] = useState("2")
    const [phone,setPhone] = useState("3")

    return(
        <div className="flex h-screen my-5 gap-5 overflow-hidden">
            <div className="flex flex-col items-start justify-center w-1/2 md:ms-28 ms-10">
                <h1 className="flex-start font-bold text-3xl">Get Started</h1>
                <p className="text-xs text-gray-500">Welcome to Kamasuthra, Let's create an account</p>
                <label htmlFor="name" className="mt-4 text-sm font-semibold">Name</label>
                <input type="text" name="name" 
                className="border rounded-lg focus:outline-0 focus:border-green-800 w-72" />

                <label htmlFor="email" className="mt-4 text-sm font-semibold">Email</label>
                <input type="email" name="email" 
                className="border rounded-lg focus:outline-0 focus:border-green-800 w-72" />

                <label htmlFor="number" className="mt-4 text-sm font-semibold">Phone</label>
                <input type="number" name="number" 
                className="border rounded-lg focus:outline-0 focus:border-green-800 w-72" />


                <button className="border mt-3 w-72 py-1 bg-green-800 text-white rounded-lg">Next</button>
            </div>
            <div className="w-1/2 hidden md:block">
                <img src="/vendor-login-img.jpg" alt="image" className="object-cover h-full w-full rounded-2xl"/>
            </div>
        </div>
    )
}

export default VendorRegisterForm;