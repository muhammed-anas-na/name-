
function VendorLoginForm(){
    return(
        <div className="flex h-screen my-5 gap-5 overflow-hidden">
            <div className="flex flex-col items-start justify-center w-1/2 md:ms-28 ms-10">
                <h1 className="flex-start font-bold text-3xl">Welcome Back</h1>
                <p className="text-xs text-gray-500">Do you remember your email and password for Login?</p>
                <label htmlFor="email" className="mt-4 text-sm font-semibold">Email</label>
                <input type="text" name="email" 
                className="border rounded-lg focus:outline-0 focus:border-green-800 w-72" />

                <label htmlFor="password" className="mt-4 text-sm font-semibold">Password</label>
                <input type="password" name="password" 
                className="border rounded-lg focus:outline-0 focus:border-green-800 w-72" />

                <button className="border mt-3 w-72 py-1 bg-green-800 text-white rounded-lg">Login</button>
            </div>
            <div className="w-1/2 hidden md:block">
                <img src="/vendor-login-img.jpg" alt="image" className="object-cover h-full w-full rounded-2xl"/>
            </div>
        </div>
    )   
}

export default VendorLoginForm;