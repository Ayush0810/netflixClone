import React from "react";
import "./Signin.css";

function Signin() {
  return (
    <div>
      <div className="back flex flex-col items-center">
        <div className="logo absolute top-2 left-5 p-4">
          <img
            className="w-6/12 brightness-125"
            src="https://i.ibb.co/r5krrdz/logo.png"
            alt=""
          />
        </div>
        <div className="box absolute top-20  backdrop-contrast-200 p-8 rounded-lg shadow-lg">
          <form action="">
            <span className="text-white text-left text-3xl relative left-8 top-8">
              Sign In
            </span>
            <input
              className="bg-gray-800 h-12 w-[80%] p-5 rounded-md relative top-14 left-9"
              type="email"
              placeholder="Email or Phone Number"
            />
            <input
              className="bg-gray-800 h-12 w-[80%] p-5 rounded-md relative top-[5rem] left-9"
              type="email"
              placeholder="Password"
            />

            <button className="bg-red-800 contrast-125 h-14 w-[80%] p-5 rounded-md relative top-[7rem] left-9 text-center text-white ">
              Sign in
            </button>
            <div className="mt-2 w-[80%] relative top-[7rem] left-9 flex justify-between ">
              <span className="text-gray-700 text-sm">
                <input className="bg-gray-700" type="checkbox" />Remember me
              </span>
              <h1 className="text-gray-700 text-sm">Need help?</h1>
            </div>

            <div className="w-[80%] relative top-[13rem] left-9 space-y-4">
              <h1 className="text-white">
                <span className="text-gray-700">New to Netflix?</span> Sign up
                now.
              </h1>
              <p className="text-gray-600 text-sm ">
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot.{" "}
                <a className="text-blue-700" href="">
                  Learn more
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signin;
