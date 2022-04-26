import React from "react";

const Reset = () => {
  return (
    <form>
      <div className="flex items-center justify-center h-screen ">
        <div className="bg-white py-6 rounded px-10 w-2/5 ">
          <h1 className="text-4xl font-bold text-gray-500 my-6">
            Reset Password
          </h1>
          <p>Please kindly reset your password</p>
          <div className="space-y-4 w-full mt-6">
            <div className="w-full">
              <span className=""> New Password</span>
              <input
                type="password"
                placeholder="New Password"
                className="px-4 py-2 bg-gray-50 w-full mt-4  "
              />
            </div>

            <div className="w-full">
              <span className="">Old Password</span>
              <input
                type="password"
                placeholder="Old Password"
                className="px-4 py-2 bg-gray-50 w-full mt-4  "
              />
            </div>
          </div>
          <button className="w-full mt-5 bg-indigo-600 text-white py-2 rounded-md font-semibold tracking-tight">
            Next
          </button>
        </div>
      </div>
    </form>
  );
};

export default Reset;
