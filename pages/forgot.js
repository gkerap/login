import React from "react";

function Forgot() {
  return (
    <form>
      <div className="flex items-center justify-center h-screen ">
        <div className="bg-white py-6 rounded px-10 w-2/5 ">
          <h1 className="text-4xl font-bold text-gray-500 my-6">
            Forgot Password
          </h1>
          <p>Please kindly email address associated with the account</p>
          <div className="space-y-4 w-full mt-6">
            <div className="w-full">
              <span className=""> Email</span>
              <input
                type="text"
                placeholder=" Enter email here"
                className="px-4 py-2 bg-gray-50 w-full mt-4  "
              />
            </div>
          </div>
          <button className="w-full mt-5 bg-indigo-600 text-white py-2 rounded-md font-semibold tracking-tight">
            Submit
          </button>
          <div className="mt-8 text-sm font-display font-semibold text-gray-700 text-center">
            Go back to{" "}
            <a className="cursor-pointer text-indigo-600 hover:text-indigo-800">
              Sign in
            </a>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Forgot;
