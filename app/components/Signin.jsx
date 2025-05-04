import React from "react";

const SignIn = ({ onClose }) => {
  return (
    <div className="min-h-screen bg-white-900 flex items-center justify-center px-4">
      <div className="bg-white text-gray-900 rounded-2xl shadow-lg p-10 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-2">Welcome Back</h2>
        <p className="text-center text-gray-600 mb-6">Sign in to your account</p>

        {/* Sign in buttons */}
        <div className="flex flex-col gap-4 mb-6">
          <button className="flex items-center justify-center gap-3 border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition">
            <img src="/google.png" alt="Google" className="w-5 h-5" />
            <span>Continue with Google</span>
          </button>
          <button className="flex items-center justify-center gap-3 border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition">
            <img src="/nike.png" alt="Nike" className="w-6 h-6" />
            <span>Continue with Nike</span>
          </button>
        </div>

        <div className="flex items-center gap-2 mb-6">
          <hr className="flex-grow border-gray-300" />
          <span className="text-gray-400 text-sm">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Email and Password Form */}
        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-800"
          />
          <input
            type="password"
            placeholder="Password"
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-800"
          />
          <button
            type="submit"
            className="bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-700 transition"
          >
            Sign In
          </button>
        </form>

        <p className="text-sm text-center text-gray-500 mt-6">
          Don't have an account?{" "}
          <span className="text-blue-500 hover:underline cursor-pointer">
            Sign up
          </span>
        </p>

        <button
          onClick={onClose}
          className="mt-6 w-full text-center text-sm text-gray-500 hover:text-gray-800"
        >
          ← Back to Homepage
        </button>
      </div>
    </div>
  );
};

export default SignIn;
