"use client";
import React, { useState } from "react";
import Main from "./mainsection/main";
import Sidebar from "./sidesection/side";
import SignIn from "./components/Signin.jsx";
import NavItemWithMegaMenu from "./components/NavItemWithMegaMenu";
const Page = () => {
  const [showSignIn, setShowSignIn] = useState(false);

  return (
    <>
      {showSignIn ? (
        <SignIn onClose={() => setShowSignIn(false)} />
      ) : (
        <>
          {/* Top Bar Section */}
          <div className="flex justify-end items-center gap-4 px-8 py-2 bg-gray-100 text-sm text-gray-700 font-medium">
            <span className="cursor-pointer hover:underline">Find a Store</span>
            <span className="text-gray-400">|</span>
            <span className="cursor-pointer hover:underline">Help</span>
            <span className="text-gray-400">|</span>
            <span className="cursor-pointer hover:underline">Join Us</span>
            <span className="text-gray-400">|</span>
            <span
              className="cursor-pointer hover:underline"
              onClick={() => setShowSignIn(true)}
            >
              Sign In
            </span>
          </div>

          {/* Navbar Section */}
          {/* Navbar Section */}
          <div className="sticky top-0 z-50 bg-white h-20 flex justify-between items-center px-8 shadow-sm">
          {/* Left Section - Logo */}
            <div className="flex items-center">
              <img className="w-16 h-16" src="/nike.png" alt="Nike Logo" />
            </div>

            {/* Center Section - Menu Items */}
            <div className="flex gap-10">
              <NavItemWithMegaMenu title="New" />
              <NavItemWithMegaMenu title="Men" />
              <NavItemWithMegaMenu title="Women" />
              <NavItemWithMegaMenu title="Kids" />
              <NavItemWithMegaMenu title="Sport" />
            </div>

            {/* Right Section - Search & Icons */}
            <div className="flex items-center gap-6">
              <div className="relative">
                <input
                  className="px-4 py-2 h-9 w-560 rounded-full bg-gray-200"
                  type="text"
                  placeholder="Search"
                />
                <img
                  className="absolute right-3 top-2.5 w-5 h-5"
                  src="/search-icon.png"
                  alt="Search"
                />
              </div>
              <img
                className="w-6 h-6 cursor-pointer"
                src="/heart.png"
                alt="Wishlist"
              />
              <img
                className="w-6 h-6 cursor-pointer"
                src="/parcel.png"
                alt="Cart"
              />
            </div>
          </div>

          {/* Sidebar & Main Content */}
          <div className="flex">
            <Sidebar />
            <Main />
          </div>
        </>
      )}
    </>
  );
};

export default Page;
