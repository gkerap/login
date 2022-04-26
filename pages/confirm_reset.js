import React from "react";

function Confirm() {
  return (
    <form>
      <div className="flex items-center justify-center h-screen ">
        <div className="bg-white py-6 rounded px-10 w-2/5 text-center">
          <h1 className="text-4xl font-bold text-gray-500 my-6">
            Forget Password
          </h1>
          {/* Picture */}
          <p>
            You have just made a request to reset your password.Click the button
            below to reset your password.If you did not make this request,
            please ignore this email.
          </p>

          <button className="w-full mt-5 bg-indigo-600 text-white py-2 rounded-md font-semibold tracking-tight">
            Reset Password
          </button>
        </div>
      </div>
    </form>
  );
}

export default Confirm;

// function COnfirm() {
//     return (
//         <div style={{position: "relative"}} className="container">
//             <div className="confirm-reset">
//                 <div style={{boxShadow: "1px 1px 1px solid grey"}} className="infoCont">
//                     <div className="resLogo d-flex justify-content-center pt-4"><img src="/image.jpg" alt="logo"/></div>
//                     <div className="resTitle text-center pt-2 ">Forgot Password</div>
//                     <div className="col-md-12 text-center p-2">
//                         <span style={{fontSize: "100px"}}><i className="bi bi-lock-fill"></i></span>
//                     </div>
//                     <p className="text-black-50 text-center">
//
//                     </p>

//                     <div className="col-md-12 text-center mb-5">
//                     <button className='btn btn-primary text-center mb-5'>Reset Password</button>
//                     </div>
//                 </div>

//             </div>
//         </div>

//      );
// }

// export default COnfirm;
