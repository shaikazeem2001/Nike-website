"use client";
import React, { useState } from "react";
import { navMenu } from "./megaMenuData";

const NavItemWithMegaMenu = ({ title }) => {
  const [show, setShow] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <span className="cursor-pointer px-4 py-2 font-bold hover:text-gray-700 transition">
        {title}
      </span>

      {show && navMenu[title] && (
        <div className="fixed left-0 top-[102px] w-full bg-white py-10 px-20 shadow-xl z-40 transition-all duration-300">
        <div className="max-w-screen-xl mx-auto grid grid-cols-4 gap-10">
            {navMenu[title].map((section, index) => (
              <div key={index}>
                <h4 className="font-semibold text-base mb-3 text-black">{section.title}</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  {section.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="hover:text-black hover:underline cursor-pointer transition"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavItemWithMegaMenu;
